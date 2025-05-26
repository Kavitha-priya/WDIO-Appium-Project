import Page from './page';
const BasePage = require('./base.page');

class CreateAccountPage extends Page {

constants = {
    PERSONAL_INFO: 'Personal Info',
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    EMAIL: 'Email',
    PHONE_NUMBER: 'Phone Number',
    STATE: 'State',
    DATE_OF_BIRTH: 'Date of Birth',
    ARROW_FORWARD: 'arrow forward',
    CLEAR: 'CLEAR',
    CANCEL: 'CANCEL',
    SET: 'SET',
    CONTINUE: 'CONTINUE',
    SEARCH: 'Search',
    ARROW_DOWN: 'arrow down',
    FIELD_REQUIRED: 'Field Required',
    INPUT_LENGTH: 'Hey there! Enter a value between 2-35 characters',
    EMAIL_FORMAT: 'Email must be in xxx@xxx.xxx format',
    PHONE_NUMBER_FORMAT: 'Hi! Phone number must be 999-999-9999',
    STATE_REQUIRED: 'Please select the state',
    DUPLICATE_EMAIL: 'Given email address already registered',

    //   License Info
    ADD_LICENSES: 'Add Licenses',
    DRIVER_LICENSE_FORMAT: 'Hi! Enter a valid Driver’s License # in A9999999',
    ENTER_YOUR_DRIVERS_LICENSE_INFO: 'ENTER YOUR DRIVERS LICENSE INFO',
    DRIVER_LICENSE_NUMBER: 'Drivers License #',
    LIC_EXP_DATE: 'Lic Exp Date',

    // Participant Info
    ADD_PARTICIPANT_ID: 'Add Participant ID',
    ADD_PARTICIPANT_ID_INFO: 'ADD PARTICIPANT ID INFO',
    PARTICIPANT_ID: 'Participant ID#',
    MENTOR_NAME: "Mentor's Name",
    GROUP_NAME: 'Group Name',
    SUBMIT_REGISTRATION: 'SUBMIT REGISTRATION',
    REGISTRATION_SUCCESS_MSG: 'High Five! Your account is being reviewed and we will contact you as soon as you are verified.',
    PARTICIPANT_ID_FORMAT: 'Enter a valid Record # between 7-12 digits',
    JOIN_DATE: 'Join Date'
}; 


get getPersonalInfoTitle () {
    return Page.getViewWithtext(this.PERSONAL_INFO);
}get getFirstName () {
    return Page.getInputFieldWithHint(this.FIRST_NAME);
}get getLastName () {
    return Page.getInputFieldWithHint(this.LAST_NAME);
}get getEmail () {
    return Page.getInputFieldWithHint(this.EMAIL);
}get getPhoneNumber () {
    return Page.getInputFieldWithHint(this.PHONE_NUMBER);
}get getState () {
    return Page.getViewWithtext(this.STATE);
}get getDOB () {
    return Page.getViewWithtext(this.DATE_OF_BIRTH);
}get getForwardArrow () {
    return $('//android.widget.Image[@text="arrow forward"]');
}get getClearBtn () {
    return Page.getButtonwithText(this.CLEAR);
}get getCancelBtn () {
    return Page.getButtonwithText(this.CANCEL);
}get getSetBtn () {
    return Page.getButtonwithText(this.SET);
}get getContinueBtn () {
    return Page.getButtonwithText(this.CONTINUE);
}get getSearchInput () {
    return Page.getInputFieldWithHint(this.SEARCH);
}get getCountryCode () {
    return $('//android.view.View[@resource-id="lbl-59"]');
}get getDateDrpoDown () {
    return $('//android.widget.Spinner');
}get getDownArrow () {
    return Page.getButtonwithText(this.ARROW_DOWN);
}getMsg (msg) {
    return Page.getViewWithtext(msg);
}getInlineErrMsg (ele, msg) {
    return ele.$('./ancestor::android.view.View[4]//following-sibling::*[@text="'+ msg +'"][1]')
}


get getAddLicenseTitle () {
    return Page.getViewWithtext(this.ADD_LICENSES);
}get getAddLicenseLbl () {
    return Page.getViewWithtext(this.ENTER_YOUR_DRIVERS_LICENSE_INFO);
}get getDriverLicenseInput () {
    return Page.getInputFieldWithHint(this.DRIVER_LICENSE_NUMBER);
}get getLicExpDate () {
    return $('//android.view.View[@text="'+ this.LIC_EXP_DATE +'"]/following-sibling::android.widget.Spinner')
}get getLicExpDateLbl () {
    return Page.getViewWithtext(this.LIC_EXP_DATE);
}


get getAddParticipantIdTitle () {
    return Page.getViewWithtext(this.ADD_PARTICIPANT_ID);
}get getAddParticipantIdInfoLbl () {
    return Page.getViewWithtext(this.ADD_PARTICIPANT_ID_INFO);
}get getParticipantIdInput () {
    return Page.getInputFieldWithHint(this.PARTICIPANT_ID);
}get getJoinDate () {
    return $('//android.view.View[@text="'+ this.JOIN_DATE +'"]/following-sibling::android.widget.Spinner')
}get getJoinDateLbl () {
    return Page.getViewWithtext(this.JOIN_DATE);
}get getMentorName () {
    return Page.getInputFieldWithHint(this.MENTOR_NAME);
}get getGroupName () {
    return Page.getInputFieldWithHint(this.GROUP_NAME);
}get getSubmitRegistrationBtn () {
    return Page.getButtonwithText(this.SUBMIT_REGISTRATION);
}

async inputPersonalInformationOnCreateAcct(FirstName, LastName, Email, Phone, State, DOB){
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

    if (Email !== undefined && Email !== null && Email !== '') {
        if (Email.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getEmail);
        } else {
            await waitAndSetValue(this.getEmail, Email);
        }
    }

    if (Phone !== undefined && Phone !== null && Phone !== '') {
        if (Phone.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getPhoneNumber);
        } else {
            await waitAndSetValue(this.getPhoneNumber, Phone);
        }
    }

    if (State !== undefined && State !== null && State.toLowerCase() !== 'empty' && Phone !== '') {
        await waitAndClick(this.getState);
        await waitAndClick($(`//android.view.View[@text="${State}"]`));
    }

    if (DOB !== undefined && DOB !== null && DOB.toLowerCase() !== 'empty' && DOB !== '') {
        await waitAndClick(this.getDOB); // open the date picker
        await Page.selectDateFromPicker(DOB);
        await waitAndClick(this.getSetBtn); // confirm the date
    }
}

async verifyPersonalInfoPageElements() {
    await waitAndAssertDisplayed(this.getPersonalInfoTitle())
    await waitAndAssertDisplayed(this.getFirstName())
    await waitAndAssertDisplayed(this.getLastName())
    await waitAndAssertDisplayed(this.getEmail())
    await waitAndAssertDisplayed(this.getPhoneNumber())
    await waitAndAssertDisplayed(this.getState())
    await waitAndAssertDisplayed(this.getDOB())
    await waitAndAssertDisplayed(this.getForwardArrow())
    await waitAndAssertDisplayed(this.getCountryCode())  
}

async verifyLicenseInfoPageElements() {
    await waitAndAssertDisplayed(this.getAddLicenseTitle())
    await waitAndAssertDisplayed(this.getAddLicenseLbl())
    await waitAndAssertDisplayed(this.getDriverLicenseInput())
    await waitAndAssertDisplayed(this.getLicExpDate())
    await waitAndAssertDisplayed(this.getLicExpDateLbl())
}

async inputLicenseInformationOnCreateAcct(DriverLicense, LicenceExpDate){
    if (DriverLicense !== undefined && DriverLicense !== null && DriverLicense !== '') {
        if (DriverLicense.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getDriverLicenseInput);
        } else {
            await waitAndSetValue(this.getDriverLicenseInput, DriverLicense);
        }
    }

    if (LicenceExpDate !== undefined && LicenceExpDate !== null && LicenceExpDate.toLowerCase() !== 'empty' && LicenceExpDate !== '') {
        await waitAndClick(this.getLicExpDate);
        await Page.selectDateFromPicker(LicenceExpDate);
        await waitAndClick(this.getSetBtn);
    }
}
async verifyParticipantInfoPageElements(){
    await waitAndAssertDisplayed(this.getAddParticipantIdTitle())
    await waitAndAssertDisplayed(this.getAddParticipantIdInfoLbl())
    await waitAndAssertDisplayed(this.getParticipantIdInput())
    await waitAndAssertDisplayed(this.getJoinDate())
    await waitAndAssertDisplayed(this.getJoinDateLbl())
    await waitAndAssertDisplayed(this.getMentorName())
    await waitAndAssertDisplayed(this.getGroupName())
    await waitAndAssertDisplayed(this.getSubmitRegistrationBtn())

}
async inputParticipantInformationOnCreateAcct(ParticipantId, JoinDate, MentorName, GroupName){
    if (ParticipantId !== undefined && ParticipantId !== null) {
        if (ParticipantId.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getParticipantIdInput);
        } else {
            await waitAndSetValue(this.getParticipantIdInput, ParticipantId);
        }
    }

    if (JoinDate !== undefined && JoinDate !== null && JoinDate.toLowerCase() !== 'empty') {
        await waitAndClick(this.getJoinDate);
        await Page.selectDateFromPicker(JoinDate);
        await waitAndClick(this.getSetBtn); 
    }

    if (MentorName !== undefined && MentorName !== null) {
        if (MentorName.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getMentorName);
        } else {
            await waitAndSetValue(this.getMentorName, MentorName);
        }
    }

    if (GroupName !== undefined && GroupName !== null) {
        if (GroupName.toLowerCase() === 'empty') {
            await waitAndClearValue(this.getGroupName);
        } else {
            await waitAndSetValue(this.getGroupName, GroupName);
        }
    }
}
}

export default new CreateAccountPage();
	









	
