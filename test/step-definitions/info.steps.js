import { Given} from '@wdio/cucumber-framework';
import InfoPage from '../pageobjects/info.page';

Given(/^I am on Info page$/, async () => {
    await InfoPage.verifyInfoPageElements();
});

Given(/^I click on Info tab$/, async () => {
    await waitAndClick(InfoPage.getInfoTab());
});
