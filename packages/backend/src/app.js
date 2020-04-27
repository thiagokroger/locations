const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')

const { getCityWeather, getCitiesWeathersHistory } = require('./resolvers')

const resolvers = {
  Query: {
    cityWeather: getCityWeather,
    citiesWeathers: getCitiesWeathersHistory
  }
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

const app = express()
app.use(cors())

server.applyMiddleware({ app })

module.exports = {
  app
}
