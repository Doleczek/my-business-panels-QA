import { Given, Then, When, } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import uiElementsIdMapping from '../testData/mapping.js';
import urls from '../testData/urls.js';

Then("I log in", async function (){
    await this.page.getByText("Log In").and(this.page.locator(".navbar-brand")).click() 
    await this.page.locator("#id_username").last().fill(process.env.BASE_USERNAME) 
    await this.page.locator("#id_password").last().fill(process.env.BASE_PASSWORD)
    await this.page.locator(uiElementsIdMapping["Submit"]).last().click()
    await this.page.waitForTimeout(2000)
}) // test