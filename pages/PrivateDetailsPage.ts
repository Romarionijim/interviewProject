import {BasePage} from "./BasePage";

export class PrivateDetailsPage extends BasePage {
    private firstNameFieldLocator = '.form-tab #firstname';
    private idFieldLocator = '.form-tab #personalId';
    private lastNameFieldLocator = '.form-tab #lastname';
    private cellPhoneFieldLocator = '.form-tab #phone';
    private dobFieldLocator = '.form-tab #dateOfBirth';
    private maleGenderOptionLocator = '.gender.male.h5.col-4.py-2.px-0.box-select';
    private termsAndConditionsCheckBox = '.form-tab #agreeTerms';


    public async fillPrivateDetails(firstname: string, lastName: string, id: string, cellphone: string, dob: string) {
        await this.fillText(this.firstNameFieldLocator, firstname);
        await this.fillText(this.lastNameFieldLocator, lastName);
        await this.fillText(this.idFieldLocator, id);
        await this.fillText(this.cellPhoneFieldLocator, cellphone);
        await this.fillText(this.dobFieldLocator, dob);
        await this.clickElement(this.maleGenderOptionLocator);
    }


    public async checkTermsAndProceed() {
        await this.clickElement(this.termsAndConditionsCheckBox);
        await this.clickOnProceed()
    }


}