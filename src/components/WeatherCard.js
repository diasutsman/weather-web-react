import React from "react"

export default function WeatherCard(props) {
    const { weather } = props
    const unit = props.units === 'metric'? ' °C' : ' °F'
    return (
        <div className="card shadow-0 border mb-3">
            <div className="card-body p-4">

                <h4 className="mb-1 sfw-normal">{weather.name}</h4>
                <p className="mb-2">Current temperature: <strong>{weather.main.temp + unit}</strong></p>
                <p>Feels like: <strong>{weather.main.feels_like + unit}</strong></p>
                <p>Max: <strong>{weather.main.temp_max + unit}</strong>, Min: <strong>{weather.main.temp_min + unit}</strong></p>

                <div className="d-flex flex-row align-items-center">
                    <p className="mb-0 me-4">{weather.weather[0].main}</p>
                    <i className="fas fa-cloud fa-3 x" style={{ color: '#eee' }}>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" width="100px" />
                    </i>
                </div>

            </div>
        </div>
    )
}