import { Page } from "@playwright/test"
export default class Main { // trzeba defaultowo exportować
    readonly zmienna:Page // przypisanie typu, a dokladnie to interfejsu Page do zmiennej page
    constructor(parametr:Page){ // okreslamy konstruktor i dziedziczymy z klasy Page do page
        this.zmienna=parametr // przypisanie parametru page do zmiennej page
        parametr
}}