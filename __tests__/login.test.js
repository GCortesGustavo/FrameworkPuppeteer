import puppeteer from 'puppeteer';
import LoginPage from '../pages/LoginPage';

let browser;
let page;
let loginPage;

describe('Iniciar sesion en la pagina', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
    });

    afterAll(async () => {
        await browser.close();
    });

    it('debera ir a la pagina', async () => {
        await loginPage.visit();
    });

    it('debera llenar los campos', async () => {
        await loginPage.login('Jonh', 'demouser');
    }, 35000);

    it('validar que este en el dashboard', async () => {
        await loginPage.validateLogin();
    }, 35000);
}, 350000);
