package org.hexapla.queryportal

import kotlinx.css.*
import styled.StyleSheet

object QueryPortalStyles : StyleSheet("QueryPortalStyles", isStatic = true) {
    val mainView by css {
        padding(24.px)
        backgroundColor = rgba(0, 0, 0, 0.0)
    }

    val textInput by css {
        margin(vertical = 3.px, horizontal = 6.px)
        fontSize = 14.px
    }
}