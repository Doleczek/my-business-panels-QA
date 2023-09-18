/** Generated from: tests\features\entities.feature */
import { test } from "playwright-bdd";

test.describe("MyEntities", () => {

  test.beforeEach(async ({ Given, Then }) => {
    await Given("I am at \"main\" page");
    await Then("I log in");
  });

  test("Check page", async ({ Then }) => {
    await Then("I click \"Try Production Planning\" button");
    await Then("I click \"MyEntities\" button");
    await Then("I click \"Edit\" element");
    await Then("I click \"Edit\" element");
    await Then("I click \"Create\" element");
    await Then("I click \"Cost\" element");
  });

  test("Create cost", async ({ Given, Then }) => {
    await Given("I am at \"MyEntities\" page");
    await Then("I click \"Create\" element");
    await Then("I click \"Cost\" element");
    await Then("I fill out \"testCosts_1\" data, version \"0\"");
    await Then("I click \"SubmitCosts\" button");
    await Then("I refresh the page");
  });

  test("Creat utility  @dev", async ({ Given, Then }) => {
    await Given("I am at \"MyEntities\" page");
    await Then("I click \"Create\" element");
    await Then("I click \"Utility\" element");
    await Then("I fill out \"testCosts_1\" data, version \"0\"");
    await Then("I click \"SubmitUtility\" button");
    await Then("I refresh the page");
    await Then("I click \"Utilities\" element");
    await Then("I verify that \"wages\" text is visible");
  });

});
