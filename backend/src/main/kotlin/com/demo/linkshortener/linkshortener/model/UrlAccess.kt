package com.demo.linkshortener.linkshortener.model

import java.time.OffsetDateTime
import javax.persistence.Embeddable
import javax.persistence.Entity
import javax.persistence.ManyToOne

@Embeddable
class UrlAccess {
    var accessed: OffsetDateTime = OffsetDateTime.MIN
    constructor()
    constructor(accessed: OffsetDateTime) {
        this.accessed = accessed
    }

}