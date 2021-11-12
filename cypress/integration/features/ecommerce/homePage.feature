@regression
Feature: Home Page
  This feature for homepage testing

  Background:
    Given I visit "/"

  #===================================
  # Homepage
  #===================================
  # @focus

  @focus
  @production

  Scenario: I visit homepage
    Then I see the title "Mosh"

  @focus
  @production

  Scenario Outline: I can direct to all links of Mosh at footer
    When I find "<Part>" at footer and click "<Text>"
    Then I see the "<Expected result>" on the page

    Examples:
      | Part    | Text             | Expected result                               |
      | Product | Main features    | Speak naturally                               |
      | Product | Pricing          | Pricing Plan                                  |
      | Product | Download         | Spontaneous audio calls in a virtual work hub |
      | Help    | Terms of service | MOSH TERMS OF SERVICE                         |
      | Help    | Privacy Policy   | Privacy Policy                                |
      | Help    | FAQs             | What platforms support Mosh?                  |
