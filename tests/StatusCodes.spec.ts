import { expect } from "@playwright/test"
import { test } from "../lib/utilities/BaseTest"

test('Test Valid Status Code', async ({ browserActions }) => {
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToHomeURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToAccountURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToClothingURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToShoppingURL())).toBeTruthy()
    await expect(browserActions.validateResponseStatus(await browserActions.navigateToAboutURL())).toBeTruthy()
})