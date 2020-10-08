import React from 'react'

import Photo from "./Photo"

export default function Photos(props) {
    const { photos, locations } = props

    return (
        <div>
            Photos 
            {/* forEach */}
            <Photo />
        </div>
    )
}
