import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import org.w3c.dom.HTMLInputElement
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledDiv
import styled.styledInput
import org.hexapla.queryportal.QueryPortalStyles

external interface QueryPortalProps: RProps {
    var name: String
}

data class QueryPortalState(val name: String) : RState

@JsExport
class QueryPortal(props: QueryPortalProps) : RComponent<QueryPortalProps, QueryPortalState>(props) {
    init {
        state = QueryPortalState(props.name)
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                +QueryPortalStyles.mainView
            }
            +"Hello, ${state.name}"
        }
        styledInput {
            css {
                +WelcomeStyles.textInput
            }
            attrs {
                type = InputType.text
                value = state.name
                onChangeFunction = { event ->
                    setState(
                        QueryPortalState(name = (event.target as HTMLInputElement).value)
                    )
                }
            }
        }
    }
}
