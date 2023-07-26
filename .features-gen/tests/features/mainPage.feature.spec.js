/** Generated from: tests\features\mainPage.feature */
import { test } from "playwright-bdd";

test.describe("MainPage", () => {

  test("Page navigation", async ({ Given, Then }) => {
    await Given("I am at \"main\" page");
    await Then("I click \"Try Production Planning\" button");
    await Then("I verify that URL contains \"tool\"");
  });

});
