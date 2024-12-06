import { expect } from "@playwright/test"
import { test } from "../lib/utilities/BaseTest"

test.beforeEach('', async ({ browserActions, commonPage }) => {
    await browserActions.navigateToHomeURL()
})

test('Test Console Error: Home', async ({ homePage }) => {
    expect(homePage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Account', async ({ page, browserActions, accountPage }) => {
    await accountPage.clickOnAccountButton()
    expect(accountPage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Clothing', async ({ page, browserActions, clothingPage }) => {
    await clothingPage.clickOnClothingButton()
    expect(clothingPage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Shopping', async ({ page, browserActions, shoppingPage }) => {
    await shoppingPage.clickOnShoppingButton()
    expect(shoppingPage.getConsoleErrors()).toHaveLength(0)
})

// This test is expected to fail.
test('Test Console Error: About', async ({ page, browserActions, aboutPage }) => {
    await aboutPage.clickOnAboutButton()
    expect(aboutPage.getConsoleErrors()).toHaveLength(0) // This will fail as expected.
})