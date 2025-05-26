Feature: Update User Details
As an end user
I want to update my previously entered details
So that I can maintain the updated information

@Happy_Path
Scenario Outline: User updates personal information
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select My Profile option
Then I Edit Profile screen should be displayed
When I update personal information "<FirstName>", "<LastName>", "<Phone>", "<DOB>"
And I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button
When I click on Info tab
Then I should see the data is updated

Examples:
    | FirstName          | LastName         | Phone | DOB | UserName                | Password | Message                |
    | UpdatedFirstName   | UpdatedLastName  |       |     | rajkumar@testleaf.com   | Leaf@123 | REVIEW_SUBMISSION_MSG  |

@Happy_Path
Scenario Outline: Save profile without making any changes
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select My Profile option
Then I Edit Profile screen should be displayed
When I click SAVE CHANGES button
Then I should see the "<Message>"
And I click OK button
When I click on Info tab
Then I should see the data is not updated

Examples:
    | UserName                | Password | Message          |
    | rajkumar@testleaf.com   | Leaf@123 | SAVE_SUCCESS_MSG |

@Field_Validation
Scenario Outline: Edit Profile field-level validation errors
Given I login to the app with "<UserName>" and "<Password>"
And I am on Info page
And I click on Settings tab
When I select My Profile option
Then I Edit Profile screen should be displayed
When I update personal information "<FirstName>", "<LastName>", "<Phone>", "<DOB>"
Then the SAVE CHANGES button should be disabled

Examples:
    | Scenario              | FirstName | LastName  | Phone | DOB | UserName                | Password |
    |  missing required data|           |           |       |     | rajkumar@testleaf.com   | Leaf@123 |
    |  Invalid data         | T         | T         | 1234  |     | rajkumar@testleaf.com   | Leaf@123 |
