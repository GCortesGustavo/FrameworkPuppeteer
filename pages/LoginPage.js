// import BasePage from "./BasePage";

// export default class LoginPage extends BasePage {

//     constructor() {
//         super()
//         this.navBar = '//*[@id="app"]/div/section[3]/div/div[2]/div'
//         this.inputEmail = '//*[@id="login"]/div[1]/input'
//         this.inputPassword = '//*[@id="login"]/div[2]/input'
//         this.submitButton = '//*[@id="app"]/div/section[3]/div/div[2]/div/nav/button[2]'
//         this.loginPageText = '//*[@id="app"]/div/header/div/div[2]/ul/div/button/span[2]'
//     }

//     async visit() {
//         await page.goto('https://demo.testim.io/login')
//         await page.waitForSelector(this.navBar)
//         const url = this.getUrl()

//         console.log('Visitando URL ', url)
//     }

//     async login(email, password) {
//         await page.waitForSelector(this.inputEmail)
//         await this.type(this.inputEmail, email)
//         await this.type(this.inputPassword, password)
//         await this.click(this.submitButton)
//     }

//     async validateLogin() {
//         await page.waitForSelector(this.loginPageText)
//         await page.waitForSelector(this.navBar)
//     }

// }

import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

    constructor() {
        super()
        this.navBar = '//*[@id="app"]/div/section[3]/div/div[2]/div'
        this.inputEmail = '//*[@id="login"]/div[1]/input'
        this.inputPassword = '//*[@id="login"]/div[2]/input'
        this.submitButton = '//*[@id="app"]/div/section[3]/div/div[2]/div/nav/button[2]'
        this.loginPageText = '//*[@id="app"]/div/header/div/div[2]/ul/div/button/span[2]'
    }

    async visit() {
        await page.goto('https://demo.testim.io/login')
        await page.waitForSelector(this.navBar)
        const url = this.getUrl()

        console.log('Visitando URL ', url)
    }

    async login(email, password) {
        await page.waitForXPath(this.inputEmail)
        await this.typeXPath(this.inputEmail, email)
        await this.typeXPath(this.inputPassword, password)
        await this.clickXPath(this.submitButton)
    }

    async validateLogin() {
        await page.waitForXPath(this.loginPageText)
        await page.waitForXPath(this.navBar)
    }

    // Método helper para escribir usando XPath
    async typeXPath(xpath, text) {
        const elements = await page.$x(xpath);
        if (elements.length > 0) {
            await elements[0].type(text);
        } else {
            throw new Error(`XPath ${xpath} not found`);
        }
    }

    // Método helper para hacer click usando XPath
    async clickXPath(xpath) {
        const elements = await page.$x(xpath);
        if (elements.length > 0) {
            await elements[0].click();
        } else {
            throw new Error(`XPath ${xpath} not found`);
        }
    }
}
