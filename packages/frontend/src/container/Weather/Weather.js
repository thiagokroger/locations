import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Weather = ({ placeWeather }) => {
  return (
    <div>
      {
        placeWeather
          ? <div className="container weather-container">
            <div className="weather-header">
              <div className="column-title">{placeWeather.cityName}</div>
              {
                placeWeather.weatherDescriptions ? placeWeather.weatherDescriptions.map((weather, i) =>
                  <span key={i} className="weather-description">{weather}</span>)
                  : null}
              <div className="temperature-span">{placeWeather.temperature}°C</div>
            </div>
            <div className="weather-forecast columns is-multiline is-centered">
              {
                placeWeather.forecast
                  ? placeWeather.forecast.map((value, i) => (
                    <div key={i} className="column is-narrow">
                      <div className="weather-description">{moment(value.date).format('dddd, MMMM DD')}</div>

                      <div className="forecast-row">
                        <div className="forecast-label">Sunrise</div>
                        <div className="forecast-value">{value.sunrise}</div>
                      </div>
                      <div className="forecast-row">
                        <div className="forecast-label">Sunset</div>
                        <div className="forecast-value">{value.sunset}</div>
                      </div>
                      <div className="forecast-row">
                        <div className="forecast-label">Moonphase</div>
                        <div className="forecast-value">{value.moonPhase}</div>
                      </div>
                      <div className="forecast-row">
                        <div className="forecast-label">Min temp</div>
                        <div className="forecast-value">{value.mintemp}°C</div>
                      </div>
                      <div className="forecast-row">
                        <div className="forecast-label">Max temp</div>
                        <div className="forecast-value">{value.maxtemp}°C</div>
                      </div>
                      <div className="forecast-row">
                        <div className="forecast-label">Avg temp</div>
                        <div className="forecast-value">{value.avgtemp}°C</div>
                      </div>
                    </div>
                  ))
                  : null}

            </div>
          </div>
          : null
      }
    </div>
  )
}

Weather.propTypes = {
  placeWeather: PropTypes.any
}

export default Weather
