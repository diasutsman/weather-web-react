import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import WeatherApiService from './data/WeatherApiService';
import BootstrapProgressBar from './components/BootstrapProgressBar';
import ErrorComponent from './components/ErrorComponent';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: null,
      units: 'metric'
    }
  }

  componentDidMount() {
    document.title = 'Weather Web';
    navigator.geolocation.getCurrentPosition(async position => {
      const weather = await WeatherApiService.getWeatherByLocation(position.coords.latitude, position.coords.longitude, this.state.units)
      this.setState({
        weather
      })
    })
  }

  async getWeatherByCity(city, units) {
    this.setState({
      weather: null
    })
    try {
      const weather = await WeatherApiService.getWeatherByCity(city, units)
      this.setState({
        weather,
        units
      })
    } catch (e) {
      this.setState({
        weather: e.message,
        units
      })
    }
  }


  render() {
    return (
      <div className="container">
        <section className="vh-100">
          <div className="container py-5 h-100">

            <div className="row d-flex justify-content-center align-items-center h-100">

              <div className="col-md-8 col-lg-6 col-xl-4">

                <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

                <SearchBar getWeatherByCity={this.getWeatherByCity.bind(this)} />

                {
                  this.state.weather instanceof Object ?
                    <WeatherCard
                      weather={this.state.weather}
                      units={this.state.units} /> :
                    typeof this.state.weather === 'string' ?
                      <ErrorComponent error={this.state.weather} /> :
                      <BootstrapProgressBar />
                }

              </div>
            </div>

          </div>
        </section >
      </div >
    )
  }
}
