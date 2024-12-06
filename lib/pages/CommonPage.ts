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
    consoleErrors: Array<string> = []

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
        browserActions = new BrowserActions(this.page, this.context)
        this.initializeErrorListener()

        this.HOME_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Home")]')
        this.ACCOUNT_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Account")]')
        this.CLOTHING_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Clothing")]')
        this.SHOPPING_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "Shopping bag")]')
        this.ABOUT_PAGE_NAV_BUTTON = this.page.locator('//nav/a[contains(., "About")]')
    }

    async clickOnHomeButton(): Promise<void> {
        this.clearConsoleErrors()
        await this.HOME_PAGE_NAV_BUTTON.click()
    }

    async clickOnAccountButton(): Promise<void> {
        this.clearConsoleErrors()
        await this.ACCOUNT_PAGE_NAV_BUTTON.click()
        await this.page.waitForURL('**/login.html')
    }

    async clickOnClothingButton(): Promise<void> {
        this.clearConsoleErrors()
        await this.CLOTHING_PAGE_NAV_BUTTON.click()
        await this.page.waitForURL('**/products.html')
    }

    async clickOnShoppingButton(): Promise<void> {
        this.clearConsoleErrors()
        await this.SHOPPING_PAGE_NAV_BUTTON.click()
        await this.page.waitForURL('**/cart.html')
    }

    async clickOnAboutButton(): Promise<void> {
        this.clearConsoleErrors()
        await this.ABOUT_PAGE_NAV_BUTTON.click()
        await this.page.waitForURL('**/about.html')
    }

    getConsoleErrors(): Array<string> {
        return this.consoleErrors
    }

    clearConsoleErrors(): void {
        this.consoleErrors = []
    }

    initializeErrorListener() {
        this.page.on('console', msg => {
            if (msg.type() === 'error') {
                this.consoleErrors.push(msg.text())
            }
        })

        this.page.on('pageerror', err => {
            this.consoleErrors.push(err.message)
        })
    }

}
