import { expect } from "@playwright/test"
import { test } from "../lib/utilities/BaseTest"

test('Test Console Error: Home', async ({ page, browserActions, homePage }) => {
    // const response = await browserActions.navigateToHomeURL()
    // browserActions.validateResponseStatus(response)
    // expect(homePage.getConsoleErrors()).toHaveLength(0)
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToHomeURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToAccountURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToClothingURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToShoppingURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToAboutURL())).toBeTruthy()
})