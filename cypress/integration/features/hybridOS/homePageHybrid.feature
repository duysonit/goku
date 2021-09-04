@regression
Feature: Home Page
  This feature for homepage testing

  Background:
    Given I visit "/"

  #===================================
  # Login feature
  #===================================
  # @focus

  @focus
  Scenario: Verify the homepage
    Then I see the Title "Simple workspace booking for hotdesking in the hybrid workplace."
