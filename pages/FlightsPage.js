import BasePage from "./BasePage";

export default class FlightsPage extends BasePage {
    constructor() {
        super();
        this.mainDiv = "#fadein > div",
        this.inputs = {
            from: "//input[@name='from' and @id='autocomplete']",
            to: "//input[@name='to' and @id='autocomplete2']",
            date: "//input[@class='depart form-control', and @id='departure']",            
            passengers: "//a[@class='dropdown-toggle dropdown-btn waves-effect' and @role='button']",
            search: "//button[@id='flights-search']",
            firstOption: ".autocomplete-result[data-index='0']",
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]" 

        }
        }

    async validatePage() {

        await page.waitForNavigation({waitUntil: "networkidle2"})

        await page.waitForSelector(this.mainDiv)
        await page.waitForSelector(this.inputs.from)
        await page.waitForSelector(this.inputs.to)
        await page.waitForSelector(this.inputs.date)
        await page.waitForSelector(this.inputs.passenger)
        await page.waitForSelector(this.inputs.search)


    }

    async selectFlight(from, to, date, passengers) {

        await this.type(this.inputs.from, from)

        await this.click(this.inputs.firstOption)

        await this.type(this.inputs.to, to)
        await this.click(this.inputs.firstOption)
        
        await this.type(this.inputs.date, date)

        if(passengers !==1) {
            await this.click(this.inputs.passengers)

            for(let i = 0; i < passengers -1; i++) {
                await this.click(this.inputs.moreAdultsPassengers)
            }
        }


        await this.click(this.inputs.search)
    }

    // async validateLogin() {
        
    // }
}
