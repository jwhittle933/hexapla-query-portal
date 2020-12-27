package org.hexapla.queryportal.global

import kotlinx.css.*
import org.hexapla.queryportal.QueryPortalStyles
import react.RBuilder
import react.RProps
import react.functionalComponent
import react.child
import react.dom.i
import react.dom.p
import react.dom.span
import styled.css
import styled.styledDiv
import styled.styledP
import kotlin.Float

external interface QPHeaderProps : RProps {
    var title : String
}

@JsName("QPHeader")
@JsExport
val QPHeader = functionalComponent<QPHeaderProps> { props ->
    styledDiv {
        css {
            +QueryPortalStyles.qpHeader
        }
        p {}
        styledP {
            css {
                classes = mutableListOf("has-text-white")
                +QueryPortalStyles.fontMain
            }
            +props.title
        }
        span(classes = "icon has-text-white") {
            i(classes = "fas fa-user") { }
        }
    }
}

fun RBuilder.qpHeader(handler: QPHeaderProps.() -> Unit) = child(QPHeader) {
    attrs {
        handler()
    }
}

