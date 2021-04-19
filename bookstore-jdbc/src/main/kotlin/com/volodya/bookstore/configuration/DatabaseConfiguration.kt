package com.volodya.bookstore.configuration

import com.volodya.bookstore.author.AuthorTable
import com.volodya.bookstore.book.BookTable
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.jdbc.core.JdbcOperations
import org.ufoss.kotysa.SqlClient
import org.ufoss.kotysa.spring.jdbc.sqlClient
import org.ufoss.kotysa.tables

@Configuration
class DatabaseConfiguration {
    companion object {
        private val tables = tables().postgresql(BookTable, AuthorTable)
    }

    @Bean
    fun jdbcSqlClient(jdbcOperations: JdbcOperations): SqlClient = jdbcOperations.sqlClient(tables)
}