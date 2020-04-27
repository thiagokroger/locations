const axios = require('axios')
const to = require('../utils/to')
const api = require('../utils/api')

const getCityWeather = async (source, { city }) => {
  const url = `${api}&query=${city}`

  const [err, result] = await to(axios.get(url))

  const { location, current, forecast } = result.data

  return {
    cityName: location.name,
    country: location.country,
    latitude: location.lat,
    longitude: location.lon,
    localtime: location.localtime,
    utc: location.utc_offset,
    observationTime: current.observation_time,
    temperature: current.temperature,
    weatherCode: current.weather_code,
    weatherDescriptions: current.weather_descriptions,
    windSpeed: current.wind_speed,
    windDegree: current.wind_degree,
    windDirection: current.wind_dir,
    humidity: current.humidity,
    feelslike: current.feelslike,
    forecast: Object.keys(forecast).map(key => ({
      date: key,
      sunrise: forecast[key].astro.sunrise,
      sunset: forecast[key].astro.sunset,
      moonrise: forecast[key].astro.moonrise,
      moonPhase: forecast[key].astro.moon_phase,
      mintemp: forecast[key].mintemp,
      maxtemp: forecast[key].maxtemp,
      avgtemp: forecast[key].avgtemp
    }))
  }
}

module.exports = getCityWeather
