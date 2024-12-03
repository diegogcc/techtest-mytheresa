import { Page, test as baseTest } from "@playwright/test";
import { BrowserActions } from "./BrowserActions";

export const test = baseTest.extend<{
    page: Page
    browserActions: BrowserActions
}>({
    browserActions: async ({ page, context }, use) => {
        await use(new BrowserActions(page, context))
    }
})