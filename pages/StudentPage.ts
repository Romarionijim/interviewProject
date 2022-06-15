import {BasePage} from "./BasePage";

export class StudentPage extends BasePage {

    private noImNotStudentOption = '.form-group #isStudentYes';

    public async chooseYesOrNoAndProceed() {
        await this.clickElement(this.noImNotStudentOption);
        await this.clickOnProceed();
    }
}