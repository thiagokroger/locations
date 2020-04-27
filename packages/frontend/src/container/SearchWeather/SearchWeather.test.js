import React from 'react'
import { shallow } from 'enzyme'
import SearchWeather from './SearchWeather'

describe('Containers - Past Weather Column without isLoading', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <SearchWeather
        zipCode=""
        setZipCode={jest.fn()}
        searchPlace={jest.fn()}
        isLoading={false}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger input correctly', () => {
    const mockFunc = jest.fn()
    const component = shallow(
      <SearchWeather
        zipCode=""
        setZipCode={mockFunc}
        searchPlace={jest.fn()}
        isLoading={false}
      />
    )

    component.find('input').simulate('change', { target: { value: '' } })

    expect(mockFunc.mock.calls.length).toBe(1)
    expect(component).toMatchSnapshot()
  })

  it('should trigger button correctly', () => {
    const mockFunc = jest.fn()

    const component = shallow(
      <SearchWeather
        zipCode=""
        setZipCode={jest.fn()}
        searchPlace={mockFunc}
        isLoading={false}
      />
    )

    component.find('button').simulate('click')

    expect(mockFunc.mock.calls.length).toBe(1)
    expect(component).toMatchSnapshot()
  })
})

describe('Containers - Past Weather Column with isLoading', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <SearchWeather
        zipCode=""
        setZipCode={jest.fn()}
        searchPlace={jest.fn()}
        isLoading={true}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
