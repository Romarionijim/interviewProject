import {BasePage} from "./BasePage";

export class AuthorizationPage extends BasePage {

    private emailFieldLocator = '.form-group.text-left.bmd-form-group #email';
    private passwordFieldLocator = '.form-group.text-left.bmd-form-group #password'
    private registerButton = '.form-group.mt-4 #register-button';

    public async fillEmailAndPassword(email: string, password: string) {
        await this.fillText(this.emailFieldLocator, email);
        await this.fillText(this.passwordFieldLocator, password);
    }

    public async clickOnFinishRegisterButton() {
        await this.clickElement(this.registerButton);
    }
}