import React from 'react'
import PropTypes from 'prop-types'
import { WeatherCard } from '../../components'

const PastWeatherColumn = ({ pastSearch, removeSearchValue }) => {
  return (
    <div className="column is-one-quarter">
      <span className="column-title">Last searched places</span>
      {
        pastSearch ? pastSearch.map((value, i) =>
          <WeatherCard
            key={i}
            clime={value.weatherDescriptions}
            observationTime={value.utc}
            temperature={value.temperature}
            city={value.cityName}
            removeSearchValue={removeSearchValue}
          />) : null
      }
    </div>
  )
}

PastWeatherColumn.propTypes = {
  pastSearch: PropTypes.array,
  removeSearchValue: PropTypes.func.isRequired
}

PastWeatherColumn.defaultProps = {
  pastSearch: []
}

export default PastWeatherColumn
