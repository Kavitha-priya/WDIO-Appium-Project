Feature: Create Account
As an end user
I want to create an account successfully
So that I can manage my driving license details

# Participant Info
@Field_Validation
  Scenario Outline: Participant Info field-level validation errors
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
  Then the Submit Registration button should be disabled
  And I see the ErrorMessage on the screen
  | PARTICIPANT_ID | PARTICIPANT_ID_FORMAT  |
  | MENTOR_NAME    | INPUT_LENGTH           |
  | GROUP_NAME     | INPUT_LENGTH           |

  Examples:
    | FirstName | LastName  | Email                 | Phone         | State     | DOB         | DriverLicense | LicenceExpDate  | ParticipantId | JoinDate  | MentorName | GroupName                              |
    | Test      | Test      | testtest100@gmail.com | 999-999-9999  | TamilNadu | 05/07/1995  | A9999999      | 28/07/2025      | 1234          | 28/06/2025| M          | gthdyhu nhjuikjhstgy hujyhtgrughyuoik  |

@Field_Validation
Scenario: Participant Info field-level validation errors with missing required data
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
    Then the Submit Registration button should be disabled
    And I see the ErrorMessage on the screen
    | PARTICIPANT_ID | FIELD_REQUIRED  |
    | MENTOR_NAME    | FIELD_REQUIRED  |
    | GROUP_NAME     | FIELD_REQUIRED  |
    | JOIN_DATE      | FIELD_REQUIRED  |
    
    Examples:
      | FirstName | LastName  | Email                 | Phone         | State     | DOB         | DriverLicense | LicenceExpDate  | ParticipantId | JoinDate  | MentorName | GroupName |
      | Test      | Test      | testtest100@gmail.com | 999-999-9999  | TamilNadu | 05/07/1995  | A9999999      | 28/07/2025      | Empty         |  Empty    | Empty      | Empty     |

