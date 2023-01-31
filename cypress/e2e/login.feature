Feature: Login Functionality Test

    Scenario Outline: I login with the invalid credentials
        Given I visit the insurance site
        When I enter the invalid <username> username
        And I enter the invalid <password> password
        And I click on Login button
        Then I should see the <error>

        Examples:
            | username      | password | error                                         |
            | test@mail.com | test123  | Enter your Email address and password correct |
            | test@mail.com |          | Enter your Email address and password correct |
            |               | test123  | Enter your Email address and password correct |
    #   |               |          | Enter your Email address and password correct |

    Scenario: I logout from my account
        Given I visit the insurance site
        When I enter the username
        And I enter the password
        And I click on Login button
        And I click on Logout button
        Then I should be logged out from app