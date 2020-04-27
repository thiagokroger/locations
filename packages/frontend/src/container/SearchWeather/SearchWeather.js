import React from 'react'
import PropTypes from 'prop-types'

const SearchWeather = ({ zipCode, setZipCode, searchPlace, isLoading }) => {
  return (
    <div className="field has-addons has-addons-centered">
      <div className="control has-icons-left">
        <input
          name="search"
          className="input is-rounded"
          type="text"
          placeholder="Address"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          disabled={isLoading}
        />
        <span className="icon is-left">
          <i className="fas fa-globe"></i>
        </span>
      </div>
      <div className="control" >
        <button onClick={searchPlace} className={`button is-info ${isLoading ? 'is-loading' : ''}`}>Search</button>
      </div>
    </div>
  )
}

SearchWeather.propTypes = {
  zipCode: PropTypes.string.isRequired,
  setZipCode: PropTypes.func.isRequired,
  searchPlace: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default SearchWeather
