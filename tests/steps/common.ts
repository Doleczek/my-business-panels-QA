import { Given, Then, When, } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import uiElementsIdMapping from '../testData/mapping.js';
import urls from '../testData/urls.js';

// const { Given, When, Then } = createBdd();
Given("I am at {string} page", async function(name: string){
    await this.page.goto(process.env.BASE_URL+urls[name])
})
Then("I click {string} button", async function(name: string){
    await this.page.locator("#" + uiElementsIdMapping[name]).click()
})
Then("I verify that URL contains {string}", async function(text: string){
    const Url = this.page.url()
        expect(Url).toContain(text)
})
Then("I refresh the page", async function(){
    await this.page.reload()
})
Then("I verify that {string} appears", async function(text: string){ // for Login
    expect(await this.page.getByRole('heading', { name: uiElementsIdMapping[text] }).isVisible())
})