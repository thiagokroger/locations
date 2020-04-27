const { getCities, getCity } = require('./helper')
const { app } = require('../app')

describe('Graphql - query call tests', () => {
  let server

  beforeAll(() => {
    server = app.listen(4000, () => console.log('Started the server'))
  })

  afterAll(async () => {
    server.close()
  })

  test('should return an empty array', async () => {
    const citiesList = []
    const data = await getCities(citiesList)

    expect(data).toStrictEqual(citiesList)
  })

  test('should return a list with one city', async () => {
    const citiesList = ['Sao Paulo']
    const data = await getCities(citiesList)

    expect(data.length).toBe(1)
    expect(data[0].cityName).toBe(citiesList[0])
    expect(data[0].temperature).not.toBe(null)
  })

  test('should return a list with four city', async () => {
    const citiesList = ['Sao Paulo', 'Tokyo', 'New York', 'London']
    const data = await getCities(citiesList)

    expect(data.length).toBe(4)
    citiesList.forEach((value, i) => {
      expect(data[i].cityName).toBe(value)
      expect(data[i].temperature).not.toBe(null)
    })
  })

  test('should return the right city name', async () => {
    const city = 'New York'
    const data = await getCity(city)
    expect(data.cityName).toBe(city)
    expect(data.temperature).not.toBe(null)
  })

  test('should return the right city name', async () => {
    const city = 'Sao Paulo'
    const data = await getCity(city)
    expect(data.cityName).toBe(city)
    expect(data.temperature).not.toBe(null)
  })

  test('should return the right city name', async () => {
    const city = 'Tokyo'
    const data = await getCity(city)
    expect(data.cityName).toBe(city)
    expect(data.temperature).not.toBe(null)
  })
})
