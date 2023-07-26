Feature: MyEntities

    Background: 

        Given I am at "main" page
        Then I log in

    Scenario: Check page @dev 

        Then I click "Try Production Planning" button
        Then I click "MyEntities" button