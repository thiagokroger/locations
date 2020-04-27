import React from 'react'
import PropTypes from 'prop-types'
import getCurrentTimeWithUTC from '../../utils/getCurrentTimeWithUTC'

const WeatherCard = ({ clime, observationTime, city, temperature, removeSearchValue }) => {
  return (
    <div className="card">
      <div className="row align-right">
        <span className="clickable" onClick={() => removeSearchValue(city)}><i className="fas fa-times" /></span>
      </div>
      <div className="row">
        {clime.map((value, i) => <span key={i}>{value}</span>)}
        <span>{city}</span>
      </div>
      <div className="row">
        <span className="temperature">{temperature}°C</span>
        <span>{getCurrentTimeWithUTC(parseInt(observationTime))}</span>
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  clime: PropTypes.array,
  observationTime: PropTypes.string,
  city: PropTypes.string,
  temperature: PropTypes.number,
  removeSearchValue: PropTypes.func.isRequired
}

WeatherCard.defaultProps = {
  clime: [],
  observationTime: '',
  city: '',
  temperature: 0
}

export default WeatherCard
