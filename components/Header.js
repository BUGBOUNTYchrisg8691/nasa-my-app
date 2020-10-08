import React from "react"

import Nav from "./Utils/Nav"
import Logo from "./Utils/Logo"

export default function Header() {
    return (
        <div>
            Header (which will include a logo and a nav)
            <Logo />
            <Nav /> 
        </div>
    )
}
