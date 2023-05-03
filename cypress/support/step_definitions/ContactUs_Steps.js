/// <reference types="cypress"/>
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contact_Us_Page = new Contact_Us_PO()

When(`I type a first name`, () => {
    //cy.get('[name="first_name"]').type('Joe')
    contact_Us_Page.type_FirstName('Joe')
})

When(`I type a last name`, () => {
    //cy.get('[name="last_name"]').type('Blobs')
    contact_Us_Page.type_LastName('Blogs')
})

When(`I enter an email address`, () => {
    //cy.get('[name="email"]').type('joe_blobs123@gmail.com')
    contact_Us_Page.type_Email('joe_blobs123@gmail.com')
})

When(`I type a comment`, () => {
    //cy.get('textarea[name="message"]').type('Hello World')
    contact_Us_Page.type_Comment('Hello with Page Object')
})

When(`I click on the submit button`, () => {
    //cy.get('[type="submit"]').click()
    contact_Us_Page.clickOn_Submit_Button()
})

When(`I should be presented with a successful contact us submission message`, () => {
    //cy.get('h1').should('have.text','Thank You for your Message!')
    contact_Us_Page.validate_Submission_Header('Thank You for your Message!')
})

Then(`I should be presented with a unsuccessful contact us submission message`, () => {
    //cy.get('body').contains('Error: Invalid email address')
    contact_Us_Page.validate_Submission_Header('Error: Invalid email address')
})

When('I type a specific first name {string}', (firstName) => {
    //cy.get('[name="first_name"]').type(firstName)
    contact_Us_Page.type_FirstName(firstName)
})

When('I type a specific last name {string}', (lastName) => {
    //cy.get('[name="last_name"]').type(lastName)
    contact_Us_Page.type_LastName(lastName)
})

When('I type a specific email address {string}', (email) => {
    //cy.get('[name="email"]').type(email)
    contact_Us_Page.type_Email(email)
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    //cy.get('textarea[name="message"]').type(word + number)
    contact_Us_Page.type_Comment(word + " " + number)
})

When('I type a first name {string} and a last name {string}', (firstName, lastName) => {
    //cy.get('[name="first_name"]').type(firstName)
    //cy.get('[name="last_name"]').type(lastName)
    contact_Us_Page.type_FirstName(firstName)
    contact_Us_Page.type_LastName(lastName)
})

When('I type a {string} and a comment {string}', (email, comment) => {
    //cy.get('[name="email"]').type(email)    
    //cy.get('textarea[name="message"]').type(comment)
    contact_Us_Page.type_Email(email)
    contact_Us_Page.type_Comment(comment)
})

Then('I should be presented with header text {string}', (message) => {
    if(message ==='Thank You for your Message!') {
        cy.get('h1').should('have.text',message)
    } else if(message === 'Error: Invalid email address') {
        cy.get('body').contains('Error: Invalid email address')
    }
    //contact_Us_Page.validate_Submission_Header(message)
})
