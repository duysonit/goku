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
  Scenario: Verify the title
    Then I see the Title "Autonomous | Productivity tools for modern offices"
