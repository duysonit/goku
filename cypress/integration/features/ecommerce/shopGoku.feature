@regression
Feature: Home Page
  This feature for homepage testing

  Background:
    Given I visit "/"

  #===================================
  # Login feature
  #===================================
  # @focus

  @production
  Scenario: Verify the title
    Then I see the Title page shopgoku "Home | ShopGoKu"
