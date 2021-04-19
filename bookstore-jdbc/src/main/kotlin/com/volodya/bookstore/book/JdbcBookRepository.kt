package com.volodya.bookstore.book

import com.volodya.bookstore.author.AuthorTable
import org.springframework.stereotype.Repository
import org.springframework.transaction.support.TransactionOperations
import org.ufoss.kotysa.SqlClient

@Repository
class JdbcBookRepository(
    private val sqlClient: SqlClient,
    private val transactionOperations: TransactionOperations,
) {
    fun getById(id: Int): BookView {
        return transactionOperations.execute {
            val bookRow = sqlClient
                .selectFrom(BookTable)
                .where(BookTable.id).eq(id)
                .fetchOneOrNull() ?: throw IllegalArgumentException("Book with id $id not found")

            val author = sqlClient
                .selectFrom(AuthorTable)
                .where(AuthorTable.id).eq(bookRow.authorId)
                .fetchOne()!!

            BookView(id = bookRow.id, name = bookRow.name, description = bookRow.description, author = author)
        }!!
    }

    fun fetchAll(limit: Int, offset: Int): List<BookRow> {
        return sqlClient
            .selectFrom(BookTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    fun insert(row: BookRow): BookView {
        return transactionOperations.execute {
            val author = sqlClient
                .selectFrom(AuthorTable)
                .where(AuthorTable.id).eq(row.authorId)
                .fetchOneOrNull() ?: throw IllegalArgumentException("Author with id ${row.authorId} not found")

            sqlClient.insert(row)

            val insertedRow = sqlClient
                .selectFrom(BookTable)
                .where(BookTable.id).eq(row.id)
                .fetchOne()!!

            BookView(
                id = insertedRow.id,
                name = insertedRow.name,
                description = insertedRow.description,
                author = author
            )
        }!!
    }
}