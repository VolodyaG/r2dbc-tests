package com.volodya.bookstore.author

import kotlinx.coroutines.flow.Flow
import org.springframework.r2dbc.connection.R2dbcTransactionManager
import org.springframework.stereotype.Repository
import org.springframework.transaction.reactive.TransactionalOperator
import org.springframework.transaction.reactive.executeAndAwait
import org.ufoss.kotysa.CoroutinesSqlClient

@Repository
class CoroutinesAuthorRepository(
    private val sqlClient: CoroutinesSqlClient,
    private val transactionManager: R2dbcTransactionManager
) {
    suspend fun getById(id: Int): AuthorRow {
        return sqlClient
            .selectFrom(AuthorTable)
            .where(AuthorTable.id).eq(id)
            .fetchOneOrNull() ?: throw IllegalArgumentException("Author with id $id not found")
    }

    fun fetchAll(limit: Int, offset: Int): Flow<AuthorRow> {
        return sqlClient
            .selectFrom(AuthorTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    suspend fun insert(row: AuthorRow): AuthorRow {
        return TransactionalOperator.create(transactionManager).executeAndAwait {
            sqlClient.insert(row)
            getById(row.id)
        }!!
    }
}