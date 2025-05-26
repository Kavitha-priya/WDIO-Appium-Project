Feature: Create Account
As an end user
I want to create an account successfully
So that I can manage my driving license details

# License Info
    @Field_Validation
    Scenario Outline: License Info field-level validation errors
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click the Continue button
    Then the Add License page should appear
    When I provide driving license information "<DriverLicense>", "<LicenceExpDate>"
    Then the Continue button should be disabled
    And I see the ErrorMessage on the screen
    | DRIVER_LICENSE_NUMBER  | DRIVER_LICENSE_FORMAT|

    Examples:
      | FirstName | LastName  | Email                 | Phone         | State     | DOB         | DriverLicense | LicenceExpDate |
      | Test      | Test      | testtest100@gmail.com | 999-999-9999  | TamilNadu | 05/07/1995  | 1234          | 28/07/2025     |

    @Field_Validation
    Scenario Outline: License Info field-level validation errors with missing required data
    Given I am on the Login page
    And I click the Create an Account link
    Then the Personal Info page should appear
    When I provide personal information "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<State>", "<DOB>"
    And I click the Continue button
    Then the Add License page should appear
    When I provide driving license information "<DriverLicense>", "<LicenceExpDate>"
    Then the Continue button should be disabled
    And I see the ErrorMessage on the screen
    | DRIVER_LICENSE_NUMBER | FIELD_REQUIRED  |
    | LIC_EXP_DATE          | FIELD_REQUIRED  |

    Examples:
      | FirstName | LastName  | Email                 | Phone         | State     | DOB         | DriverLicense | LicenceExpDate |
      | Test      | Test      | testtest100@gmail.com | 999-999-9999  | TamilNadu | 05/07/1995  | Empty         | Empty          |



