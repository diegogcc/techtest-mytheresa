import { Page, BrowserContext } from "@playwright/test";

export class BrowserActions {
    readonly page: Page
    readonly context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/fashionhub");
    }
}

