import React from 'react'

export default function Weather(props) {
    const { weather } = props
    return (
        <div>
            <h3>Average Temp: { weather.AT.av } F</h3>
            <h3>Wind Speed: { weather.HWS.av } m/s</h3>
            <h3>Atmospheric Pressure: { weather.PRE.av } Pa</h3>
            {console.log(weather)}
        </div>
    )
}
