package com.volodya.bookstore.api

import com.volodya.bookstore.author.AuthorRow
import com.volodya.bookstore.author.CoroutinesAuthorRepository
import com.volodya.bookstore.book.BookRow
import com.volodya.bookstore.book.BookView
import com.volodya.bookstore.book.CoroutinesBookRepository
import io.swagger.v3.oas.annotations.tags.Tag
import kotlinx.coroutines.flow.Flow
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/coroutines")
@Tag(description = "Suspend методы", name = "Coroutines")
class CoroutinesBookStoreApi(
    private val authorRepository: CoroutinesAuthorRepository,
    private val booksRepository: CoroutinesBookRepository,
) {
    @GetMapping("/authors")
    fun getAllAuthors(@RequestParam limit: Int, @RequestParam offset: Int): Flow<AuthorRow> {
        return authorRepository.fetchAll(limit, offset)
    }

    @GetMapping("/authors/{id}")
    suspend fun getAuthor(@PathVariable id: Int): AuthorRow {
        return authorRepository.getById(id)
    }

    @PostMapping("/authors")
    suspend fun createAuthor(@RequestBody author: AuthorRow): AuthorRow {
        return authorRepository.insert(author)
    }

    @GetMapping("/books")
    fun getAllBooks(@RequestParam limit: Int, @RequestParam offset: Int): Flow<BookRow> {
        return booksRepository.fetchAll(limit, offset)
    }

    @GetMapping("/books/{id}")
    suspend fun getBook(@PathVariable id: Int): BookView {
        return booksRepository.getById(id)
    }

    @PostMapping("/books")
    suspend fun createBook(@RequestBody book: BookRow): BookView {
        return booksRepository.insert(book)
    }
}