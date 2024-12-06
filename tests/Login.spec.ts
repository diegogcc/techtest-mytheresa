import { expect } from "@playwright/test"
import { test } from "../lib/utilities/BaseTest"

test.beforeEach('', async ({ browserActions, commonPage }) => {
    await browserActions.navigateToAccountURL()
})

test('Valid Credentials', async ({ accountPage }) => {
    await accountPage.loginToApplication()
    await expect(accountPage.LOGOUT_BUTTON).toBeVisible()
})

test('Invalid Credentials', async ({ accountPage }) => {
    await accountPage.loginToApplication('invaliduser', 'invalidpassword')
    await expect(accountPage.ERROR_MESSAGE).toBeVisible()
    await expect(accountPage.LOGOUT_BUTTON).not.toBeVisible()
})
