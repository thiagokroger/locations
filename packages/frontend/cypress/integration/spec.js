describe('e2e locations weather', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearLocalStorage()
    cy.get('.App').as('mainPage')
  })

  const createCity = (city) => {
    cy.get('@mainPage')
      .find('.column > .field > .control > input[name=search]')
      .type(city)
    cy.get('@mainPage')
      .find('.column > .field > .control > .button')
      .click()
  }

  it('Locations Weather - loads the basic components', () => {
    cy.get('@mainPage').find('.column.is-one-quarter > .column-title').contains('Last searched places')
    cy.get('@mainPage').find('.column > .field > .control > .button').contains('Search')
    cy.get('@mainPage').find('.column > .field > .control > input[name=search]')
  })

  it('Locations Weather - can search some city and receive the city weather', () => {
    const city = 'New York'
    createCity(city)
    cy.get('@mainPage')
      .find('.container.weather-container > .weather-header > .column-title')
      .contains(city)
    cy.get('@mainPage').find('.container.weather-container > .weather-forecast')
  })

  it('Locations Weather - search cities and create a history of the past ones', () => {
    const cities = ['New York', 'London', 'Sao Paulo', 'Tokyo']
    cities.forEach(city => {
      createCity(city)
      cy.get('@mainPage')
        .find('.container.weather-container > .weather-header > .column-title')
        .contains(city)
    })

    cy.wait(400)

    cities.slice(0, 3).forEach((city, i) => {
      cy.get('@mainPage').find('.column.is-one-quarter > .card').eq(i).contains(city)
    })
  })

  it('Locations Weather - delete city from the history', () => {
    const city = 'New York'
    const secondCity = 'Sao Paulo'

    createCity(city)
    createCity(secondCity)

    cy.wait(400)

    cy.get('@mainPage').find('.column.is-one-quarter > .card').contains(city)
    cy.get('@mainPage')
      .find('.column.is-one-quarter > .card > .row.align-right > span')
      .click()

    cy.get('@mainPage').find('.column.is-one-quarter > .card').should('not.exist')
  })
})
