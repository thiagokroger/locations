const { gql } = require('apollo-server-express')

const schema = gql`
	type Query {
		cityWeather(city: String): CityWeather,
		citiesWeathers(cities: [String]): [CityWeather]
	}

	type CityWeather {
		cityName: String
		country: String
		latitude: String
		longitude: String
		localtime: String
		utc: String
		observationTime: String
		temperature: Int
		weatherCode: Int 
		weatherDescriptions: [String]
		windSpeed: Int
		windDegree: Int
		windDirection: String
		humidity: Int
		feelslike: Int
		forecast: [Forecast]
	}

	type Forecast {
		date: String
		sunrise: String
		sunset: String
		moonrise: String
		moonset: String
		moonPhase: String
		mintemp: Int
		maxtemp: Int
		avgtemp: Int
	}
`

module.exports = schema
