📋 Tasks Completed

1. API Testing
✅ Developed test scenarios for: CreateToken and CreateBooking APIs (based on Restful-Booker)
✅ Covered both positive and negative test cases
✅ Included validations for:
    1. Authentication (401)
    2. Invalid credentials
    3. Missing fields
    4. Rate limiting (429)
    5. Security vulnerabilities (XSS, SQL injection)
    6. HTTPS enforcement

2. Mobile App UI Automation
✅ Automated Android mobile app using WebdriverIO + Appium
✅ Built reusable page object methods for: Create Account and Update Account
✅ Handled Explicit waits:
    1. waitAndClick()
    2. waitAndSetValue()
    3. waitAndClearAndSetValue()
    4. waitAndAssertDisplayed()
 ✅ Technologies Used
    1. WebdriverIO - UI automation framework
    2. Appium - Mobile app automation
    3. Cucumber	- BDD test scenarios
    4. Allure - Test reporting


✅ Test Scenarios Covered
- Happy path
- Field validation: required fields
- Error message validation


 🚀 How to Run the Tests
Install Dependencies: npm install
To run: npm run test

✅ Notes
- Focused on demonstrating scalable, maintainable test design
- Encountered and resolved Appium and Android Emulator setup issues