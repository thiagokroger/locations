const axios = require('axios')
const to = require('../utils/to')
const api = require('../utils/api')

const getCityWeathers = async (source, { cities }) => {
  const citiesWeathers = await Promise.all(cities.map(async (city) => {
    const url = `${api}&query=${city}`
    const [err, result] = await to(axios.get(url))

    const { location, current } = result.data

    return {
      cityName: location.name,
      utc: location.utc_offset,
      temperature: current.temperature,
      weatherDescriptions: current.weather_descriptions
    }
  }))

  return citiesWeathers
}

module.exports = getCityWeathers
