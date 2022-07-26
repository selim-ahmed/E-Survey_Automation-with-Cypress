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

    
    madrashaSurvey_moulik_totho_1(wordNo, phoneNo, mobileNo, altMobileNo, email, website,
        distance, NumberOfBranch, BranchName1, BranchName2, MaleTeacher, FemaleTeacher, MaleEmp,
        FemaleEmp, estDate, ExpDate, totalMember, femaleMember,totalCommitteeMeeting,totalPTAMeeting){
        //cy.xpath("//button[@type='submit']").click()
        cy.xpath("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[2]/div[1]/a[1]/button[1]").click()

    //Moulik totho-1 start
        //sadharon totho 1.1 
        cy.xpath("//input[@name='onePointOne.wardNo']").clear().type(wordNo)  //word no
        cy.xpath("//input[@placeholder='8802XXXXXXXX']").clear().type(phoneNo) //Phone
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
        
        
        cy.xpath("//input[@name='onePointThree.nearestSimilarInstituteDistanceKm']").clear().type(distance)
    //section 1.3.8 Branch radio button Y/N
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasAnyBranch']").check()
        //cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasAnyBranch']")
        
        cy.xpath("//input[@name='onePointThree.noOfBranch']").clear().type(NumberOfBranch)
        cy.xpath("//input[@name='onePointThree.instituteBranch.1.branchNameBn']").clear().type(BranchName1)
        cy.xpath("//input[@name='onePointThree.instituteBranch.2.branchNameBn']").clear().type(BranchName2)
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasDoubleShift']").check()          //section 1.3.10 yes
        //cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasDoubleShift']").check()          //section 1.3.10 no
        cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasOwnCampus']").check()             //Section 1.3.11 yes
        //cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasOwnCampus']").check()              //Section 1.3.11 no
        //cy.xpath("//span[contains(text(),'হ্যাঁ')]//input[@name='onePointThree.hasOtherInstituteInThisCampus']").check() //radiobutton yes
        cy.xpath("//span[contains(text(),'না')]//input[@name='onePointThree.hasOtherInstituteInThisCampus']").check()  //radiobutton no
        //cy.xpath("//select[@name='onePointThree.otherInstituteTypeId']")    // section 1.3.13 dropdown
        cy.xpath("//select[@name='onePointThree.isVocationalMpo']").select('NOT_APPLICABLE').should('have.value','NOT_APPLICABLE')  // section 1.3.15 dropdown
        cy.xpath("//select[@name='onePointThree.instituteHeadType']").select('APPOINTED').should('have.value','APPOINTED')   // section 1.3.16 dropdown
        cy.xpath("//select[@name='onePointThree.hasNightGuard']").select('YES').should('have.value','YES')  // section 1.3.17 dropdown
        
    //section 1.3.18 
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
            //cy.xpath("")
        
    //Section 1.3.21
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalTeacherMale']").clear().type(MaleTeacher)
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalTeacherFemale']").clear().type(FemaleTeacher)
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalStaffMale']").clear().type(MaleEmp)
        cy.xpath("//input[@name='onePointThree.totalTeacherStaff.totalStaffFemale']").clear().type(FemaleEmp)
        
    // Section 1.4 Committee related information
        cy.xpath("//select[@name='onePointFour.schoolCommittee.committeeTypeId']").select('9').should('have.value','9')  //dropdown
        cy.xpath("//input[@name='onePointFour.schoolCommittee.establishmentDate']").clear().type(estDate) //date
        cy.xpath("//input[@name='onePointFour.schoolCommittee.expirationDate']").clear().type(ExpDate)    //date
        cy.xpath("//input[@name='onePointFour.schoolCommittee.committeeNoOfMemberTotal']").clear().type(totalMember) // committee member total 
        cy.xpath("//input[@name='onePointFour.schoolCommittee.committeeNoOfMemberFemale']").clear().type(femaleMember) // committee member female

        //1.4.5 & 1.4.6 Section
        cy.xpath("//input[@name='onePointFour.noOfMeetingConductedByManagingCommittee']").clear().type(totalCommitteeMeeting)
        cy.xpath("//input[@name='onePointFour.noOfMeetingConductedByPta']").clear().type(totalPTAMeeting)
        
        // section 1.4.7 managing committee meeting
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.0.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.1.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.2.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.3.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.4.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.5.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.6.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.7.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.8.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.9.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.10.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.11.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.12.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.13.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.14.isChecked']").check()
        cy.xpath("//input[@name='onePointFour.managingCommitteeDiscussionTopics.15.isChecked']").check()
        
         // section 1.4.8 PTA meeting
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.0.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.1.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.2.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.3.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.4.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.5.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.6.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.7.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.8.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.9.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.10.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.11.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.12.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.13.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.14.isChecked']").check()
         cy.xpath("//input[@name='onePointFour.ptaMeetingDiscussionAndDecisions.15.isChecked']").check()
         
         //cy.xpath("")
         //cy.xpath("")
    }
}