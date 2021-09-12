package com.demo.linkshortener.linkshortener.repository

import com.demo.linkshortener.linkshortener.model.Url
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UrlRepository: CrudRepository<Url, String> {}