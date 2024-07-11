import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.navBar = '#fadein > header';
        this.inputEmail = '#email';
        this.inputPassword = '#password';
        this.submitButton = '#submitBTN';
        this.loginPageText = '#fadein > main > div > div > div > div.pt-3 > div > div > div > div.w-100.text-center.mt-3 > h6 > strong';
    }

    async visit() {
        await page.goto('https://phptravels.net/login');
        await page.waitForSelector(this.navBar);
        const url = this.getUrl();
        console.log('Visitando URL ', url);
    }

    async login(email, password) {
        await page.waitForSelector(this.inputEmail);
        await this.type(this.inputEmail, email);
        await this.type(this.inputPassword, password);
        await this.click(this.submitButton);
    }

    async validateLogin() {
        await page.waitForSelector(this.loginPageText);
        await page.waitForSelector(this.navBar);
    }
}
