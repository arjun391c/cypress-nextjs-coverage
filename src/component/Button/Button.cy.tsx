import Button from "./Button"

describe('Button Component', () => {
    it('Should render and display expected content', () => {
        cy.mount(<Button/>)

        cy.get('button').contains('Button')
    })
})