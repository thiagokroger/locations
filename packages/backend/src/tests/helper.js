const { graphQLClient } = require('./client')
const { GET_CITY, GET_CITIES } = require('./query')

const getCity = async (city) => {
  const { data: { cityWeather } } = await graphQLClient.query({
    query: GET_CITY,
    variables: {
      cityName: city
    }
  })
  return cityWeather
}

const getCities = async (listOfCities) => {
  const { data: { citiesWeathers } } = await graphQLClient.query({
    query: GET_CITIES,
    variables: {
      cities: listOfCities
    }
  })
  return citiesWeathers
}

module.exports = {
  getCity,
  getCities
}
