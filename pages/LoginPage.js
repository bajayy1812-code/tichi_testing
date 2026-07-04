const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.emailInput = page.locator('input[type="email"]');
        this.continueButton = page.locator('button[type="submit"]');
    }

    async navigate() {
        await super.navigate('https://tichi-app-webapp-stage.web.app/login');
    }

    async enterEmail(email) {
        await this.type(this.emailInput, email);
    }

    async clickContinue() {
        await this.click(this.continueButton);
    }

    async login(email) {
        await this.enterEmail(email);
        await this.clickContinue();
    }

    async verifyPageLoaded() {
        await this.waitForElement(this.emailInput);
    }

}

module.exports = LoginPage;