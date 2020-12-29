package org.hexapla.queryportal.views

import org.hexapla.queryportal.QueryPortalStyles
import org.hexapla.queryportal.context.QueryPortalContext
import react.*
import react.dom.*
import styled.*

external interface IndexViewProps : RProps { }

val IndexView = functionalComponent<IndexViewProps> {
    var context = useContext(QueryPortalContext)

    styledDiv {
        css {
            +QueryPortalStyles.mainView
        }
        styledDiv {
            css {
                +QueryPortalStyles.qpFrame
            }
            div(classes = "frame-heading") {
                h1 {
                    styledP {
                        css {
                            classes = mutableListOf("title is-size-4")
                            +QueryPortalStyles.fontSecond
                        }
                        +"Query Portal"
                    }
                    styledP {
                        css {
                            classes = mutableListOf("is-size-7", "subtitle")
                            +QueryPortalStyles.fontSecond
                        }
                        +"Welcome to the home for The Hexapla Institute Query Portal"
                    }
                }
            }
            div(classes = "frame-body") {
                p(classes = "content") {
                    +"Signed In: ${context.userSignedIn}"
                }
            }
        }

    }
}

fun RBuilder.index(handler: IndexViewProps.() -> Unit) = child(IndexView) {
    attrs {
        handler()
    }
}

