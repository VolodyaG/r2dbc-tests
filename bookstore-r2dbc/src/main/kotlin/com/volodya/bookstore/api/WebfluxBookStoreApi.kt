package com.volodya.bookstore.api

import com.volodya.bookstore.author.AuthorRow
import com.volodya.bookstore.author.ReactiveAuthorRepository
import com.volodya.bookstore.book.BookRow
import com.volodya.bookstore.book.BookView
import com.volodya.bookstore.book.ReactiveBookRepository
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/webflux")
@Tag(description = "Webflux методы", name = "Webflux")
class WebfluxBookStoreApi(
    private val authorRepository: ReactiveAuthorRepository,
    private val booksRepository: ReactiveBookRepository,
) {
    @GetMapping("/authors")
    fun getAllAuthors(@RequestParam limit: Int, @RequestParam offset: Int): Flux<AuthorRow> {
        return authorRepository.fetchAll(limit, offset)
    }

    @GetMapping("/authors/{id}")
    fun getAuthor(@PathVariable id: Int): Mono<AuthorRow> {
        return authorRepository.getById(id)
    }

    @PostMapping("/authors")
    fun createAuthor(@RequestBody author: AuthorRow): Mono<AuthorRow> {
        return authorRepository.insert(author)
    }

    @GetMapping("/books")
    fun getAllBooks(@RequestParam limit: Int, @RequestParam offset: Int): Flux<BookRow> {
        return booksRepository.fetchAll(limit, offset)
    }

    @GetMapping("/books/{id}")
    fun getBook(@PathVariable id: Int): Mono<BookView> {
        return booksRepository.getById(id)
    }

    @PostMapping("/books")
    fun createBook(@RequestBody book: BookRow): Mono<BookView> {
        return booksRepository.insert(book)
    }
}