Feature: Quatation Functionlaity Test

    Scenario Outline: I request a quotation
        Given I visit to Request Quotation Page
        When I enter the Break Down Cover as <breakDownCover>
        And I enter the Wind Screen Repair as <windScreenRepair>
        And I enter the Incident detail as <incident>
        And I enter the Registration Number as <registration>
        And I enter the Annual Mileage as <annualMileage>
        And I enter the Estimated Value as <estimated_value>
        And I enter the Parking Location as <parking>
        And I enter the Policy Date as <year> <month> <day>
        And I click on Calculate Premium button
        Then I should see my insurance discount
        When I click on Save Quotation button
        Then I should my Quotation is saved

        Examples:
            | breakDownCover | windScreenRepair | incident  | registration | annualMileage | estimated_value | parking     | year | month    | day |
            | European       | NO               | Breakdown | ABC1234      | 1000          | 50000           | Street/Road | 2024 | December | 31  |


    Scenario Outline: Retrive Quotation
        Given I visit to Retrieve Quotation Page
        And I enter my <Quotation ID Number>
        And I click on Retrieve button
        Then I should see the retrieve quotaiton page display

        Examples:
            | Quotation ID Number |
            | 20631               |