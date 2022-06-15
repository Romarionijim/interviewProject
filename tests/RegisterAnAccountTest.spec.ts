import {test} from "@playwright/test";
import {BasePage} from "../pages/BasePage";
import {HomePage} from "../pages/HomePage";
import {PersonalAccountPage} from "../pages/PersonalAccountPage";
import {PrivateDetailsPage} from "../pages/PrivateDetailsPage";
import {RegisterPage} from "../pages/RegisterPage";
import {StudentPage} from "../pages/StudentPage";
import {AuthorizationPage} from "../pages/AuthorizationPage";
import {ApplicationUrl} from "../enums/ApplicationUrl";

test.describe('register an account for students aid website', async () => {
    let basePage: BasePage;
    let homePage: HomePage;
    let personalAccountPage: PersonalAccountPage;
    let privateDetailsPage: PrivateDetailsPage;
    let registerPage: RegisterPage;
    let studentPage: StudentPage;
    let authorizationPage: AuthorizationPage;

    test.beforeEach(async ({page}) => {
        basePage = new BasePage(page);
        homePage = new HomePage(page);
        personalAccountPage = new PersonalAccountPage(page);
        privateDetailsPage = new PrivateDetailsPage(page);
        registerPage = new RegisterPage(page);
        studentPage = new StudentPage(page);
        authorizationPage = new AuthorizationPage(page);
    })

    test.afterEach(async ({context}) => {
        await context.clearCookies()
    })

    test('register an account and submit then validate account header', async () => {
        await test.step('go to http://students-aid.org:9222/platforms/nuis/ website', async () => {
            await basePage.goTotUrl(ApplicationUrl.STUDENT_AID);
        })

        await test.step('click on register', async () => {
            await homePage.clickOnRegister();
        })

        await test.step('fill private details', async () => {
            await privateDetailsPage.fillPrivateDetails('Romario', 'Nijim', '123789257', '0509225101', '01/01/1996')
        })

        await test.step('check terms and conditions and proceed', async () => {
            await privateDetailsPage.checkTermsAndProceed();
        })

        await test.step('choose Im not a student', async () => {
            await studentPage.chooseYesOrNoAndProceed();
        })

        await test.step('fill your residency and if you have a car', async () => {
            await registerPage.fillResidence('נצרת');
            await registerPage.clickOnYesIHaveACar();
        })

        await test.step('mark relevant checkbox options', async () => {
            await registerPage.chooseCheckBoxOptionByText('עזרה מקוונת בלימודים וסדנאות');
            await registerPage.chooseCheckBoxOptionByText('א');
            await registerPage.chooseCheckBoxOptionByText('בוקר');
            await registerPage.chooseCheckBoxOptionByText('עברית');
        })

        await test.step('clickOnProceed', async () => {
            await basePage.clickOnProceed();
        })

        await test.step('fill email and password then click on submit', async () => {
            await authorizationPage.fillEmailAndPassword('automation123@gmail.com', '123456')
            await authorizationPage.clickOnFinishRegisterButton();
        })

        await test.step('validate header after register',async () => {
            await personalAccountPage.validateAccountPageHeader('היי romario,')
        })
    })
})