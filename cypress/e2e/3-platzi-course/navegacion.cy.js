describe('Navegación', () => {
	it('Navegar hacia platzi.com', () => {
		cy.visit('https://www.platzi.com')
	})

	it('Recargar la página', () => {
		cy.reload()
	})

	it('Recargar la página de forma forzada', () => {
    cy.visit('https://www.google.com')
		cy.reload(true)
	})

  it('Navegar hacia atras', () => {
    cy.visit('https://www.google.com')
    cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=kxfGYvD2LpT11sQP4N-tiAE&iflsig=AJiK0e8AAAAAYsYloyP9NeN1ie3gectwwn-x-ascpSQw&ved=0ahUKEwiwjIqqsuX4AhWUupUCHeBvCxEQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIRCC4QgAQQsQMQgwEQxwEQ0QMyCwguEIAEELEDENQCMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgsILhCABBCxAxDUAjILCAAQgAQQsQMQgwEyBQgAEIAEOhEILhCABBCxAxCDARDHARCjAjoICAAQgAQQsQM6DgguEIAEELEDEIMBENQCOg4ILhCABBCxAxDHARCvAToFCAAQsQM6CAguEIAEELEDOhAILhCxAxCDARDHARDRAxAKOgoIABCxAxCDARAKOgQIABAKUABY8hdg2hpoAnAAeACAAesFiAGqHZIBBTUtNS4xmAEAoAEB&sclient=gws-wiz')
		cy.go('back')
	})

  it.only('Navegar hacia adelante', () => {
    cy.visit('https://www.google.com')
    cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=kxfGYvD2LpT11sQP4N-tiAE&iflsig=AJiK0e8AAAAAYsYloyP9NeN1ie3gectwwn-x-ascpSQw&ved=0ahUKEwiwjIqqsuX4AhWUupUCHeBvCxEQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIRCC4QgAQQsQMQgwEQxwEQ0QMyCwguEIAEELEDENQCMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgsILhCABBCxAxDUAjILCAAQgAQQsQMQgwEyBQgAEIAEOhEILhCABBCxAxCDARDHARCjAjoICAAQgAQQsQM6DgguEIAEELEDEIMBENQCOg4ILhCABBCxAxDHARCvAToFCAAQsQM6CAguEIAEELEDOhAILhCxAxCDARDHARDRAxAKOgoIABCxAxCDARAKOgQIABAKUABY8hdg2hpoAnAAeACAAesFiAGqHZIBBTUtNS4xmAEAoAEB&sclient=gws-wiz')
		cy.go('back')
    cy.go('forward')
	})
})
