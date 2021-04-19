package com.volodya.bookstore.book

import com.volodya.bookstore.author.AuthorTable
import kotlinx.coroutines.flow.Flow
import org.springframework.r2dbc.connection.R2dbcTransactionManager
import org.springframework.stereotype.Repository
import org.springframework.transaction.reactive.TransactionalOperator
import org.springframework.transaction.reactive.executeAndAwait
import org.ufoss.kotysa.CoroutinesSqlClient

@Repository
class CoroutinesBookRepository(
    private val sqlClient: CoroutinesSqlClient,
    private val transactionManager: R2dbcTransactionManager
) {
    suspend fun getById(id: Int): BookView {
        return TransactionalOperator.create(transactionManager).executeAndAwait {
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

    fun fetchAll(limit: Int, offset: Int): Flow<BookRow> {
        return sqlClient
            .selectFrom(BookTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    suspend fun insert(row: BookRow): BookView {
        return TransactionalOperator.create(transactionManager).executeAndAwait {
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