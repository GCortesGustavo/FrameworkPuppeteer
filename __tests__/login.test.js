import LoginPage from "../pages/LoginPage";

let loginPage


describe('Iniciar sesion en la pagina', () => {
    beforeAll(async () => {
        loginPage = new LoginPage()
    })

    it('debera ir a la pagina', async () => {
        await loginPage.visit()
    })

    it('debera llenar los campos', async () => {
        await loginPage.login('Jonh', 'demouser')
    }, 35000)


    it('validar que este en el dashboard', async () => {
        await loginPage.validateLogin()
    }, 35000)
}, 350000)