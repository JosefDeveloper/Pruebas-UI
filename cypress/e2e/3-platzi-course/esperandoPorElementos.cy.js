describe('Esperando por elementos', () => {
	beforeEach(() => {
		cy.visit('https://www.platzi.com')
	})

	it('Esperar por un tiempo definido', () => {
		cy.wait(5000)
	})

	it('Esperar por un elemento', () => {
		cy.get('.ButtonLogin-cta', { timeout: 6000 })
	})

	it('Esperar por un elemento y hacer una aserción', () => {
		cy.get('.ButtonLogin-cta', { timeout: 6000 }).should('be.visible')
	})
})

describe('Esperando por elementos 2', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it.only('Deshabilitar el RETRY', () => {
		// cy.get('.banner-image', { timeout: 5000 })
		cy.get('.banner-image', { timeout: 0 })
	})
})
