import { Given} from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

Given(/^I am on the Login page$/, async () => {
    await LoginPage.verifyLoginPageElements();
});

Given(/^I click the Create an Account link$/, async () => {
    await LoginPage.createAccountLnk().click;
});

Given(/^I login to the app with (.*) and (.*)$/, async (UserName, Password) => {
    await LoginPage.doLogin(UserName, Password);
});
