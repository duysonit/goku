@regression
Feature: Home Page
  This feature for homepage testing

  Background:
    Given I visit "/"

  #===================================
  # Login feature
  #===================================
  @production
  Scenario: Login with invalid otp
    When I navigate to sign in page
    And I fill email " automation@autonomous.nyc"
    And I click submit button
    And I fill otp "1234"
    And I click submit button
    Then I see the error message "Invalid code. Please try again, or generate a new code."

 @production
 Scenario: Login with empty email
   When I navigate to sign in page
   And I don't fill to "email"
   Then I see the message "Email address required."

 # @production
 # Scenario Outline: Login with valid credential
 #   When I navigate to sign in page
 #   And I login with "<User Type>"
 #   Then I see the message "<Expected message>"

 #   Examples:
 #     | User Type  | Expected message                              |
 #     | NormalUser |                                               |
 #     | B2BUser    | Welcome to Autonomous’s own Autonomous store! |


 #===================================
 # Check footer link
 #===================================
 @production
 Scenario Outline: I can direct to all links of Smart Office at footer
   When I find "<Part>" at footer and click "<Text>"
   Then I see "<Expected result>" on new page

   Examples:
     | Part         | Text                  | Expected result                             |
     | Smart Office | About                 | Thanks for getting to know us               |
     | Smart Office | Blog                  | Keep up with the latest hybrid working news |
     | Smart Office | Shipping Policy       | Shipping Policy                             |
     | Smart Office | Trial & Return Policy | Trial & Return & Exchange Policy            |
     | Smart Office | Warranty Policy       | Warranty Policy                             |
     | Smart Office | Share and Earn        | Ways to earn                                |
 # | Smart Office | Job Opportunities     | Join Autonomous                             |

 @production
 Scenario Outline: I can direct to all links of Shop Online at footer
   When I find "<Part>" at footer and click "<Text>"
   Then I see "<Expected result>" on new page

   Examples:
     | Part        | Text            | Expected result                                                            |
     | Shop Online | Standing Desks  | Which SmartDesk is right for you?                                          |
     | Shop Online | Office Chairs   | Which ErgoChair is right for you?                                          |
     | Shop Online | Accessories     | 197,383 people choose Autonomous                                           |
     | Shop Online | Home Office     | Why an ergonomic home office is a must-have                                |
     | Shop Online | Designer Desks  | Enjoy the space to let your creative juices flow                           |
     | Shop Online | Developer Desks | Sit or stand, bust out codes & program at your peak all day, everyday      |
     | Shop Online | Trader Desks    | Trade more productively, & take command of the exchange. All day, everyday |
     | Shop Online | Gaming Setup    | Build your ultimate gaming setup                                           |

 @production
 Scenario Outline: I can direct to all links of Get In Touch at footer
   When I find "<Part>" at footer and click "<Text>"
   Then I see "<Expected result>" on new page

   Examples:
     | Part         | Text               | Expected result                                                       |
     | Get In Touch | Help Center        | We’re here to help.                                                   |
     | Get In Touch | Track your order   | Track your order                                                      |
     | Get In Touch | Community          | Community                                                             |
     | Get In Touch | Press Feature      | Autonomous Press Feature                                              |
     | Get In Touch | Influencer Program | Interest in reviewing our products or becoming our affiliate partner? |
     | Get In Touch | Reseller Program   | Join the Autonomous Authorized Reseller Program                       |
     | Get In Touch | Co-branding        | Want to try out the Hybrid Suite for FREE?                            |
     | Get In Touch | Bulk Order         | Going Hybrid is easy.                                                 |
     | Get In Touch | Business Offer     | Help your team work smarter from home!                                |
