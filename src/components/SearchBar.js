import React, { useState } from "react";

export default function SearchBar(props) {

    const [cityName, setCityName] = useState("");
    const [units, setUnits] = useState('metric')
    const {lat, lon} = props

    /**
     * 
     * @param {SubmitEvent} ev 
     */

    async function submitHandler(ev) {
        ev.preventDefault()
        props.getWeatherByLocation({cityName, lat, lon}, units)
    }

    async function radioChangeHandler (ev) {
        setUnits(() => {
          props.getWeatherByLocation({cityName, lat, lon}, ev.target.value)
          return ev.target.value
        })
    }


    return (
        <>
            <form id="city-form" onSubmit={submitHandler}>
                <div className="input-group rounded mb-3">
                    <input type="search" className="form-control rounded" id="input-city" placeholder="City"
                        aria-label="Search" aria-describedby="search-addon" autoComplete="off" required value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    <input type="submit" className="input-group-text border-0 fw-bold" id="search-btn"
                        value="Check!" />
                </div>
            </form>
            <div className="mb-4 pb-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input celcius" type="radio" name="inlineRadioOptions"
                        id="inlineRadio1" value="metric" defaultChecked onClick={radioChangeHandler} />
                    <label className="form-check-label" htmlFor='inlineRadio1'>Celsius</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input farenheit" type="radio" name="inlineRadioOptions"
                        id="inlineRadio2" value="imperial" onClick={radioChangeHandler}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Farenheit</label>
                </div>
            </div>
        </>
    )
}