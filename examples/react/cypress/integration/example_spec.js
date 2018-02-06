describe('TODO app', function () {
	it('can create new todos', function () {
		cy.visit('http://localhost:8080')

		cy.get('[placeholder="What needs to be done?"').as('inputField')

		cy.get('@inputField').type('show the test works{enter}')
		cy.get('@inputField').type('for real{enter}')

		cy.get('.todo-list').as('todoList');
		cy.get('@todoList').contains('show the test works')
		cy.get('@todoList').contains('for real')
	})

	it('can edit a todo', function () {
		cy.visit('http://localhost:8080')

		cy.get('[placeholder="What needs to be done?"').as('inputField')

		cy.get('@inputField').type('show the test works{enter}')

		cy.get('.todo-list').as('todoList');
		// cy.get('@todoList').contains('show the test works').dblclick()
		cy.get('@todoList').get('[value="show the test works"]').type('{selectAll}{backspace}some new text{enter}')
		cy.get('@todoList').contains('show the test works').should('not.exist')
		cy.get('@todoList').contains('some new text')
	})
})
