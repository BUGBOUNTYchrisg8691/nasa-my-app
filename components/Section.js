import React from "react"

import Photos from "./Photos"
import Weather from "./Weather"

export default function Sections(props) {
    const { photos, locations, location, weather } = props

    return (
        <div>
            Section
            <Photos photos={ photos } locations={ locations } />
            <Weather weather={ weather } location={ location } />
        </div>
    )
}
