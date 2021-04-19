package com.volodya.bookstore.book

import com.volodya.bookstore.author.AuthorTable
import org.springframework.r2dbc.connection.R2dbcTransactionManager
import org.springframework.stereotype.Service
import org.springframework.transaction.reactive.TransactionalOperator
import org.ufoss.kotysa.r2dbc.ReactorSqlClient
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.kotlin.core.publisher.switchIfEmpty

@Service
class ReactiveBookRepository(
    private val sqlClient: ReactorSqlClient,
    private val transactionManager: R2dbcTransactionManager
) {
    fun getById(id: Int): Mono<BookView> {
        return TransactionalOperator.create(transactionManager).execute {
            sqlClient
                .selectFrom(BookTable)
                .where(BookTable.id).eq(id)
                .fetchOne()
                .switchIfEmpty { Mono.error(IllegalArgumentException("Book with id $id not found")) }
                .flatMap { bookRow ->
                    sqlClient
                        .selectFrom(AuthorTable)
                        .where(AuthorTable.id).eq(bookRow.authorId)
                        .fetchOne()
                        .map {
                            BookView(
                                id = bookRow.id,
                                name = bookRow.name,
                                description = bookRow.description,
                                author = it
                            )
                        }
                }
        }.single()
    }

    fun fetchAll(limit: Int, offset: Int): Flux<BookRow> {
        return sqlClient
            .selectFrom(BookTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    fun insert(row: BookRow): Mono<BookView> {
        return TransactionalOperator.create(transactionManager).execute {
            sqlClient
                .selectFrom(AuthorTable)
                .where(AuthorTable.id).eq(row.authorId)
                .fetchOne()
                .switchIfEmpty { Mono.error(IllegalArgumentException("Author with id ${row.authorId} not found")) }
                .flatMap { sqlClient.insert(row).thenReturn(it) }
                .flatMap { author ->
                    sqlClient
                        .selectFrom(BookTable)
                        .where(BookTable.id).eq(row.id)
                        .fetchOne()
                        .map {
                            BookView(
                                id = it.id,
                                name = it.name,
                                description = it.description,
                                author = author
                            )
                        }
                }
        }.single()
    }
}