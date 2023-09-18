Feature: MyEntities

    Background: 

        Given I am at "main" page
        Then I log in

    Scenario: Check page  

        Then I click "Try Production Planning" button
        Then I click "MyEntities" button
        Then I click "Edit" element
        Then I click "Edit" element
        Then I click "Create" element
        Then I click "Cost" element

    Scenario: Create cost   

        Given I am at "MyEntities" page
        Then I click "Create" element
        Then I click "Cost" element
        Then I fill out "testCosts_1" data, version "0"
        Then I click "SubmitCosts" button
        Then I refresh the page
        

    Scenario: Creat utility  
        
        Given I am at "MyEntities" page
        Then I click "Create" element
        Then I click "Utility" element
        Then I fill out "testCosts_1" data, version "0"
        Then I click "SubmitUtility" button
        Then I refresh the page
        Then I click "Utilities" element
        Then I verify that "wages" text is visible
        
        
