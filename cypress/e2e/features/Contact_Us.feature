@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

Background: Pre condition
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

     Scenario: Valid Contact Us Form Submission - Using Specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "sarah_woods101@mail.com"
        And I type a specific word "hello123" and number 688 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
        |firstName  |lastName|emailAddress       |comment                 |message                      |
        |John       | Jones  |john_jones@mail.com| Hello howw are you     | Thank you for your message! |
        |Mia        | Carter |mia_carter@mail.com| Hello how are you Mia ?| Thank you for your message! |
        |Grace      | Hudson |grace_hudson       | Do you create websites?| Error: Invalid email address|