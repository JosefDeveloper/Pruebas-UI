describe('Tipo de Localizadores', () => {
	it('Obtener elemento por TAG', () => {
		cy.visit('/automation-practice-form')
		cy.get('input')
	})

	it('Obtener elemento por ATRIBUTO', () => {
		cy.get('[placeholder="First Name"]')
	})

	it('Obtener elemento por TAG y ATRIBUTO', () => {
		cy.get('input[placeholder="First Name"]')
	})

	it('Obtener elemento por ID', () => {
		cy.get('#lastName')
	})

	it('Obtener elemento por CLASS', () => {
		cy.get('.mr-sm-2.form-control')
	})

	it('Obtener elemento usando CONTAINS', () => {
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Obtener elemento usando PARENT', () => {
		// Obteniendo el elemento padre
		cy.get('input[placeholder="First Name"]').parent()

		// Obteniendo los elementos padre
		cy.get('input[placeholder="First Name"]').parents().find('label')

        cy.get('form').find('label')
	})
})
