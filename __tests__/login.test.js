import LoginPage from '../pages/LoginPage';

let page;
let loginPage;

describe('Iniciar sesion en la pagina', () => {
    beforeAll(async () => {
        loginPage = new LoginPage(page);
    });

    it('debera ir a la pagina', async () => {
        await loginPage.visit();
    }, 350000);

    it('debera llenar los campos', async () => {
        await loginPage.login('gustiplatzi934@gmail.com', 'puppeteer2024');
    }, 350000);

    it('validar que este en el dashboard', async () => {
        await loginPage.validateLogin();
    }, 35000);
}, 350000);
