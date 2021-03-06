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

	it('Extrayendo información', function () {
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

	it('Compartiendo información', function () {
		cy.visit('/automation-practice-form')
		cy.get('#lastName').as('apellido')
		cy.get('@apellido').type(texto)

		cy.get('#firstName').type(this.nombreGlobal)
	})

	it('Interactuando con los dropdown (select)', function () {
		cy.visit('https://itera-qa.azurewebsites.net/home/automation')
		cy.get('.custom-select').select(5)
		cy.get('.custom-select').select('7').should('have.value', '7')
		cy.get('.custom-select').select('Spain').should('have.value', '2')
	})

	it('Interactuando con los dropdown (select) dinamico', function () {
		cy.visit('https://react-select.com/home')
		cy.get('#react-select-6-input').type(' ')
		cy.get('#react-select-6-listbox')
			.children()
			.children()
			.each(($el, index, $list) => {
				if ($el.text() === 'Green') {
					// $el.on('click')
					$el.click()
				}
			})

		// cy.get('#react-select-6-option-3').click()
	})

	it('Interactuando con tablas', function () {
		cy.visit('https://www.w3schools.com/html/html_tables.asp')
		cy.get('#customers')
			.find('th')
			.each(($el) => {
				cy.log($el.text())
			})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country')

		cy.get('#customers').find('tr').should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(3)
			.find('td')
			.eq(2)
			.invoke('text')
			.should('equal', 'Austria')

		cy.get('#customers')
			.find('tr')
			.eq(5)
			.find('td')
			.eq(0)
			.then(($el) => {
				const texto = $el.text()
				expect(texto).to.contain('Bacchus')
			})
	})

	it('Interactuando con date pickers', function () {
		cy.visit('https://material.angular.io/components/datepicker/overview')
		cy.get('datepicker-overview-example')
			.find('input')
			.eq(0)
			.type('17/07/2022')

		cy.get('datepicker-overview-example').find('svg').click()
	})

	it('Interactuando con modals', function () {
		cy.visit('/modal-dialogs')
		cy.get('#showSmallModal').click()
		cy.get('#closeSmallModal').click()
	})

	it('Interactuando con popups', function () {
		cy.visit('/alerts')

		// const stub = cy.stub()
		// cy.on('window:confirm', stub)

		// cy.get('#confirmButton')
		// 	.click()
		// 	.then(() => {
		// 		expect(stub.getCall(0)).to.be.calledWith(
		// 			'Do you confirm action?'
		// 		)
		// 	})

		// cy.get('#confirmButton').click()
		// cy.on('window:confirm', (confirm) => {
		// 	expect(confirm).to.eq('Do you confirm action?')
		// })
		// cy.contains('You selected Ok').should('exist')

		cy.get('#confirmButton').click()
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.eq('Do you confirm action?')
			return false
		})
		cy.contains('You selected Cancel').should('exist')
	})

	it('Interactuando con tooltips', function () {
		cy.visit('/tool-tips')
		cy.get('#toolTipButton').trigger('mouseover')
		cy.contains('hovered over').should('exist')
		cy.get('#toolTipButton').trigger('mouseout')
		cy.contains('hovered over').should('not.exist')
	})

	it.only('Interactuando con drag and drop', function () {
		cy.visit('/dragabble')
		cy.get('#dragBox')
			.trigger('mousedown', {
				wich: 1,
				pageX: 0,
				pageY: 0,
			})
			.trigger('mousemove', { wich: 1, pageX: 300, pageY: 300 })
			.trigger('mouseup')
	})
})
