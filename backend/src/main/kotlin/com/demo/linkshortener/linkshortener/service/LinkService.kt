package com.demo.linkshortener.linkshortener.service

import com.demo.linkshortener.linkshortener.exception.UrlNotFoundException
import com.demo.linkshortener.linkshortener.model.Url
import com.demo.linkshortener.linkshortener.repository.UrlRepository
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.security.MessageDigest
import java.time.OffsetDateTime
import java.util.*
import javax.transaction.Transactional

@Service
class LinkService {

    private val logger = LoggerFactory.getLogger(LinkService::class.java)

    @Autowired lateinit var urlRepository: UrlRepository

    fun getUrl(key: String): String {
        val entity = urlRepository.findById(key)
        if (entity.isEmpty) throw UrlNotFoundException("URL not found with key $key")
        return if (!entity.get().url.startsWith("http://") && !entity.get().url.startsWith("https://")) "http://${entity.get().url}" else entity.get().url
    }

    //this would not work well in heavy usage
    @Transactional
    fun createShortlink(url: String): String {
        logger.info("Creating a shortened link for URL: $url")
        var num = 0
        var key: String
        do {
            key = createIdentifier("$url${num++}")
            val alreadyExisting = urlRepository.findById(key)
            if (alreadyExisting.isPresent && alreadyExisting.get().url == url) return key
        }  while (alreadyExisting.isPresent && alreadyExisting.get().url != url)

        val urlEntity = Url(key, url, OffsetDateTime.now(), listOf())
        val entity = urlRepository.save(urlEntity)
        return entity.key
    }
    
    private fun createIdentifier(url: String): String {
        val digest = MessageDigest.getInstance("SHA-256")
        digest.update(url.toByteArray())
        return String(Base64.getEncoder().encode(digest.digest())).substring(0 .. 7)
    }
}