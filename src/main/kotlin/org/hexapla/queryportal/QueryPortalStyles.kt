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

    val fontMain by css {
        fontFamily = "acuta"
    }

    val flexible by css {
        display = Display.flex
    }

    val qpHeader by css {
        padding(LinearDimension("0"), LinearDimension("2em"))
        display = Display.flex
        justifyContent = JustifyContent.spaceBetween
        alignItems = Align.center
        width = LinearDimension("100%")
        backgroundColor = primaryColor()
        height = LinearDimension("3em")
        classes = mutableListOf("has-text-white")
    }

    val qpSideBar by css {
        position = Position.absolute
        top = LinearDimension("0")
        bottom = LinearDimension("0")
        left = LinearDimension("0")
        width = LinearDimension("3em")
        display = Display.flex
        flexDirection = FlexDirection.column
        justifyContent = JustifyContent.spaceBetween
    }

    private fun primaryColor()  = Color("#343b4d")
}