import { Given} from '@wdio/cucumber-framework';
import CreateAccountPage from '../pageobjects/createAccount.page';
import UpdateAccountPage from '../pageobjects/updateUserDetails.page';
import Page from '../pageobjects/page';

Given(/^I see the ErrorMessage on the screen$/, async (dataTable) => {
    await Page.verifyFieldsExistInPages(dataTable, [CreateAccountPage, UpdateAccountPage]);
    
for (const [field, errorKey] of dataTable.raw()) {
    let ele = null;
    let pageFound = null;

    for (const page of pages) {
        if (page.constants?.[field]) {
            pageFound = page;
            ele = Page.getInputFieldWithHint(page.constants[field]);
            break;
        }
    }

    if (!pageFound) {
        throw new Error(`Field constant "${field}" not found in any known page`);
    }

    const errorElement = pageFound.getInlineErrMsg(ele, pageFound.constants[errorKey]);
    await waitAndAssertDisplayed(errorElement);
}
})

Given(/^I see the (.*) on the alert$/, async (message) => {
    await CreateAccountPage.getMsg(message);
})




