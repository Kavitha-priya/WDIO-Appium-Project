class BasePage {
    async waitAndClick(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();

    }

    async waitAndSetValue(element, value) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.setValue(value);
    }

   async waitAndClearValue(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.clearValue();
    }

    async swipeUp() {
        await driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1500 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 500, y: 300 } },
            { action: 'release' }
        ]);
    }

    async waitAndAssertDisplayed(element) {
    await element.waitForDisplayed({ timeout: 5000 });
    await expect(element).toBeDisplayed();
}
}

module.exports = new BasePage();