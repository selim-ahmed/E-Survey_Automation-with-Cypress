/// <reference types="cypress-xpath" />

import {objectsForMadrasha} from "./MadrashaPageObjects"

const madrashaobjects = new objectsForMadrasha()

it('Madrasha Survey login', ()=> {
    madrashaobjects.navigate()
})

it('login as Madrasha user', ()=> {
    madrashaobjects.login(108438,123456)
})

it('Enter Survey Data', ()=> {
    madrashaobjects.madrasha_survey(
        "13",
        "+88-7713333",
        "+8801712131415",
        "+8801712131416",
        "nalla.polla@gmail.com",
        "https://www.nalla.polla.gov.bd"

    )
})



