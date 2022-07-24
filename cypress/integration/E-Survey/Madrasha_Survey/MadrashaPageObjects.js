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

    
    madrasha_survey(wordNo, phoneNo, mobileNo, altMobileNo, email, website){
        //cy.xpath("//button[@type='submit']").click()
        cy.xpath("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[4]/div[1]/a[1]/button[1]").click()

        //Moulik totho-1 start
        //sadharon totho 1.1 
        cy.xpath("//input[@name='onePointOne.wardNo']").type(wordNo)  //word no
        cy.xpath("//input[@placeholder='8802XXXXXXXX']").type(phoneNo) //Phone
        cy.xpath("//input[@name='onePointOne.mobile']").type(mobileNo)  //mobile No
        cy.xpath("//input[@name='onePointOne.mobileAlternative']").type(altMobileNo)   //alt mobile no
        cy.xpath("//input[@placeholder='test@example.com']").type(email)     //email
        cy.xpath("//input[@placeholder='example.com']").type(website)      //website
        
        //1.2 Institute related information
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.0.isChecked']").check() //checkbox general group
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")
        //cy.xpath("")

    }







}