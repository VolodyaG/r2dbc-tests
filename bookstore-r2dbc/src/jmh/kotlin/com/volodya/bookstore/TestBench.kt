package com.volodya.bookstore

import com.volodya.bookstore.author.*
import com.volodya.bookstore.book.BookTable
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.openjdk.jmh.annotations.*
import org.openjdk.jmh.infra.Blackhole
import org.springframework.boot.runApplication
import org.springframework.context.ConfigurableApplicationContext
import org.ufoss.kotysa.SqlClient
import java.time.LocalDate
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicInteger
import kotlin.random.Random
import kotlin.streams.asSequence

@Threads(4)
@State(Scope.Benchmark)
@BenchmarkMode(Mode.AverageTime, Mode.Throughput)
@Warmup(time = 20, timeUnit = TimeUnit.SECONDS, batchSize = JmhBenchmarkInsertAuthor.NUMBER_OF_CONCURRENT_REQUESTS, iterations = 1)
open class JmhBenchmarkInsertAuthor {
    lateinit var context: ConfigurableApplicationContext
    lateinit var reactiveAuthorRepository: ReactiveAuthorRepository
    lateinit var coroutinesAuthorRepository: CoroutinesAuthorRepository
    private val ids = AtomicInteger(0)

    @Setup(Level.Trial)
    fun setup() {
        this.context = runApplication<BookstoreApplication> { setAdditionalProfiles("test") }
        reactiveAuthorRepository = context.getBean(ReactiveAuthorRepository::class.java)
        coroutinesAuthorRepository = context.getBean(CoroutinesAuthorRepository::class.java)
        truncateTables()
    }

    @TearDown(Level.Trial)
    fun tearDown() {
        println("tearDown")
        context.close()
    }

    @Benchmark
    @Measurement(batchSize = NUMBER_OF_CONCURRENT_REQUESTS, timeUnit = TimeUnit.SECONDS, time = SECONDS_FOR_BENCHMARK, iterations = 2)
    fun reactiveInsertAuthor(bh: Blackhole) {
        val latch = CountDownLatch(NUMBER_OF_CONCURRENT_REQUESTS)
        repeat(NUMBER_OF_CONCURRENT_REQUESTS) {
            reactiveAuthorRepository
                .insert(authorRow())
                .subscribe {
                    bh.consume(it)
                    latch.countDown()
                }
        }
        latch.await(5, TimeUnit.MINUTES)
    }

    @Benchmark
    @Measurement(batchSize = NUMBER_OF_CONCURRENT_REQUESTS, timeUnit = TimeUnit.SECONDS, time = SECONDS_FOR_BENCHMARK, iterations = 2)
    fun coroutinesInsertAuthor(bh: Blackhole) {
        val latch = CountDownLatch(NUMBER_OF_CONCURRENT_REQUESTS)
        repeat(NUMBER_OF_CONCURRENT_REQUESTS) {
            GlobalScope.launch(Dispatchers.IO) {
                val row = coroutinesAuthorRepository.insert(authorRow())
                bh.consume(row)
                latch.countDown()
            }
        }
        latch.await(5, TimeUnit.MINUTES)
    }

    private fun authorRow(): AuthorRow {
        return AuthorRow(
            id = ids.getAndIncrement(),
            firstName = randomString(),
            lastName = randomString(),
            birthday = LocalDate.now().minusDays(Random.nextLong(1, 10000))
        )
    }

    private fun truncateTables() {
        context.getBean(SqlClient::class.java).apply {
            deleteAllFrom(BookTable)
            deleteAllFrom(AuthorTable)
        }
    }

    private fun randomString(size: Int = Random.nextInt(from = 4, until = 14)): String {
        val source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        return java.util.Random().ints(size.toLong(), 0, source.length)
            .asSequence().map(source::get).joinToString("")
    }

    companion object {
        // For proper comparison with async flow we will imitate
        // many simultaneous concurrent requests within one test iteration
        const val NUMBER_OF_CONCURRENT_REQUESTS = 2
        const val SECONDS_FOR_BENCHMARK = 30
    }
}