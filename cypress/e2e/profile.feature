Feature: Profile Functionality Tests

    Scenario: I can view the profile
        Given I visit to Profile Page
        Then I should see my profile details

    Scenario Outline: I can edit the profile
        Given I visit to Edit Profile Page
        When I enter the title as <title>
        And I enter the First name as <first_name>
        And I enter the Surname as <surname>
        And I enter the Phone as <phone>
        And I enter the Date Of Birth as <year> <month> <day>
        And I enter the License Type as <license_type>
        And I enter the License Period as <license_period>
        And I enter the Occupation as <occupation>
        And I enter the Address as <street> <city> <country> <postal_code>
        And I click on Update User button
        Then I should see my profile is updated with <title>

        Examples:
            | title | first_name | surname | phone      | year | month   | day | license_type | license_period | occupation | driver_history | street      | city     | country | postal_code |
            | Sir   | Elon       | Musk    | 0987654321 | 1970 | January | 1   | Full         | 10             | Scientist  | None           | Tesla World | New York | USA     | 123456      |
