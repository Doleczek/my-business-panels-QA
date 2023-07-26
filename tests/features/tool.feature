Feature: Tool

    Background:

        Given I am at "tool" page

    Scenario: Verify if not logged in user is blocked

        Then I click "MyProcess" button
        Then I verify that "Login needed" appears
        Then I refresh the page
        Then I click "MyOperations" button
        Then I verify that "Login needed" appears
        Then I refresh the page
        Then I click "MyEntities" button
        Then I verify that "Login needed" appears
