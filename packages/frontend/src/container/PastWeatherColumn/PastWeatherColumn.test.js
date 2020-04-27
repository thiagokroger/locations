import React from 'react'
import { shallow } from 'enzyme'
import PastWeatherColumn from './PastWeatherColumn'

describe('Containers - Past Weather Column without not required props', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <PastWeatherColumn removeSearchValue={jest.fn()} />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Containers - Past Weather Column with all props', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <PastWeatherColumn removeSearchValue={jest.fn()} pastSearch={['Search Value test']} />
    )
    expect(component).toMatchSnapshot()
  })
})
