package org.hexapla.queryportal.views

import org.hexapla.queryportal.QueryPortalStyles
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.*


class IndexView(props: RProps) : RComponent<RProps, RState>() {
    init {
        //
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                +QueryPortalStyles.mainView
            }
            +"IndexView"
        }
    }
}