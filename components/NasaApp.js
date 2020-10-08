import React, { useState, useEffect } from "react"
import axios from "axios"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

import { API_KEY } from "../constants"

/*
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY
*/

export default function NasaApp() {
    const [weather, setWeather] = useState([])
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)
            .then(resp => setWeather(resp.data))
            .catch(err => { console.log(err) })
    }, [])

    if (!weather) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Body weather={ weather } />
            <Footer />
        </div>
    )
}