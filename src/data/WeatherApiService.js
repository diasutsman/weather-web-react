// for weather icon: http://openweathermap.org/img/wn/{weatherCode}@2x.png
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export default class WeatherApiService {

    static getWeatherByLocation({cityName, lat, lon}, units) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&${cityName? `q=${cityName}` : `lat=${lat}&lon=${lon}`}&units=${units}`)
            .then(res => {
              if(!res.ok) throw new Error(`"${cityName}" is not found`)
              return res.json()
            })
            .then(data => data)
    }
}