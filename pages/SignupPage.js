const BasePage = require('./BasePage');

class SignupPage extends BasePage {

    constructor(page) {
        super(page);

        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.mobile = page.locator('input[name="mobile"]');
        this.email = page.locator('input[type="email"]');
        this.password = page.locator('input[type="password"]').first();
        this.confirmPassword = page.locator('input[type="password"]').last();
        this.checkbox = page.locator('input[type="checkbox"]');
        this.signupButton = page.locator('button[type="submit"]');
    }

    async navigate() {
        await super.navigate('https://tichi-app-webapp-stage.web.app/signup');
    }

    async signUp(firstName, lastName, mobile, email, password, confirmPassword) {

        await this.type(this.firstName, firstName);
        await this.type(this.lastName, lastName);
        await this.type(this.mobile, mobile);
        await this.type(this.email, email);
        await this.type(this.password, password);
        await this.type(this.confirmPassword, confirmPassword);

        await this.click(this.checkbox);
        await this.click(this.signupButton);
    }

}

module.exports = SignupPage;