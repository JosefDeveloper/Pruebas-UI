describe('Guardando elementos', () => {
	it('Repetición', () => {
		cy.visit('/automation-practice-form')
        
        // Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
		
        // Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents()

        cy.get('input[placeholder="First Name"]').parents().find('label')

        cy.get('form').find('label')
	})
	
    it('Evitar Repetición', () => {
		cy.get('input[placeholder="First Name"]').parents('form').then((form) => {
            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inputs.length).to.equal(15)
            expect(divs.length).to.equal(70)
            expect(labels.length).to.equal(16)

            cy.wrap(inputs).should('have.length', 15)
        })
        
	})

})
