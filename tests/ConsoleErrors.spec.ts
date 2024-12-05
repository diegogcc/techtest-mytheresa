import { expect } from "@playwright/test"
import { test } from "../lib/utilities/BaseTest"

test('Test Console Error: Home', async ({ page, browserActions, homePage }) => {
    await browserActions.navigateToURL()
    expect(homePage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Account', async ({ page, browserActions, accountPage }) => {
    await browserActions.navigateToURL()
    await accountPage.navigateToAccountPage()
    expect(accountPage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Clothing', async ({ page, browserActions, clothingPage }) => {
    await browserActions.navigateToURL()
    await clothingPage.navigateToClothingPage()
    expect(clothingPage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: Shopping', async ({ page, browserActions, shoppingPage }) => {
    await browserActions.navigateToURL()
    await shoppingPage.navigateToShoppingPage()
    expect(shoppingPage.getConsoleErrors()).toHaveLength(0)
})

test('Test Console Error: About', async ({ page, browserActions, aboutPage }) => {
    await browserActions.navigateToURL()
    await aboutPage.navigateToAboutPage()
    expect(aboutPage.getConsoleErrors()).toHaveLength(0) // This will fail as expected.
})