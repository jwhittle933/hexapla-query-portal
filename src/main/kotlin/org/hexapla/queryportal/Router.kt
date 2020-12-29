package org.hexapla.queryportal

import org.hexapla.queryportal.views.*
import react.*
import react.router.dom.*

val QPRouter = functionalComponent<RProps> {
    hashRouter {
        switch {
            route("/", strict = true) {
                index { }
            }
        }
    }
}

fun RBuilder.qpRouter(handler: RProps.() -> Unit) = child(QPRouter) {
    attrs {
        handler()
    }
}