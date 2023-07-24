import { Given, Then, When, } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
// import { createBdd } from 'playwright-bdd';
// const { Given, When, Then } = createBdd();
Given("I am at main page", async function(){
    require('dotenv').config()
    await this.page.goto(process.env.BASE_URL)
    await expect(this.page).toHaveTitle("My Business Panel");
}
)