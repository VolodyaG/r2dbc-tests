package com.volodya.bookstore.author

import org.springframework.r2dbc.connection.R2dbcTransactionManager
import org.springframework.stereotype.Service
import org.springframework.transaction.reactive.TransactionalOperator
import org.ufoss.kotysa.r2dbc.ReactorSqlClient
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ReactiveAuthorRepository(
    private val sqlClient: ReactorSqlClient,
    private val transactionManager: R2dbcTransactionManager
) {
    fun getById(id: Int): Mono<AuthorRow> {
        return sqlClient
            .selectFrom(AuthorTable)
            .where(AuthorTable.id).eq(id)
            .fetchOne()
            .flatMap {
                if (it == null) {
                    Mono.error(IllegalArgumentException("Author with id $id not found"))
                } else {
                    Mono.just(it)
                }
            }
    }

    fun fetchAll(limit: Int, offset: Int): Flux<AuthorRow> {
        return sqlClient
            .selectFrom(AuthorTable)
            .limit(limit).offset(offset)
            .fetchAll()
    }

    fun insert(row: AuthorRow): Mono<AuthorRow> {
        return TransactionalOperator.create(transactionManager)
            .execute { sqlClient.insert(row) }
            .then(getById(row.id))
    }
}