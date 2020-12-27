import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window
import org.hexapla.Hexapla
import org.hexapla.queryportal.*

fun main() {
    val hexapla = Hexapla(version = 1.0.toFloat(), maintainer = "Jonathan Whittle", year = "2020")

    kotlinext.js.require("bulma")
    kotlinext.js.require("@fortawesome/fontawesome-free/js/all.min.js")
    window.onload = {
        render(document.getElementById("root")) {
            queryPortal {
                title = "The Hexapla Institute: Query Portal"
                maintianer = hexapla.maintainer
                version = hexapla.version
            }
        }
    }
}
