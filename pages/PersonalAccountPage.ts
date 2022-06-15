import {BasePage} from "./BasePage";
import {expect} from "@playwright/test";

export class PersonalAccountPage extends  BasePage {

    private accountConfirmationHeader = '.shrinkable-header.header-bg-volunteering .font-weight-bold';

    public async validateAccountPageHeader(header:string) {
        const headerText = await this.page.locator(this.accountConfirmationHeader);
        expect(await headerText.innerText()).toContain(header);
    }
}