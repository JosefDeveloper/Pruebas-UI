describe('Interactuando con los elementos', () => {
	it('Click normal', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).click()
		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click')
	})

	it('Double Click', () => {
		cy.visit('/buttons')
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click')
	})

	it('Right Click', () => {
		cy.visit('/buttons')
		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click')
	})

	it('Force Click', () => {
		cy.visit('/dynamic-properties')
		// cy.get('#enableAfter').click({ timeout: 0 })
		cy.get('#enableAfter').click({ timeout: 0, force: true })
	})

	it.only('Click por posición', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})
})
