package org.hexapla.queryportal

import kotlinx.css.*
import kotlinx.css.properties.*
import styled.StyleSheet

object QueryPortalStyles : StyleSheet("QueryPortalStyles", isStatic = true) {
    val mainView by css {
        paddingLeft = LinearDimension("3em")
        paddingRight = LinearDimension("1em")
        paddingTop = LinearDimension("5em")
        backgroundColor = rgba(0, 0, 0, 0.0)
        width = LinearDimension("100%")
        height = LinearDimension("100%")
    }

    val qpFrame by css {
        boxShadowInset(
            Color("#ffffff"),
            LinearDimension("0"),
            LinearDimension("0.5px"),
            LinearDimension("0"),
            LinearDimension("0"),
        )
        boxShadow(
            Color("#b3b3b3"),
            LinearDimension("0"),
            LinearDimension("1px"),
            LinearDimension("2px"),
            LinearDimension("0"),
        )
        padding(LinearDimension("0"))
        minHeight = LinearDimension("12em")
        child(".frame-heading") {
            padding(LinearDimension("1em"))
            backgroundColor = Color("#fafafa")
            minHeight = LinearDimension("3em")
            +flexible
            alignItems =  Align.center
            justifyContent = JustifyContent.spaceBetween
            width = LinearDimension("100%")
        }

        child(".frame-body") {
            width = LinearDimension("100%")
            backgroundColor = Color.white
            padding = "1em"
            fontFamily = mainFont()
        }

        child(".frame-footer") {
            minHeight = LinearDimension("3em")
        }
    }

    val textInput by css {
        margin(vertical = 3.px, horizontal = 6.px)
        fontSize = 14.px
    }

    val click by css {
        cursor = Cursor.pointer
    }

    val fontMain by css {
        fontFamily = mainFont()
    }

    val fontSecond by css {
        fontFamily = secondaryFont()
    }

    val flexible by css {
        display = Display.flex
    }

    val flexBetween by css {
        +flexible
        justifyContent = JustifyContent.spaceBetween
        alignItems = Align.center
    }

    val flexColumn by css {
        +flexBetween
        flexDirection = FlexDirection.column
    }

    val qpHeader by css {
        position = Position.absolute
        top = LinearDimension("0")
        right = LinearDimension("0")
        left = LinearDimension("0")
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
        width = LinearDimension("3em")
        height = LinearDimension("100vh")
        +flexible
        flexDirection = FlexDirection.column
        justifyContent = JustifyContent.spaceBetween
        padding = "3em 0"
        paddingBottom = LinearDimension("1em")
        zIndex = -1

        div {
            minHeight = LinearDimension("5em")
            span {
                width = LinearDimension("100%")
                height = LinearDimension("3em")
                +click
                hover {
                    color = secondaryColor()
                    backgroundColor = tertiaryColor()
                }
            }
        }
    }

    private fun primaryColor()  = Color("#343b4d")
    fun secondaryColor() = Color("#bfd2ff")
    fun tertiaryColor() = Color("#3f6ca6")
    fun lightGrey() = Color("#f5f5f5")
    fun mainFont() = "acuta"
    fun secondaryFont() = "Merriweather"
}