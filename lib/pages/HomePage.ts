import { Page, Locator, BrowserContext } from '@playwright/test'
import { BrowserActions } from '../utilities/BrowserActions'
import { CommonPage } from './CommonPage'

let browserActions: BrowserActions

export class HomePage extends CommonPage {
    readonly page: Page
    readonly context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
        super(page, context)
        this.page = page
        this.context = context
        browserActions = new BrowserActions(this.page, this.context)
    }

}
