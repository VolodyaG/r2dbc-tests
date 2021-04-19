package com.volodya.bookstore.author

import java.time.LocalDate

data class AuthorView(
    val id: Int,
    val firstName: String,
    val lastName: String,
    val birthday: LocalDate?,
    val books: List<BookView>,
) {
    class BookView(
        val id: Int,
        val name: String,
        val description: String,
    )
}

