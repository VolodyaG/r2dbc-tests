package com.volodya.bookstore.book

import com.volodya.bookstore.author.AuthorRow

data class BookView(
    val id: Int,
    val name: String,
    val description: String,
    val author: AuthorRow,
)
