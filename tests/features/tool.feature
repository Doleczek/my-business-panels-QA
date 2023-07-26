Feature: Tool

    Background:
        Given I am at "tool" page

    Scenario: Page navigation 
        Then I click "MyProcess" button
        Then I verify that "Login needed" appears
        Then I refresh the page
        Then I click "MyOperations" button
        Then I verify that "Login needed" appears
        Then I refresh the page
        Then I click "MyEntities" button
        Then I verify that "Login needed" appears
        Then I refresh the page

    Scenario: I am logged in @dev
        Then I log in
