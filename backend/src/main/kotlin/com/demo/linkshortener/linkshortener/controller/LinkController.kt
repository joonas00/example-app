package com.demo.linkshortener.linkshortener.controller

import com.demo.linkshortener.linkshortener.dto.LinkCreationRequest
import com.demo.linkshortener.linkshortener.dto.LinkCreationResponse
import com.demo.linkshortener.linkshortener.service.LinkService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.view.RedirectView

@RestController
class LinkController {

    @Autowired lateinit var linkService: LinkService

    @PostMapping("/shorten")
    fun createShortenedLink(@RequestBody request: LinkCreationRequest): LinkCreationResponse {
        return LinkCreationResponse(linkService.createShortlink(request.url), request.url)
    }

    @GetMapping("/{key}")
    fun redirectToTarget(@PathVariable("key") key: String): RedirectView {
        return RedirectView(linkService.getUrl(key))
    }

  /*  @GetMapping("/statistics/{id}")
    fun getIdStatistics(@PathVariable("id") id: String): StatisticResponse {

    }
*/
}
