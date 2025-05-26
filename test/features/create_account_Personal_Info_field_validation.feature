Feature: Create Account
As an end user
I want to create an account successfully
So that I can manage my driving license details

    @Field_Validation
    Scenario Outline: Personal Info field-level validation errors
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    Then the Continue button should be disabled
    And I see the ErrorMessage on the screen
    | FIRST_NAME  | INPUT_LENGTH|
    | LAST_NAME   | INPUT_LENGTH|
    | EMAIL       | EMAIL_FORMAT|
    | PHONE_NUMBER| PHONE_NUMBER_FORMAT|

    Examples:
      | FirstName | LastName                              | Email          | Phone            | State     | DOB         |
      | T         | Testuhyughttuhyuhhjyuh hjuyhahsguajs  | invalidemail   | 999-999-9999786  | TamilNadu | 05/07/1995  |

    @Field_Validation
    Scenario Outline: Personal Info field-level validation errors with missing required data
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    Then the Continue button should be disabled
    And I see the ErrorMessage on the screen
    | FIRST_NAME    | FIELD_REQUIRED  |
    | LAST_NAME     | FIELD_REQUIRED  |
    | EMAIL         | FIELD_REQUIRED  |
    | PHONE_NUMBER  | FIELD_REQUIRED  |
    | DATE_OF_BIRTH | FIELD_REQUIRED  |

    Examples:
      | FirstName | LastName  | Email   | Phone | State | DOB   |
      | Empty     | Empty     | Empty   |  Empty|  Empty| Empty |
    

    @Field_Validation
    Scenario Outline: Personal Info alert-level validation errors
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click the Continue button
    Then I see the "<ErrorMessage>" on the alert

    Examples:
      | Scenario        | FirstName                             | LastName  | Email               | Phone         | State     | DOB       | ErrorMessage   |
      | State Field     | TT                                    | TT        |test@gmail.com       | 999-999-9999  |           |15/05/1998 | STATE_REQUIRED |
      | Duplicate Email | uyhtuiju yuhijuygheghtuhgtyuj jhujuh  | TT        |test@gmail.com       | 999-999-9999  | TamilNadu |15/05/1998 | DUPLICATE_EMAIL|
      # Not sure if this condition is applicable for this app
      | Age Limit       | Test                                  | Test      |testtest99@gmail.com | 999-999-9999  | TamilNadu |15/05/2024 | AGE_LIMIT      |

    @Field_Validation
    Scenario Outline: User clears the selected date from the date picker
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click "CLEAR" button on the date picker
    Then the selected DOB should be cleared

    Examples:
      | FirstName | LastName  | Email  | Phone    | State   | DOB         |
      |           |           |        |          |         | 05/07/1995  |

    @Field_Validation
    Scenario Outline: User cancels the date picker
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click "CANCEL" button on the date picker
    Then the selected "<DOB>" should not be updated

    Examples:
      | FirstName | LastName  | Email  | Phone    | State   | DOB         |
      |           |           |        |          |         | 05/07/1995  |

