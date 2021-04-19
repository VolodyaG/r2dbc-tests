package com.volodya.bookstore.configuration

import com.volodya.bookstore.author.AuthorTable
import com.volodya.bookstore.book.BookTable
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.r2dbc.core.DatabaseClient
import org.ufoss.kotysa.CoroutinesSqlClient
import org.ufoss.kotysa.r2dbc.ReactorSqlClient
import org.ufoss.kotysa.r2dbc.coSqlClient
import org.ufoss.kotysa.r2dbc.sqlClient
import org.ufoss.kotysa.tables

@Configuration
class DatabaseConfiguration {
    companion object {
        private val tables = tables().postgresql(BookTable, AuthorTable)
    }

    @Bean
    fun reactorSqlClient(dbClient: DatabaseClient): ReactorSqlClient = dbClient.sqlClient(tables)

    @Bean
    fun coroutinesSqlClient(dbClient: DatabaseClient): CoroutinesSqlClient = dbClient.coSqlClient(tables)
}