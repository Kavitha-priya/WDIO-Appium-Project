import { Given} from '@wdio/cucumber-framework';
import UpdateAccountPage from '../pageobjects/updateUserDetails.page';
import Page from '../pageobjects/page';

Given(/^I click on Settings tab$/, async () => {
    await waitAndClick(UpdateAccountPage.getSettingsTab());
});

Given(/^I select Participant Details option$/, async () => {
    await waitAndClick(UpdateAccountPage.getParticipantDetails());
});

Given(/^I Edit Participant info screen should be displayed$/, async () => {
    await UpdateAccountPage.verifyEditParticipantInfoPageElements();
});

Given(/^I update participant and License information (.*), (.*), (.*), (.*), (.*)$/, async (ParticipantId, MentorName, URL, DriverLicense, LicenceExpDate) => {
    await UpdateAccountPage.inputParticipantInformation(ParticipantId, MentorName, URL, DriverLicense, LicenceExpDate);
});

Given(/^I click SAVE CHANGES button$/, async () => {
    await UpdateAccountPage.getSaveChangesBtn().click;
});

Given(/^I click OK button$/, async () => {
    await Page.getOkBtn().click;
});

Given(/^I select My Profile option$/, async () => {
    await waitAndClick(UpdateAccountPage.getMyProfile());
});

Given(/^I Edit Profile screen should be displayed$/, async () => {
    await UpdateAccountPage.verifyEditProfilePageElements();
});

Given(/^I update personal information (.*), (.*), (.*), (.*)$/, async (FirstName, LastName, Phone, DOB) => {
    await UpdateAccountPage.inputPersonalInformation(FirstName, LastName, Phone, DOB);
});

Given(/^the SAVE CHANGES button should be disabled$/, async () => {
    await expect(UpdateAccountPage.getSaveChangesBtn()).toBeDisabled();
});