/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO{
    navigate_To_Login_Page() {
        super.navigate("Login-Portal/index.html") // usar para ir direto para a página
    }

    type_Username(username) {
        cy.get('#text').type(username)
    }

    type_Password(password) {
        cy.get('#password').type(password)
    }

    clickOn_Login_Button() {
        cy.get('#login-button').click()
    }

}

export default Login_PO