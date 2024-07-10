import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.navBar = '#app > div > section.Login__login___3HOEm > div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0';
        this.inputEmail = '#login > div:nth-child(1) > input';
        this.inputPassword = '#login > div:nth-child(2) > input';
        this.submitButton = '#app > div > section:nth-child(3) > div > div:nth-child(2) > div > nav > button:nth-child(2)';
        this.loginPageText = '#app > div > header > div > div:nth-child(2) > ul > div > button > span:nth-child(1)';
    }

    async visit() {
        await page.goto('https://demo.testim.io/login');
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
