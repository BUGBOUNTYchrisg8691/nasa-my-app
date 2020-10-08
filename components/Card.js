import React from "react"

import Photo from "./Photos/Photos"
import Weather from "./Weather"

export default function Cards() {
    return (
        <div>
            Card (Where a photo will go)
            <Photo />
            Card-cont'd (Where the weather will go)
            <Weather />
        </div>
    )
}
