@regression
Feature: Sign in
    This feature for sign in

    Background:
        Given I visit "/"

    #===================================
    # Sign in feature
    #===================================
    # @focus
    @focus
    Scenario: I want to sign in
        When I click on the button Sign in
        Then I will see the page "Sign in"