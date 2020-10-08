import React from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

import { API_KEY } from "../constants"

export default function NasaApp() {

    return (
        <div>
            <h1>My NASA App</h1>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}