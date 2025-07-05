class LoginPage {
    selectors = {
        username: '#user-name',
        password: '#password',
        loginButton: '#login-button'
    }

    openUrl() {
        return cy.visit('/')
    }

    fillUsername(username) {
        cy.inputText(this.selectors.username, username)
        return this
    }

    fillPassword(password) {
        cy.inputText(this.selectors.password, password)
        return this
    }

    clickLoginButton() {
        cy.clickElement(this.selectors.loginButton)
        return this
    }
}

export default new LoginPage()