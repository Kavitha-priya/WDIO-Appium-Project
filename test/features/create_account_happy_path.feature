Feature: Create Account
As an end user
I want to create an account successfully
So that I can manage my driving license details

  @Happy_Path
   Scenario: User completes registration and logs in successfully
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click the Continue button
    Then the Add License page should appear
    When I provide driving license information "<DriverLicense>", "<LicenceExpDate>"
    And I click the Continue button
    Then the Add Participant ID page should appear
    When I provide valid participant information "<ParticipantId>", "<JoinDate>", "<MentorName>", "<GroupName>"
    And I click the Submit Registration button
    Then I should see the "<Message>"
    And I click the OK button
    Then I should be redirected to the Login page

    Examples:
      | FirstName | LastName  | Email                 | Phone         | State     | DOB         | DriverLicense | LicenceExpDate  | ParticipantId | JoinDate  | MentorName | GroupName | Message                  |
      | Test      | Test      | testtest100@gmail.com | 999-999-9999  | TamilNadu | 05/07/1995  | A9999999      | 28/07/2025      | 1234567890    | 28/07/2025| TestMentor | TestGroup | REGISTRATION_SUCCESS_MSG |

