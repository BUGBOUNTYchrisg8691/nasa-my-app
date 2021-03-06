import React from 'react'

import Photo from "./Photo"

export default function Photos(props) {
    const { photos, locations } = props

    return (
        <div>
            Photos 
            {/* forEach */}
            {photos.map(photo => {
                return <Photo photo={ photo } />
            })}
            {/* <Photo /> */}
        </div>
    )
}
