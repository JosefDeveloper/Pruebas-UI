describe('Interactuando con los elementos', () => {
	let texto

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

	it('Click por posición', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})

	it('Input type text', () => {
		cy.visit('/automation-practice-form')
		cy.get('#firstName').type('Josef')
		cy.get('#lastName').type('Developer')

		cy.get('#firstName').type('Josef')

		cy.get('#firstName').type('{selectAll}{backspace}')
		cy.get('#firstName').type('Otro nombre')
		cy.get('#firstName').clear()
	})

	it('Checkbox y Radio buttons', () => {
		cy.visit('/automation-practice-form')
		// cy.get('#gender-radio-1').click()
		// cy.get('#gender-radio-1').click({ force: true })
		// cy.get('#gender-radio-1').check({ force: true })
		cy.get('label[for="gender-radio-1"]').click()

		// cy.get('#hobbies-checkbox-3').check({ force: true })
		// cy.get('#hobbies-checkbox-3').uncheck({ force: true })
		cy.get('label[for="hobbies-checkbox-3"]').click()
		cy.get('label[for="hobbies-checkbox-3"]').click()
	})

	it.only('Extrayendo información', function () {
		cy.visit('/automation-practice-form')
		cy.get('#firstName').as('nombre')
		cy.get('@nombre').type('Josef')

		cy.get('@nombre').then(($nombre) => {
			texto = $nombre.val()
			expect(texto).to.equal('Josef')
		})

		cy.get('@nombre').invoke('val').should('equal', 'Josef')
		cy.get('@nombre').invoke('val').as('nombreGlobal')
	})

	it.only('Compartiendo información', function () {
		cy.visit('/automation-practice-form')
		cy.get('#lastName').as('apellido')
		cy.get('@apellido').type(texto)

		cy.get('#firstName').type(this.nombreGlobal)
	})
})
