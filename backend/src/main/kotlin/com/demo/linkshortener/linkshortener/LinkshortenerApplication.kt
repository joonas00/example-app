package com.demo.linkshortener.linkshortener

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LinkshortenerApplication

fun main(args: Array<String>) {
    runApplication<LinkshortenerApplication>(*args)
}
