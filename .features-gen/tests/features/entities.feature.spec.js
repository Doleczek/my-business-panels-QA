/** Generated from: tests\features\entities.feature */
import { test } from "playwright-bdd";

test.describe("MyEntities", () => {

  test.beforeEach(async ({ Given, Then }) => {
    await Given("I am at \"main\" page");
    await Then("I log in");
  });

  test("Check page @dev", async ({ Then }) => {
    await Then("I click \"Try Production Planning\" button");
    await Then("I click \"MyEntities\" button");
  });

});
