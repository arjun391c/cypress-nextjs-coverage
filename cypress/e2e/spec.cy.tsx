describe('Test page', () => {
    it('passes', () => {
        cy.visit('/')
        cy.contains('Get started by editing src/app/page.tsx')

        cy.get('button').contains('Submit')
        cy.get('button').click()
    })
})