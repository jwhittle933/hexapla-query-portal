package org.hexapla.queryportal

import org.hexapla.queryportal.views.*
import react.*
import react.router.dom.*

class Router(props: RProps) : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        hashRouter {
            switch {
                route("/", IndexView::class, exact = true)
            }
        }
    }
}