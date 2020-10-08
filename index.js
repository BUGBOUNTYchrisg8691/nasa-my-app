import React from "react"
import { render } from "react-dom"

import NasaApp from "./components/NasaApp"
import "./styles.scss"
// import "./styles.css" 
// import "./styles.less"

render (
    <NasaApp />,
    document.querySelector("#root")
)
