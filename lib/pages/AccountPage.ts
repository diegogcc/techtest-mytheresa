import { Page, Locator, BrowserContext } from '@playwright/test'
import { BrowserActions } from '../utilities/BrowserActions'
import { CommonPage } from './CommonPage'

let browserActions: BrowserActions

export class AccountPage extends CommonPage {
    readonly page: Page
    readonly context: BrowserContext
    readonly USERNAME_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly LOGIN_BUTTON: Locator
    readonly LOGOUT_BUTTON: Locator
    readonly ERROR_MESSAGE: Locator
    readonly DEFAULT_USER: string = 'demouser'
    readonly DEFAULT_PASSWORD: string = 'fashion123'

    constructor(page: Page, context: BrowserContext) {
        super(page, context)
        this.page = page
        this.context = context
        browserActions = new BrowserActions(this.page, this.context)

        this.USERNAME_INPUT = this.page.locator('#username')
        this.PASSWORD_INPUT = this.page.locator('#password')
        this.LOGIN_BUTTON = this.page.locator('[type="submit"]')
        this.LOGOUT_BUTTON = this.page.locator('//logout-button')
        this.ERROR_MESSAGE = this.page.locator('#errorMessage')
    }

    async loginToApplication(username: string = this.DEFAULT_USER, password: string = this.DEFAULT_PASSWORD): Promise<void> {
        await this.USERNAME_INPUT.fill(username)
        await this.PASSWORD_INPUT.fill(password)
        await this.LOGIN_BUTTON.click()
    }

}
