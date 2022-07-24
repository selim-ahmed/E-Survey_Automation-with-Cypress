export class objectsForMadrasha{

    navigate(){

        cy.visit("http://103.4.145.251:3028/")
        cy.viewport(1536, 960)
        cy.xpath("//button[@role='button']").click()

    }

    login(username, pass){
        cy.xpath("//input[@placeholder='Enter Your Username']").type(username)
        cy.xpath("//input[@placeholder='Enter Your Password']").type(pass)
        cy.xpath("//button[@type='submit']").click()
        //cy.wait(3000) 
    }

    madrasha_survey(){
        //cy.xpath("//button[@type='submit']").click()
        cy.xpath("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[4]/div[1]/a[1]/button[1]").click()

        //sadharon totho 1.1 
        // cy.xpath("")
        // cy.xpath("")
        // cy.xpath("")
        // cy.xpath("")
        // cy.xpath("")
        // cy.xpath("")
        // cy.xpath("")
    }







}