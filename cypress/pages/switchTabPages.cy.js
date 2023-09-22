export class switchTabPages {
    //CONTACTUS
    tabClickContactUs = 'a#contact-us h1'
    tabEnterFirstName = 'form#contact_form > input[name=first_name]'
    tabEnterLastName = 'form#contact_form > input[name=last_name]'
    tabEnterEmail = 'form#contact_form > input[name=email]'
    tabEnterComment = 'form#contact_form > textarea[name=message]'

    //LOGIN
    tabLoginPortal = 'a#login-portal h1'
    tabEnterUsername = '[placeholder=Username]'
    tabEnterPassword = '[placeholder=Password]'
    tabClickLoginButtn = 'button#login-button'



    clickContacUs() {
        cy.get('#contact-us').invoke('removeAttr', 'target')
        cy.get(this.tabClickContactUs).click()
    }
    enterFirstName(firstName) {
        cy.get(this.tabEnterFirstName).type(firstName)
    }
    enterLastName(lastName) {
        cy.get(this.tabEnterLastName).type(lastName)
    }
    enterEmail(email) {
        cy.get(this.tabEnterEmail).type(email)
    }
    enterComment(comment) {
        cy.get(this.tabEnterComment).type(comment)
    }

    //LOGN PORTAL
    clickLoginPortal() {
        cy.get('a#login-portal').invoke("removeAttr" , "target")
        cy.get(this.tabLoginPortal).click()
    }
    enterUsername(username) {
        cy.get(this.tabEnterUsername).type(username)
    }
    enterPassword(password) {
        cy.get(this.tabEnterPassword).type(password)
    }
    clickLoginButtn() {
        cy.get(this.tabClickLoginButtn).click()
    }
}