Feature: Update User Details
As an end user
I want to update my previously entered details
So that I can maintain the updated information

@Happy_Path
Scenario Outline: Update participant and license information
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select Participant Details option
Then I Edit Participant info screen should be displayed
When I update participant and License information "<ParticipantId>", "<MentorName>", "<URL>", "<DriverLicense>", "<LicenceExpDate>"
And I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button
When I click on Info tab
Then I should see the data is updated

Examples:
    | ParticipantId | MentorName | URL | DriverLicense    | LicenceExpDate   | UserName                | Password | Message                |
    |               |            |     | A9999999         |                  | rajkumar@testleaf.com   | Leaf@123 | REVIEW_SUBMISSION_MSG  |

@Happy_Path
Scenario Outline: Save participant information without making any changes
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select Participant Details option
Then I Edit Participant info screen should be displayed
When I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button
When I click on Info tab
Then I should see the data is not updated

Examples:
    | UserName                | Password | Message          |
    | rajkumar@testleaf.com   | Leaf@123 | SAVE_SUCCESS_MSG |

@Field_Validation
Scenario Outline: Edit License Info field-level validation errors
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select Participant Details option
Then I Edit Participant info screen should be displayed
When I update participant and License information "<ParticipantId>", "<MentorName>", "URL", "<DriverLicense>", "<LicenceExpDate>"
And I see the ErrorMessage on the screen
    | PARTICIPANT_ID        | PARTICIPANT_ID_FORMAT|
    | MENTOR_NAME           | INPUT_LENGTH         |
    | URL                   | INPUT_LENGTH         |
    | DRIVERS_LICENSE_NUMBER| DRIVER_LICENSE_FORMAT|
When I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button

Examples:
| ParticipantId | MentorName | URL | DriverLicense    | LicenceExpDate   | UserName                | Password | Message                        |
| 12345         | A          | A   | 12345            |                  | rajkumar@testleaf.com   | Leaf@123 | PLEASE_CHECK_THE_ENTERED_DATA  |

@Field_Validation
Scenario Outline: Edit License Info field-level validation errors with missing required data
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select Participant Details option
Then I Edit Participant info screen should be displayed
When I update participant and License information "<ParticipantId>", "<MentorName>", "URL", "<DriverLicense>", "<LicenceExpDate>"
And I see the ErrorMessage on the screen
    | PARTICIPANT_ID        | FIELD_REQUIRED|
    | MENTOR_NAME           | FIELD_REQUIRED|
    | URL                   | FIELD_REQUIRED|
    | DRIVERS_LICENSE_NUMBER| FIELD_REQUIRED|
When I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button

Examples:
| ParticipantId | MentorName | URL      | DriverLicense    | LicenceExpDate   | UserName                | Password | Message                        |
| Empty         | Empty      | Empty    | Empty            |                  | rajkumar@testleaf.com   | Leaf@123 | PLEASE_CHECK_THE_ENTERED_DATA  |