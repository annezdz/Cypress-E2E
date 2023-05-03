@login @regression
Feature: WebdriverUniversity - Login Portal Page


Background: Pre condition
    # Given I navigate to the webdriveruniversity homepage
    # When I click on the login portal button
    # When I wait for 5 seconds
    Given I navigate to the login page

    Scenario Outline: Login Successful
        And I type login with '<login>'
        And I type password with'<password>'
        When click Login button
        Then the '<message>' is displayed

        Examples:
        |login      | password   | message             |
        |webdriver  |webdriver123| validation succeeded|
        |webdriver  |webdriver111   |validation failed   |
