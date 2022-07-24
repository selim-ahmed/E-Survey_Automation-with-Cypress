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
    madrashaobjects.madrasha_survey()
})



