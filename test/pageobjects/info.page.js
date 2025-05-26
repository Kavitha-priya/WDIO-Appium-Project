import Page from './page';
const BasePage = require('./base.page');

class InfoPage extends Page {

    
    get getParticipantImage () {
        return $('//*[@class="android.widget.Image"][not(@text="more")]');
    }

    getParticipantName (name) {
        return $('//android.view.View[@text="PARTICIPANT NAME"]//preceding-sibling::android.view.View[@text="'+ name +'"]');
    }

    getLicenseNumber (number){
        return $('//android.view.View[@text="DRIVERS LICENSE"]//following-sibling::android.view.View[contains(@text,"'+ number +'")]');
    }

    getStateInfo (number){
        return $('//android.view.View[@text="DRIVERS LICENSE"]//following-sibling::android.view.View[contains(@text,"'+ number +'")]');
    }

    getParticipantId (number){
        return $('//android.view.View[@text="PARTICIPANT ID"]//following-sibling::android.view.View[contains(@text,"'+ number +'")]');
    }

    getLicenseExpDate (number){
        return $('//android.view.View[@text="PARTICIPANT ID"]//following-sibling::android.view.View[contains(@text,"'+ number +'")]');
    }

    get getInfoTab () {
        return $('//android.view.View[@resource-id="tab-t0-0"]')
    }

    async verifyInfoPageElements(){
        await waitAndAssertDisplayed(this.getParticipantImage())
        await waitAndAssertDisplayed(this.getParticipantName())
        await waitAndAssertDisplayed(this.getLicenseNumber())
        await waitAndAssertDisplayed(this.getStateInfo())
        await waitAndAssertDisplayed(this.getParticipantId())
        await waitAndAssertDisplayed(this.getLicenseExpDate())

    }
}
export default new InfoPage();