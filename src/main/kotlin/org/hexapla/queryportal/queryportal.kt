package org.hexapla.queryportal

import kotlinx.css.*
import org.hexapla.queryportal.global.qpHeader
import react.*
import react.dom.*
import styled.*
import kotlin.Float

external interface QueryPortalProps: RProps {
    var title : String
    var version: Float
    var maintianer: String
}

data class QueryPortalState(val name: String) : RState

@JsName("QueryPortal")
@JsExport
val QueryPortal = functionalComponent<QueryPortalProps> { props ->
    qpHeader {
        title = props.title
    }
}

fun RBuilder.queryPortal(handler: QueryPortalProps.() -> Unit) = child(QueryPortal) {
    attrs {
        handler()
    }
}
