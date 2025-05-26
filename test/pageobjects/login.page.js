import Page from './page';
const BasePage = require('./base.page');

class LoginPage extends Page {

    LEAF_ORG_TXT = 'LeafOrg'
    LOGIN_OR_CREATE_ACCT_TXT = 'Login Or Create Your New Account'
    EMAIL = 'Email'
    PWD = 'Password'
    LOGIN = 'LOGIN'
    FORGOT_PWD = 'Forgot password?'
    CREATE_ACCT = 'Create an Account'

    get inputEmail () {
        return Page.getInputFieldWithHint(this.EMAIL);
    }

    get inputPassword () {
        return Page.getInputFieldWithHint(this.PWD);
    }

    get btnLogin () {
        return Page.getButtonwithText(this.LOGIN);
    }

    get forgotPwdLnk () {
        return Page.getTextViewWithtext(this.FORGOT_PWD);
    }

    get createAccountLnk () {
        return Page.getTextViewWithtext(this.CREATE_ACCT);
    }

    get LeafOrgTxt () {
        return Page.getViewWithtext(this.LEAF_ORG_TXT);
    }

    get LoginOrCreateYourNewAccountTxt () {
        return Page.getViewWithtext(this.LOGIN_OR_CREATE_ACCT_TXT);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

    async verifyLoginPageElements () {
        await waitAndAssertDisplayed(this.inputEmail())
        await waitAndAssertDisplayed(this.inputPassword())
        await waitAndAssertDisplayed(this.btnLogin())
        await waitAndAssertDisplayed(this.forgotPwdLnk())
        await waitAndAssertDisplayed(this.createAccountLnk())
        await waitAndAssertDisplayed(this.LeafOrgTxt())
        await waitAndAssertDisplayed(this.LoginOrCreateYourNewAccountTxt())
    }

    async doLogin(username, password) {
        await waitAndSetValue(this.inputEmail, username);
        await waitAndSetValue(this.inputPassword, password);
        await waitAndClick(this.btnLogin);

    }
}

export default new LoginPage();