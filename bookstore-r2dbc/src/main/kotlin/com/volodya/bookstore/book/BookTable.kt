package com.volodya.bookstore.book

import com.volodya.bookstore.author.AuthorTable
import org.ufoss.kotysa.postgresql.PostgresqlTable

data class BookRow(
    val id: Int,
    val name: String,
    val description: String,
    val authorId: Int,
)

object BookTable : PostgresqlTable<BookRow>("book") {
    val id = integer(BookRow::id, "id").primaryKey()
    val name = varchar(BookRow::name, "name")
    val description = varchar(BookRow::description, "description")
    val authorId = integer(BookRow::authorId, "author_id").foreignKey(AuthorTable.id)
}