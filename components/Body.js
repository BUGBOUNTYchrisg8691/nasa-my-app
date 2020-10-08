import React from "react"

import Section from "./Section"

export default function Body(props) {
    const { weather, photos } = props

    const keys = Object.keys(weather).splice(0, 7)

    return (
        <div>
            Body (Where the sections go)
            {keys.map(key => {
                return <Section photos={ photos } locations={ keys } location={ key } weather={ weather[key] } />
            })}
        </div>
    )
}