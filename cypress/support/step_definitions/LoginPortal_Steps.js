/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

let stub
const loginPage = new Login_PO()

Given(`I navigate to the login page`, () => {
    loginPage.navigate_To_Login_Page()
})

When(`I type login with {string}`,(username) => {
    //cy.get('#text').type(username)
    loginPage.type_Username(username)
})

When(`I type password with{string}`,(password) => {
    //cy.get('#password').type(password)
    loginPage.type_Password(password)
})

When(`click Login button`, () => {
    stub = cy.stub()
    cy.on('window:alert',stub)
    //cy.get('#login-button').click()
    loginPage.clickOn_Login_Button()
})

Then(`the {string} is displayed`, (messageAlert) => {
    expect(stub).to.have.been.calledWith(messageAlert)
})