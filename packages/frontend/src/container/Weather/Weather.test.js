import React from 'react'
import { shallow } from 'enzyme'
import Weather from './Weather'

describe('Containers - Weather without placeWeather', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Weather
        placeWeather={null}
      />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Containers - Weather with placeWeather, without weatherDescriptions and forecast', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Weather
        placeWeather={{
          cityName: 'City Test',
          weatherDescriptions: null,
          forecast: null
        }}
      />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Containers - Weather with placeWeather, weatherDescriptions and forecast', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Weather
        placeWeather={{
          cityName: 'City Test',
          weatherDescriptions: ['Test Description'],
          forecast: [{
            date: 1587427200,
            sunrise: '06:10 AM',
            sunset: '06:10 PM',
            moonPhase: '',
            mintemp: 10,
            maxtemp: 20,
            avgtemp: 15
          }]
        }}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
