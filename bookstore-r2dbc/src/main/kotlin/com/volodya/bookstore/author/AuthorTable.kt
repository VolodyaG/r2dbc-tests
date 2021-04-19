package com.volodya.bookstore.author

import org.ufoss.kotysa.postgresql.PostgresqlTable
import java.time.LocalDate

data class AuthorRow(
    val id: Int,
    val firstName: String,
    val lastName: String,
    val birthday: LocalDate?,
)

object AuthorTable : PostgresqlTable<AuthorRow>("author") {
    val id = integer(AuthorRow::id, "id").primaryKey()
    val firstName = varchar(AuthorRow::firstName, "first_name")
    val lastName = varchar(AuthorRow::lastName, "last_name")
    val birthday = date(AuthorRow::birthday, "birthday")
}