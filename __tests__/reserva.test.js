import LoginPage from '../pages/LoginPage';
import FlightsPage from '../pages/FlightsPage';
import NavBar from '../components/NavBar';


let loginPage;
let flightsPage;
let navbar

describe('Realizar Reserva', () => {
    beforeAll(async () => {
        loginPage = new LoginPage();
        flightsPage = new FlightsPage();
        navbar = new NavBar();
    });

    it('debera ir a la pagina e iniciar sesión', async () => {
        await loginPage.visit();
        await loginPage.login('gustiplatzi934@gmail.com', 'puppeteer2024');
    }, 350000);


    it('validar que este en el dashboard', async () => {
        await loginPage.validateLogin();
    }, 35000);

    it('Navegar hacia la página de vuelos', async () => {

        await navbar.validateNavBarIsPresent();

        await navbar.selectMenuItem("flights")
    }, 35000);

    it('Validar y seleccionar vuelos', async () => {

        await flightsPage.selectFlight("Mexico", "Paris", "20-11-2024", 5)
    }, 35000);

    // it('Validar el vuelo buscado', async () => {

    //     await navbar.selectFlight("Mexico", "Paris", "20-11-2024", 5)
    // }, 35000);

}, 350000);
