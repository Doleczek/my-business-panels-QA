import { defineStep } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import uiElementsIdMapping from '../testData/mapping.js';
import urls from '../testData/urls.js';
import costs from '../testData/entities/costs.js';
import utilities from '../testData/entities/utilities.js';


// const { Given, When, Then } = createBdd();
defineStep("I am at {string} page", async function(name: string){
    await this.page.goto(process.env.BASE_URL+urls[name])
})
defineStep("I click {string} button", async function(name: string){
    await this.page.locator("#" + uiElementsIdMapping[name]).click() 
})
defineStep("I verify that URL contains {string}", async function(text: string){
    const Url = this.page.url()
        expect(Url).toContain(text)
})
defineStep("I refresh the page", async function(){
    await this.page.reload()
    await this.page.waitForLoadState()
})
defineStep("I verify that {string} appears", async function(text: string){ // for Login
    expect(await this.page.getByRole('heading', { name: uiElementsIdMapping[text] }).isVisible())
})
defineStep("I click {string} element", async function(name: string){
    await this.page.getByText(name).first().click()
    await this.page.waitForTimeout(1000)
})
// Then("I fill out {string} data, version {string}", async function(name: string, version: string){
//     const Entitieskeys= Object.keys(costs)
//         for (let i of Entitieskeys) { 
//         console.log(i)
//          }
// })
defineStep("I fill out {string} data, version {string}", async function(name: string, version: number){
    const Entitieskeys= Object.keys(utilities[name][version])
    await this.page.waitForTimeout(500)
        for (let i of Entitieskeys) { 
            await this.page.waitForTimeout(1000)
            await this.page.getByLabel(i).first().type(utilities[name][version][i])
         } 

})
defineStep("I verify that {string} text is visible" , async function (text: string) {   
    const element =  this.page.getByText(text)
    expect(await element.first().isVisible())
})