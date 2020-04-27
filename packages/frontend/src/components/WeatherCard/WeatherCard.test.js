import React from 'react'
import { shallow } from 'enzyme'
import WeatherCard from './WeatherCard'

jest.mock('../../utils/getCurrentTimeWithUTC.js', () => jest.fn())

describe('Components - Weather Card without not required props', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <WeatherCard removeSearchValue={jest.fn()} />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Components - Weather Card with all props', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <WeatherCard removeSearchValue={jest.fn()} clime={['Clime test']} city="City test" observationTime="1" temperature={25}/>
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger removeSearchValue correctly', () => {
    const mockFunc = jest.fn()

    const component = shallow(
      <WeatherCard removeSearchValue={mockFunc} clime={['Clime test']} city="City test" observationTime="1" temperature={25}/>
    )

    expect(component).toMatchSnapshot()
    component.find('span').at(0).simulate('click')
    expect(mockFunc.mock.calls.length).toBe(1)
  })
})
