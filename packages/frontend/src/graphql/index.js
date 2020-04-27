import gql from 'graphql-tag'

export const GET_CITY = gql`
  query getCity($cityName: String) {
    cityWeather(city: $cityName) {
      cityName
      country
      temperature
      latitude
      longitude
      localtime
      utc
      observationTime
      temperature
      weatherCode
      weatherDescriptions
      windSpeed
      windDegree
      windDirection
      humidity
      feelslike
      forecast {
        date
        sunrise
        sunset
        moonrise
        moonset
        moonPhase
        mintemp
        maxtemp
        avgtemp
      }
    }
  }
`

export const GET_CITIES = gql`
  query getCities($cities: [String]) {
    citiesWeathers(cities: $cities) {
      cityName
      temperature
      utc
      weatherDescriptions
    }
  }
`
