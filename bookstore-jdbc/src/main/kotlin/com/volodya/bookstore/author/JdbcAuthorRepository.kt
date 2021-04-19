package com.volodya.bookstore.author

import org.springframework.stereotype.Repository
import org.springframework.transaction.support.TransactionOperations
import org.ufoss.kotysa.SqlClient

@Repository
class JdbcAuthorRepository(
    private val sqlClient: SqlClient,
    private val transactionOperations: TransactionOperations,
) {
    fun getById(id: Int): AuthorRow {
        return sqlClient
            .selectFrom(AuthorTable)
            .where(AuthorTable.id).eq(id)
            .fetchOneOrNull() ?: throw IllegalArgumentException("Author with id $id not found")
    }

    fun fetchAll(limit: Int, offset: Int): List<AuthorRow> {
        return sqlClient
            .selectFrom(AuthorTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    fun insert(row: AuthorRow): AuthorRow {
        return transactionOperations.execute {
            sqlClient.insert(row)
            getById(row.id)
        }!!
    }
}