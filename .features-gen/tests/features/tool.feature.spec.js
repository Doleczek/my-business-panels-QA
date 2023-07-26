/** Generated from: tests\features\tool.feature */
import { test } from "playwright-bdd";

test.describe("Tool", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("I am at \"tool\" page");
  });

  test("Page navigation", async ({ Then }) => {
    await Then("I click \"MyProcess\" button");
    await Then("I verify that \"Login needed\" appears");
    await Then("I refresh the page");
    await Then("I click \"MyOperations\" button");
    await Then("I verify that \"Login needed\" appears");
    await Then("I refresh the page");
    await Then("I click \"MyEntities\" button");
    await Then("I verify that \"Login needed\" appears");
    await Then("I refresh the page");
  });

  test("I am logged in @dev", async ({ Then }) => {
    await Then("I log in");
  });

});
