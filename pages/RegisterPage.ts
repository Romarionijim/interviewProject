import {BasePage} from "./BasePage";

export class RegisterPage extends BasePage {

    private residenceLocator = '.form-group.bmd-form-group #residence';
    private yesIHaveCarLocator = '.row.mt-2.mx-0 #hasCarYes';
    private checkboxOptionsLocator = '//div[@class="my-2"]/label';

    public async fillResidence(residence:string) {
        await this.fillText(this.residenceLocator, residence);
    }

    public async clickOnYesIHaveACar() {
        await this.clickElement(this.yesIHaveCarLocator);
    }

    public async chooseCheckBoxOptionByText(text:string) {
        const checkboxList = await this.page.$$(this.checkboxOptionsLocator);
        for (let checkboxElement of checkboxList) {
            const checkboxText = await checkboxElement.innerText();
            if (checkboxText === text) {
                await checkboxElement.click();
                return;
            }
        }
    }
}