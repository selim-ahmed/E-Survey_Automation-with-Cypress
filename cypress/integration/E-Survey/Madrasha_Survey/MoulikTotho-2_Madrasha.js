export class MoulikTotho_2{

    madrashaSurvey_moulik_totho_2(){
    //Section 1.5
        //1.5.1 Land related information
    // cy.xpath("")
    // cy.xpath("")
    // cy.xpath("")
    // cy.xpath("")
    // cy.xpath("")    

    // section 1.5.2
    cy.xpath("//input[@name='onePointFive.inPremiseTotalLand']")
    cy.xpath("//input[@name='onePointFive.outPremiseTotalLand']")
    //section 1.5.3
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.0.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.1.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.2.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.3.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.4.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.5.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.6.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.7.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.8.landArea']")
    cy.xpath("//input[@name='onePointFive.instituteLandSegmentations.9.landArea']")

    //Section 1.6 
    cy.xpath("//input[@name='onePointSix.yearOfTheOldestBuildingDevelopment']")
    cy.xpath("//input[@name='onePointSix.yearOfTheNewestBuildingDevelopment']")
    // section 1.6.3 checkbox start
    cy.xpath("//input[@name='onePointSix.buildingConstructionFundSources.0.isFunded']")
    cy.xpath("//input[@name='onePointSix.buildingConstructionFundSources.1.isFunded']")
    cy.xpath("//input[@name='onePointSix.buildingConstructionFundSources.2.isFunded']")
    cy.xpath("//input[@name='onePointSix.buildingConstructionFundSources.3.isFunded']")
    cy.xpath("//input[@name='onePointSix.buildingConstructionFundSources.4.isFunded']")  // checkbox end
    cy.xpath("//input[@name='onePointSix.newestBuildingAreaSqft']")
    cy.xpath("//input[@name='onePointSix.allBuildingAreaSqft']")
    //section  1.6.6
    cy.xpath("//label[contains(text(),'নিজস্ব জমি')]//input[@name='onePointSix.buildingOwnershipTypeId']")
    cy.xpath("//label[contains(text(),'ভাড়া বাড়ি')]//input[@name='onePointSix.buildingOwnershipTypeId']")
    cy.xpath("//label[contains(text(),'উভয়')]//input[@name='onePointSix.buildingOwnershipTypeId']")
    // section 1.6.7 
    // Building No 1
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.0.instituteBuildingName']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.0.noOfFloorFoundation']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.0.noOfFloorCompleted']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.0.yearOfBuildingDevelopment']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.0.upwardExpansionEligibility']")
    cy.xpath("//label[contains(text(),'না')]//input[@name='onePointSix.buildingFloorExpansions.0.upwardExpansionEligibility']")
    // Building No 2
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.1.instituteBuildingName']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.1.noOfFloorFoundation']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.1.noOfFloorCompleted']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.1.yearOfBuildingDevelopment']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.1.upwardExpansionEligibility']")
    cy.xpath("//label[contains(text(),'না')]//input[@name='onePointSix.buildingFloorExpansions.1.upwardExpansionEligibility']")
    // Bilding No 3
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.2.instituteBuildingName']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.2.noOfFloorFoundation']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.2.noOfFloorCompleted']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.2.yearOfBuildingDevelopment']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.2.upwardExpansionEligibility']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.2.upwardExpansionEligibility']")
    // Building No 4
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.3.instituteBuildingName']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.3.noOfFloorFoundation']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.3.noOfFloorCompleted']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.3.yearOfBuildingDevelopment']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.3.upwardExpansionEligibility']")
    cy.xpath("//label[contains(text(),'না')]//input[@name='onePointSix.buildingFloorExpansions.3.upwardExpansionEligibility']")
    // Building No 5
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.4.instituteBuildingName']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.4.noOfFloorFoundation']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.4.noOfFloorCompleted']")
    cy.xpath("//input[@name='onePointSix.buildingFloorExpansions.4.yearOfBuildingDevelopment']")
    cy.xpath("//label[contains(text(),'হ্যাঁ')]//input[@name='onePointSix.buildingFloorExpansions.4.upwardExpansionEligibility']")
    cy.xpath("//label[contains(text(),'না')]//input[@name='onePointSix.buildingFloorExpansions.4.upwardExpansionEligibility']")
    
    // Section 1.6.8
    cy.xpath("//input[@name='onePointSix.storeyBuildings.one_storey']")
    cy.xpath("//input[@name='onePointSix.storeyBuildings.two_storey']")
    cy.xpath("//input[@name='onePointSix.storeyBuildings.three_storey']")
    cy.xpath("//input[@name='onePointSix.storeyBuildings.four_storey']")
    cy.xpath("//input[@name='onePointSix.storeyBuildings.five_storey']")
    cy.xpath("//input[@name='onePointSix.storeyBuildings.five_storey_plus']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.ownership_own']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.ownership_rental']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionType_building']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionType_semiBuilding']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionType_raw']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionCondition_new']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionCondition_old']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionCondition_decayed']")
    cy.xpath("//input[@name='onePointSix.ownershipTypeConditionWiseBuildings.constructionCondition_abandoned']")
    cy.xpath("//input[@name='onePointSix.noOfRoomsByOwnershipTypeCondition']")
    
    //section 1.6.9
    cy.xpath("//input[@name='onePointSix.buildingRoomUsages.0.noOfRoom']")
    cy.xpath("")
    cy.xpath("")
    cy.xpath("")



    }
}