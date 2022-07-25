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

    
    madrashaSurvey_moulik_totho_1(wordNo, phoneNo, mobileNo, altMobileNo, email, website){
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
        cy.xpath("//input[@name='onePointThree.noOfBranch']").type()
        cy.xpath("//input[@name='onePointThree.instituteBranch.1.branchNameBn']").type()
        cy.xpath("//input[@name='onePointThree.instituteBranch.2.branchNameBn']").type()
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasDoubleShift']").check()          //section 1.3.10 yes
        cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasDoubleShift']").check()          //section 1.3.10 no
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasOwnCampus']")            //Section 1.3.11 yes
        cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasOwnCampus']")             //Section 1.3.11 no
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasOtherInstituteInThisCampus']")
        cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasOtherInstituteInThisCampus']")
        cy.xpath("//select[@name='onePointThree.otherInstituteTypeId']")    // section 1.3.13
        cy.xpath("//select[@name='onePointThree.isVocationalMpo']")         // section 1.3.15
        cy.xpath("//select[@name='onePointThree.instituteHeadType']")       // section 1.3.16
        cy.xpath("//select[@name='onePointThree.hasNightGuard']")           // section 1.3.17
        
    //section 1.3.18 
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
        
    //Section 1.3.21
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalTeacherMale']")
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalTeacherFemale']")
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalStaffMale']")
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalStaffFemale']")
        
    // Section 1.4 Committee related information
        cy.xpath("//select[@name='onePointFour.schoolCommittee.committeeTypeId']")  //dropdown
        cy.xpath("//input[@name='onePointFour.schoolCommittee.establishmentDate']") //date
        cy.xpath("//input[@name='onePointFour.schoolCommittee.expirationDate']")    //date
        cy.xpath("//input[@name='onePointFour.schoolCommittee.committeeNoOfMemberTotal']") // committee member total 
        cy.xpath("//input[@name='onePointFour.schoolCommittee.committeeNoOfMemberFemale']") // committee member female
        
        // section 1.4.7 managing committee meeting
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.0.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.1.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.2.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.3.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.4.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.5.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.6.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.7.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.8.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.9.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.10.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.11.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.12.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.13.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.14.isChecked']")
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.15.isChecked']")
        
         // section 1.4.8 PTA meeting
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.0.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.1.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.2.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.3.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.4.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.5.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.6.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.7.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.8.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.9.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.10.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.11.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.12.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.13.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.14.isChecked']")
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.15.isChecked']")
         
         
         //cy.xpath("")
         //cy.xpath("")


    }
}