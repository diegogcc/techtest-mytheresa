import { Page, Locator, BrowserContext, ConsoleMessage } from '@playwright/test'
import { BrowserActions } from '../utilities/BrowserActions'

let browserActions: BrowserActions

export class CommonPage {
    readonly page: Page
    readonly context: BrowserContext
    readonly HOME_PAGE_NAV_BUTTON: Locator
    readonly ACCOUNT_PAGE_NAV_BUTTON: Locator
    readonly CLOTHING_PAGE_NAV_BUTTON: Locator
    readonly SHOPPING_PAGE_NAV_BUTTON: Locator
    readonly ABOUT_PAGE_NAV_BUTTON: Locator

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
        browserActions = new BrowserActions(this.page, this.context)

        this.HOME_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Home")]')
        this.ACCOUNT_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Account")]')
        this.CLOTHING_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Clothing")]')
        this.SHOPPING_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Account")]')
        this.ABOUT_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "About")]')
    }

    async navigateToHomePage(): Promise<void> {
        await this.HOME_PAGE_NAV_BUTTON.click()
    }

    async navigateToAccountPage(): Promise<void> {
        await this.ACCOUNT_PAGE_NAV_BUTTON.click()
    }

    async navigateToClothingPage(): Promise<void> {
        await this.CLOTHING_PAGE_NAV_BUTTON.click()
    }

    async navigateToShoppingPage(): Promise<void> {
        await this.SHOPPING_PAGE_NAV_BUTTON.click()
    }

    async navigateToAboutPage(): Promise<void> {
        await this.ABOUT_PAGE_NAV_BUTTON.click()
    }

    async getConsoleErrors(): Promise<Array<string>> {
        let consoleMessages: Array<string> = [];
        this.page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleMessages.push(msg.text())
                console.log(`Error text caught: "${msg.text()}"`);
            }
        });
        return consoleMessages
    }

}
