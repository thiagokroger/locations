import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import { GET_CITIES, GET_CITY } from './graphql'
import { MockedProvider } from '@apollo/react-testing'

describe('Main Page - App', () => {
  test('should render without crashing', () => {
    const mocks = [
      {
        request: { query: GET_CITIES },
        result: {
          data: {
            citiesWeathers: [{
              weatherDescriptions: 'description',
              utc: '0',
              temperature: '10',
              cityName: 'City'
            }]
          },
          loading: false
        }
      },
      {
        request: { query: GET_CITY },
        result: {
          data: {
            cityWeather: null
          },
          updateQuery: () => { },
          refetch: () => { }
        }
      }
    ]

    const component = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    )

    expect(component).toMatchSnapshot()
  })
})
