import { Page, test as baseTest } from "@playwright/test";
import { BrowserActions } from "./BrowserActions";
import { AboutPage } from "./../pages/AboutPage"
import { AccountPage } from "./../pages/AccountPage"
import { ClothingPage } from "./../pages/ClothingPage"
import { HomePage } from "./../pages/HomePage"
import { ShoppingPage } from "./../pages/ShoppingPage"

export const test = baseTest.extend<{
    page: Page
    browserActions: BrowserActions
    aboutPage: AboutPage
    accountPage: AccountPage
    clothingPage: ClothingPage
    homePage: HomePage
    shoppingPage: ShoppingPage
}>({
    browserActions: async ({ page, context }, use) => {
        await use(new BrowserActions(page, context))
    },
    aboutPage: async ({ page, context }, use) => {
        await use(new AboutPage(page, context))
    },
    accountPage: async ({ page, context }, use) => {
        await use(new AccountPage(page, context))
    },
    clothingPage: async ({ page, context }, use) => {
        await use(new ClothingPage(page, context))
    },
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context))
    },
    shoppingPage: async ({ page, context }, use) => {
        await use(new ShoppingPage(page, context))
    },
})