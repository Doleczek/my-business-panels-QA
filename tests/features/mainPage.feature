Feature: MainPage

	Scenario: Page navigation 

		Given I am at "main" page
		Then I click "Try Production Planning" button
		Then I verify that URL contains "tool"
		