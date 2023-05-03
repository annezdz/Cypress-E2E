/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO {
    elements = {
        comment_TextField : () => cy.get('textarea[name="message"]'),
        submit_Button : () => cy.get('[type="submit"]'),
        submission_Header_Text1 : () => cy.get('h1'),
        submission_Header_Text2 : () => cy.get('body'),

    }

    navigate_ToContact_Us_Page() {
        super.navigate("Login-Portal/index.html")
    }
    
    type_FirstName(firstName) {
        cy.get('[name="first_name"]').type(firstName)
    }

    type_LastName(lastName) {
        cy.get('[name="last_name"]').type(lastName)
    }

    type_Email(email) {
        cy.get('[name="email"]').type(email)
    }

    type_Comment(message) {
        this.elements.comment_TextField().type(message)
    }

    clickOn_Submit_Button() {
        this.elements.submit_Button().click()
    }

    validate_Submission_Header(expectedText) {
    
    }
}
export default Contact_Us_PO