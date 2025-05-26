import Page from './page';
const BasePage = require('./base.page');
const CreateAccountPage = require('./createAccount.page');

class UpdateUserDetailsPage extends Page {

    EDIT_PROFILE = 'Edit Profile'
    SAVE_CHANGES = 'SAVE CHANGES'
    REVIEW_SUBMISSION_MSG = 'Your changes are submitted for review and approval.'
    SAVE_SUCCESS_MSG = 'Changes saved successfully'


    EDIT_PARTICIPANT_INFO = 'Edit Participant Info'
    PARTICIPANT_CARD = 'PARTICIPANT CARD'
    PARTICIPANT_ID = 'Participant ID'
    MENTOR_NAME = "Mentor's Name"
    URL = 'URL'

    DRIVERS_LICENSE = 'DRIVERS LICENSE'
    DRIVERS_LICENSE_NUMBER = 'Drivers License #'
    PLEASE_CHECK_THE_ENTERED_DATA = 'Please check the entered data'
    MY_PROFILE = 'My Profile'
    PARTICIPANT_DETAILS = 'Participant Details'
    DRIVER_LICENSE_FORMAT = 'Hi! Enter a valid Driver’s License # in A9999999'
    PARTICIPANT_ID_FORMAT = 'Enter a valid Record # between 7-12 digits'
    FIELD_REQUIRED = 'Field Required'
    
    get getMyProfile () {
        return Page.getViewWithtext(this.MY_PROFILE);
    }
    get getParticipantDetails () {
        return Page.getViewWithtext(this.PARTICIPANT_DETAILS);
    }
    get getSettingsTab () {
        return $('//android.view.View[@resource-id="tab-t0-2"]');
    }
    get getEditProfileTitle () {
        return Page.getViewWithtext(this.EDIT_PROFILE);
    }
    get getParticipantImage () {
        return $('//*[@class="android.widget.Image"][@clickable="true"]');
    }
    get getSaveChangesBtn () {
        return Page.getButtonwithText(this.SAVE_CHANGES);
    }
    getMsg (msg) {
        return Page.getViewWithtext(msg);
    }
    get getEditParticipantInfoTitle () {
        return Page.getViewWithtext(this.EDIT_PARTICIPANT_INFO);
    }
    get getParticipantCardLbl () {
        return Page.getViewWithtext(this.PARTICIPANT_CARD);
    }
    get getParticipantIdInput () {
        return Page.getInputFieldWithHint(this.DRIVER_LICENSE_NUMBER);
    }
    get getMentorNameInput () {
        return Page.getInputFieldWithHint(this.MENTOR_NAME);
    }
    get getUrlInput () {
        return Page.getInputFieldWithHint(this.URL);
    }
    get getDriverLicenseLbl () {
        return Page.getViewWithtext(this.DRIVERS_LICENSE);
    }
    get getDriverLicenseInput () {
        return Page.getInputFieldWithHint(this.DRIVERS_LICENSE_NUMBER);
    }
    get getParticipantCardDate () {
        return $('(//android.widget.Spinner)[1]');
    }
     get getDriverLicenseExpDate () {
        return $('(//android.widget.Spinner)[2]');
    }getInlineErrMsg (ele, msg) {
    return ele.$('./ancestor::android.view.View[4]//following-sibling::*[@text="'+ msg +'"][1]')
}

async verifyEditParticipantInfoPageElements(){
    await waitAndAssertDisplayed(this.getEditProfileTitle())
    await waitAndAssertDisplayed(this.getParticipantImage())
    await waitAndAssertDisplayed(this.getSaveChangesBtn())
    await waitAndAssertDisplayed(CreateAccountPage.getFirstName())
    await waitAndAssertDisplayed(CreateAccountPage.getLastName())
    await waitAndAssertDisplayed(CreateAccountPage.getEmail())
    await waitAndAssertDisplayed(CreateAccountPage.getPhoneNumber())
    await waitAndAssertDisplayed(CreateAccountPage.getState())
    await waitAndAssertDisplayed(CreateAccountPage.getViewWithtext())

}
async inputParticipantInformation(ParticipantId, MentorName, URL, DriverLicense, LicenceExpDate){
    if (ParticipantId !== undefined && ParticipantId !== null && ParticipantId !== '') {
        if (ParticipantId.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getParticipantIdInput);
        } else {
            await waitAndSetValue(this.getParticipantIdInput, ParticipantId);
        }
    }

    if (MentorName !== undefined && MentorName !== null && MentorName !== '') {
        if (MentorName.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getMentorNameInput);
        } else {
            await waitAndSetValue(this.getMentorNameInput, MentorName);
        }
    }

    if (URL !== undefined && URL !== null && URL !== '') {
        if (URL.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getUrlInput);
        } else {
            await waitAndSetValue(this.getUrlInput, URL);
        }
    }

    if (DriverLicense !== undefined && DriverLicense !== null && DriverLicense !== '') {
        if (DriverLicense.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getDriverLicenseInput);
        } else {
            await waitAndSetValue(this.getDriverLicenseInput, DriverLicense);
        }
    }

    if (LicenceExpDate !== undefined && LicenceExpDate !== null && LicenceExpDate.toLowerCase() !== 'empty' && LicenceExpDate !== '') {
        await waitAndClick(this.getDriverLicenseExpDate);
        await waitAndClick(this.getSaveChangesBtn);
    }

}
async verifyEditProfilePageElements(){
    await waitAndAssertDisplayed(this.getSaveChangesBtn())
    await waitAndAssertDisplayed(this.getEditParticipantInfoTitle())
    await waitAndAssertDisplayed(this.getParticipantCardLbl())
    await waitAndAssertDisplayed(this.getParticipantIdInput())
    await waitAndAssertDisplayed(this.getMentorNameInput())
    await waitAndAssertDisplayed(this.getUrlInput())
    await waitAndAssertDisplayed(this.getDriverLicenseLbl())
    await waitAndAssertDisplayed(this.getDriverLicenseInput())
    await waitAndAssertDisplayed(this.getParticipantCardDate())
    await waitAndAssertDisplayed(this.getDriverLicenseExpDate())
}
async inputPersonalInformation(FirstName, LastName, Phone, DOB){
    if (FirstName !== undefined && FirstName !== null && FirstName !== '') {
        if (FirstName.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getFirstName);
        } else {
            await waitAndSetValue(this.getFirstName, FirstName);
        }
    }

    if (LastName !== undefined && LastName !== null && LastName !== '') {
        if (LastName.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getLastName);
        } else {
            await waitAndSetValue(this.getLastName, LastName);
        }
    }

    if (Phone !== undefined && Phone !== null && Phone !== '') {
        if (Phone.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getPhoneNumber);
        } else {
            await waitAndSetValue(this.getPhoneNumber, Phone);
        }
    }

    if (DOB !== undefined && DOB !== null && DOB.toLowerCase() !== 'empty' && DOB !== '') {
        await waitAndClick(this.getDOB);
        await Page.selectDateFromPicker(JoinDate);
        await waitAndClick(this.getSetBtn);
    }

}

}
export default new UpdateUserDetailsPage();