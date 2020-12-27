import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window
import org.hexapla.queryportal.*

fun main() {
    window.onload = {
        render(document.getElementById("root")) {
            child(QueryPortal::class) {
                attrs {
                    name = "Kotlin/JS"
                }
            }
        }
    }
}
