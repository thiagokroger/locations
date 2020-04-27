import React, { useState } from 'react'
import './App.scss'
import { PastWeatherColumn, SearchWeather, Weather } from './container'
import { GET_CITIES, GET_CITY } from './graphql'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'

const App = () => {
  const [zipCode, setZipCode] = useState('')
  const pastSearch = JSON.parse(window.localStorage.getItem('pastSearch')) || []
  const [getCity, { loading, data: searchedPlace }] = useLazyQuery(GET_CITY)
  const { data: pastCities, updateQuery, refetch } = useQuery(GET_CITIES, {
    variables: { cities: pastSearch }
  })

  const addNewPlaceToSearch = (city) => {
    const newPastSearch = [...pastSearch, city]
    window.localStorage.setItem('pastSearch', JSON.stringify(newPastSearch))
    updateQuery(async ({ citiesWeathers }) => {
      const { data } = await refetch({ cities: newPastSearch })
      return {
        citiesWeathers: data.citiesWeathers
      }
    })
  }

  const removeSearchValue = (city) => {
    const past = JSON.parse(window.localStorage.getItem('pastSearch')) || []
    const pastSearch = past.filter(value => value !== city)
    window.localStorage.setItem('pastSearch', JSON.stringify(pastSearch))
    updateQuery(({ citiesWeathers }) => ({
      citiesWeathers: citiesWeathers.filter(({ cityName }) => city !== cityName)
    }))
  }

  const searchPlace = async () => {
    const pastCity = searchedPlace ? searchedPlace.cityWeather.cityName : false
    getCity({ variables: { cityName: zipCode } })
    if (pastCity) {
      await addNewPlaceToSearch(pastCity)
    }
    setZipCode('')
  }

  return (
    <div className="App columns">
      <PastWeatherColumn
        pastSearch={pastCities ? pastCities.citiesWeathers : []}
        removeSearchValue={removeSearchValue}
      />
      <div className="column">
        <SearchWeather
          isLoading={loading}
          zipCode={zipCode}
          setZipCode={(value) => setZipCode(value)}
          searchPlace={searchPlace}
        />
        <Weather placeWeather={searchedPlace ? searchedPlace.cityWeather : null} />
      </div>
    </div>
  )
}

export default App
