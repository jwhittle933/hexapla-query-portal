package org.hexapla.queryportal.context

import react.*

class UserContext(
    var userSignedIn: Boolean,
    var setUserSignedIn: RSetState<Boolean>
)

val QueryPortalContext: RContext<UserContext> = createContext()

val QueryPortalProvider = functionalComponent<RProps> { props ->
    val (userSignedIn, setUserSignedIn) = useState(false)
    val userContext = UserContext(userSignedIn, setUserSignedIn)

    QueryPortalContext.Provider(value = userContext) { }
}




