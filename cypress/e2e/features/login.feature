Feature: Login Functionality

  Background:
    Given I am on the login page

  @smoke
  Scenario: Validate Login is successfull with Valid Credentials
    When I enter "standard_user" and "secret_sauce"
    And I click on the login button
    Then I should be redirected to the inventory page

  @negative
  Scenario: Validate Login is unsuccessful with Locked User Credentials
    When I enter "locked_out_user" and "secret_sauce"
    And I click on the login button
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."
    And I should remain on the login page

  @negative
  Scenario: Validate Login is unsuccessful with Invalid User Credentials
    When I enter "invalid_user" and "secret_sauce"
    And I click on the login button
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"
    And I should remain on the login page

  @regression
  Scenario Outline: Login Form Validation
    When I enter "<username>" and "<password>"
    And I click on the login button
    Then I should see the error message "<errorMessage>"

    Examples:
      | username      | password     | errorMessage                       |
      |               | secret_sauce | Epic sadface: Username is required |
      | standard_user |              | Epic sadface: Password is required |
      |               |              | Epic sadface: Username is required |