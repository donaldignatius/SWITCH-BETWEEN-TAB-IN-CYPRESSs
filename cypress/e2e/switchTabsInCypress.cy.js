/// <reference types="cypress"/>
import { switchTabPages } from "../pages/switchTabPages.cy";
describe('Switcb between tab in cypress', () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
    })
    const Login = new switchTabPages();
    it('switch to contact tab', () => {
        cy.fixture('switchTab').then((data) => {
            Login.clickContacUs();
            Login.enterFirstName(data.firstName);
            Login.enterLastName(data.lastName);
            Login.enterEmail(data.emailAddress);
            Login.enterComment(data.comment);
        })
    })

    //LOGIN PORTAL
    it('switch to login tab', () => {
        cy.fixture('switchTab').then((data) => {
            Login.clickLoginPortal()
            Login.enterUsername(data.username)
            Login.enterPassword(data.password)
            Login.clickLoginButtn()
        })
    })
})