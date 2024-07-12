import BasePage from "../pages/BasePage";

export default class NavBar extends BasePage{

    constructor(){
        super()

        this.navBar = "#navbarSupportedContent"
        this.menu = {
            flights: "//a[normalize-space() = 'Flights']",
            hotels: "//a[normalize-space() = 'Hotels']",
            tours: "//a[normalize-space() = 'Tours']",
        }
    }

    async validateNavBarIsPresent () {
        await page.waitForSelector(this.navBar)
        await page.waitForSelector(this.menu.home)
        await page.waitForSelector(this.menu.hotels)
        await page.waitForSelector(this.menu.tours)
    }

    async selectMenuItem(menuItem){

        await this.click(this.menu[menuItem])
    }
}