package org.hexapla.queryportal.builders

import org.hexapla.queryportal.QueryPortalStyles
import react.RBuilder
import styled.css
import styled.styledDiv

fun RBuilder.div() {
    styledDiv {
        css {
            +QueryPortalStyles.mainView
        }
    }
}

