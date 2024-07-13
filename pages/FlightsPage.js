import BasePage from "./BasePage";

export default class FlightsPage extends BasePage {
    constructor() {
        super();
        this.inputs = {
            from: "//input[@name='from' and @id='autocomplete']",
            to: "//input[@name='to' and @id='autocomplete2']",
            date: "//input[@class='depart form-control', and @id='departure']", 
            
            passenger: "//a[@class='dropdown-toggle dropdown-btn waves-effect' and @role='button']",
            search: "//button[@id='flights-search']",
            firstOption: ".autocomplete-result[data-index='0']",
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]" 

        }
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
