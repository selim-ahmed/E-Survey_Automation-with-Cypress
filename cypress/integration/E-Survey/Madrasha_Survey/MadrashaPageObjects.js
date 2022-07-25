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
        cy.xpath("//input[@name='onePointOne.mobile']").clear().type(mobileNo)  //mobile No
        cy.xpath("//input[@name='onePointOne.mobileAlternative']").clear().type(altMobileNo)   //alt mobile no
        cy.xpath("//input[@placeholder='test@example.com']").clear().type(email)     //email
        cy.xpath("//input[@placeholder='example.com']").clear().type(website)      //website
        
        //1.2 Institute related information
        //Institute Groups
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.0.isChecked']").check() //checkbox general group
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.1.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.2.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.3.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.4.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.5.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.6.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.7.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteSchoolClassGroups.8.isChecked']").check()
        
        //Type of Technical Branch affiliated (if applicable):  
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.0.isChecked']").check()              //checkbox
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.1.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.2.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.3.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.4.isChecked']").check()
        cy.xpath("//input[@name='onePointTwo.instituteExamPrograms.5.isChecked']").check()
        
        // 1.3 Management Related Information
        cy.xpath("//select[@name='onePointThree.instituteAreaStatusId']").select('7').should('have.value', '7')     //Data selection from Dropdown 
        // 1.3.6 Type of communication system with administrative units radio button
        //cy.xpath("//input[@value='EXCELLENT']")             //Excellent radio button
        cy.xpath("//input[@value='GOOD']").check()                  //Good radio button
        //cy.xpath("//input[@value='INACCESSIBLE']")          //Inaccessable radio button
        
        cy.xpath("//input[@name='onePointThree.nearestSimilarInstituteDistanceKm']").type(distance)
        //Branch radio button Y/N
        cy.xpath("//input[@name='onePointThree.nearestSimilarInstituteDistanceKm']")
        //cy.xpath("//input[@name='onePointThree.nearestSimilarInstituteDistanceKm']")
        //cy.xpath("")


    }







}