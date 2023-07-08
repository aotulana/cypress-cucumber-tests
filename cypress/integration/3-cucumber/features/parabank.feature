Feature: parabank.parasoft.com
  Scenario: visting the login page
    Given I visit parabank.parasoft.com/parabank/index.htm
    Then I should see a login form

  Scenario: login with valid credentials
    Given I visit parabank.parasoft.com/parabank/index.htm
    When I provide valid username and password
    Then I should see user accounts overview