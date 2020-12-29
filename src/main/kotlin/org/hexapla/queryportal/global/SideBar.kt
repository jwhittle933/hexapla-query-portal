package org.hexapla.queryportal.global

import kotlinx.css.backgroundColor
import kotlinx.css.color
import org.hexapla.queryportal.QueryPortalStyles
import react.*
import react.dom.*
import styled.*

external interface QPSideBarProps : RProps {
    //
}

val QPSideBar = functionalComponent<QPSideBarProps> {
    val (open, setOpen) = useState<Boolean>(false)

    styledDiv {
        css {
            +QueryPortalStyles.qpSideBar
            backgroundColor = QueryPortalStyles.lightGrey()
        }
        styledDiv {
            css {
                +QueryPortalStyles.flexColumn
                color = QueryPortalStyles.tertiaryColor()
            }
            span(classes = "icon") {
                i(classes = "fas fa-home") { }
            }
            span(classes = "icon") {
                i(classes = "fas fa-search") { }
            }
        }
        styledDiv {
            css {
                +QueryPortalStyles.flexColumn
                color = QueryPortalStyles.tertiaryColor()
            }
            span(classes = "icon") {
                i(classes = "fas fa-lock") { }
            }
            span(classes = "icon") {
                i(classes = "fas fa-bars") { }
            }
        }
    }
}

fun RBuilder.qpSideBar(handler: QPSideBarProps.() -> Unit) = child(QPSideBar) {
    attrs {
        handler()
    }
}

