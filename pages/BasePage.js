class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async type(locator, text) {
        await locator.fill(text);
    }

    async waitForElement(locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    async getTitle() {
        return await this.page.title();
    }

    async getURL() {
        return this.page.url();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async press(locator, key) {
        await locator.press(key);
    }

}

module.exports = BasePage;