package com.demo.linkshortener.linkshortener.model

import java.time.OffsetDateTime
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.Id

@Entity(name = "Url")
class Url {
    @Id
    var key: String = ""
    var url: String = ""
    var createdAt: OffsetDateTime? = null
    @ElementCollection
    var urlAccess: List<UrlAccess> = listOf()

    constructor()
    constructor(key: String, url: String, createdAt: OffsetDateTime?, urlAccess: List<UrlAccess>) {
        this.key = key
        this.url = url
        this.createdAt = createdAt
        this.urlAccess = urlAccess
    }
}