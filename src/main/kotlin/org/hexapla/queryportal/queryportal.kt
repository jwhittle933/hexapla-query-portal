package org.hexapla.queryportal

import kotlinx.css.*
import org.hexapla.queryportal.context.QueryPortalContext
import org.hexapla.queryportal.context.UserContext
import org.hexapla.queryportal.global.qpHeader
import org.hexapla.queryportal.global.qpSideBar
import react.*
import react.dom.*
import styled.*
import kotlin.Float

external interface QueryPortalProps : RProps {
    var title: String
    var version: Float
    var maintianer: String
}

data class QueryPortalState(val name: String) : RState

@JsName("QueryPortal")
@JsExport
val QueryPortal = functionalComponent<QueryPortalProps> { props ->
    val (userSignedIn, setUserSignedIn) = useState(false)
    val userContext = UserContext(userSignedIn, setUserSignedIn)

    QueryPortalContext.Provider(value = userContext) {
        qpHeader {
            title = props.title
        }
        styledDiv {
            css {
                +QueryPortalStyles.flexible
                justifyContent = JustifyContent.flexStart
            }
            styledDiv {
                css {
                    width = LinearDimension("3em")
                }
                qpSideBar { }
            }
            styledDiv {
                css {
                    width = LinearDimension("100%")
                }
                qpRouter { }
            }
        }
    }
}

fun RBuilder.queryPortal(handler: QueryPortalProps.() -> Unit) = child(QueryPortal) {
    attrs {
        handler()
    }
}
