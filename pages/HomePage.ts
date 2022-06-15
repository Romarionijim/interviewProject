import {BasePage} from "./BasePage";

export class HomePage extends BasePage {
    private registerLocator = '#welcome-container-1 #register';


    public async clickOnRegister() {
        await this.clickElement(this.registerLocator);
    }

}