// import { test, expect } from '@playwright/test';
// import Main from "./pageObjects/main.js" // js traktuje jako ts
// test('has title', async ({ page }) => {
//   require('dotenv').config()
//   const objectMain = new Main(page)
//   await page.goto(process.env.BASE_URL);

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("My Business Panel");
//   await objectMain.openPlanningTool()
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
