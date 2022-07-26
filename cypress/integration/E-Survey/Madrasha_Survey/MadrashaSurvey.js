/// <reference types="cypress-xpath" />

import {objectsForMadrasha} from "./MoulikTotho-1_Madrasha"

const madrashaobjects = new objectsForMadrasha()

it('Madrasha Survey login', ()=> {
    madrashaobjects.navigate()
})

it('login as Madrasha user', ()=> {
    madrashaobjects.login(108438,123456)
})

it('Enter Survey Data for Moulok Totho 1', ()=> {
    madrashaobjects.madrashaSurvey_moulik_totho_1(
        //Section 1.1.1
        "13",
        "88027713333",
        "+8801712131415",
        "+8801712131416",
        "nalla.polla@gmail.com",
        "https://www.nalla.polla.gov.bd",
        "12",
        "2",
        "Shapla",
        "golap",
        "10",
        "2",
        "5",
        "3",
        "1990-01-01",
        "2020-12-31",
        "11",
        "4",
        "1",
        "1"
    )
})



