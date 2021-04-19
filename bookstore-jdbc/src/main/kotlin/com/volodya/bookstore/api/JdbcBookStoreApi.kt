package com.volodya.bookstore.api

import com.volodya.bookstore.author.AuthorRow
import com.volodya.bookstore.author.JdbcAuthorRepository
import com.volodya.bookstore.book.BookRow
import com.volodya.bookstore.book.BookView
import com.volodya.bookstore.book.JdbcBookRepository
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/jdbc")
@Tag(description = "Jdbc методы", name = "Jdbc")
class JdbcBookStoreApi(
    private val authorRepository: JdbcAuthorRepository,
    private val booksRepository: JdbcBookRepository,
) {
    @GetMapping("/authors")
    fun getAllAuthors(@RequestParam limit: Int, @RequestParam offset: Int): List<AuthorRow> {
        return authorRepository.fetchAll(limit, offset)
    }

    @GetMapping("/authors/{id}")
    fun getAuthor(@PathVariable id: Int): AuthorRow {
        return authorRepository.getById(id)
    }

    @PostMapping("/authors")
    fun createAuthor(@RequestBody author: AuthorRow): AuthorRow {
        return authorRepository.insert(author)
    }

    @GetMapping("/books")
    fun getAllBooks(@RequestParam limit: Int, @RequestParam offset: Int): List<BookRow> {
        return booksRepository.fetchAll(limit, offset)
    }

    @GetMapping("/books/{id}")
    fun getBook(@PathVariable id: Int): BookView {
        return booksRepository.getById(id)
    }

    @PostMapping("/books")
    fun createBook(@RequestBody book: BookRow): BookView {
        return booksRepository.insert(book)
    }
}