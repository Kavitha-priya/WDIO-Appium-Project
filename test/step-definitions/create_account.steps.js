import { Given} from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import CreateAccountPage from '../pageobjects/createAccount.page';
import Page from '../pageobjects/page';

Given(/^the Personal Info page should appear$/, async () => {
    await CreateAccountPage.verifyPersonalInfoPageElements();
});

Given(/^I provide personal information (.*), (.*), (.*), (.*), (.*), (.*)$/, async (FirstName, LastName, Email, Phone, State, DOB) => {
    await CreateAccountPage.inputPersonalInformationOnCreateAcct(FirstName, LastName, Email, Phone, State, DOB);
});

Given(/^I click the Continue button$/, async () => {
    await CreateAccountPage.getContinueBtn().click;
});

Given(/^the Add License page should appear$/, async () => {
    await CreateAccountPage.verifyLicenseInfoPageElements();
});

Given(/^I provide driving license information (.*), (.*)$/, async (DriverLicense, LicenceExpDate) => {
    await CreateAccountPage.inputLicenseInformationOnCreateAcct(DriverLicense, LicenceExpDate);
});

Given(/^the Add Participant ID page should appear$/, async () => {
    await CreateAccountPage.verifyParticipantInfoPageElements();
});

Given(/^I provide valid participant information (.*), (.*), (.*), (.*)$/, async (ParticipantId, JoinDate, MentorName, GroupName) => {
    await CreateAccountPage.inputParticipantInformationOnCreateAcct(ParticipantId, JoinDate, MentorName, GroupName);
});

Given(/^I click the Submit Registration button$/, async () => {
    await CreateAccountPage.getSubmitRegistrationBtn().click;
});

Given(/^I should see the (.*)$/, async (message) => {
    await waitAndAssertDisplayed(CreateAccountPage.getMsg(message));
});

Given(/^I click the OK button$/, async () => {
    await Page.getOkBtn().click;
});

Given(/^I should be redirected to the Login page$/, async () => {
    await LoginPage.verifyLoginPageElements();
});

Given(/^the Continue button should be disabled$/, async () => {
    await expect(CreateAccountPage.getContinueBtn()).toBeDisabled();
});

Given(/^the Submit Registration button should be disabled$/, async () => {
    await expect(CreateAccountPage.getSubmitRegistrationBtn()).toBeDisabled();
});

Given(/^I click "CLEAR" button on the date picker$/, async () => {
    await CreateAccountPage.getClearBtn().click;
});

Given(/^the selected DOB should be cleared$/, async () => {
    const dobValue = await CreateAccountPage.getDOB();
    expect(dobValue).tobe('');
});

Given(/^I click "CANCEL" button on the date picker$/, async () => {
    await CreateAccountPage.getCancelBtn().click;
});

Given(/^the selected (.*) should not be updated$/, async (date) => {
    const dobValue = await CreateAccountPage.getDOB();
    expect(dobValue).not.tobe(date);
});
