import { Page, BrowserContext, Response } from "@playwright/test";

export class BrowserActions {
    readonly page: Page
    readonly context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
    }

    async navigateToHomeURL(): Promise<Response | null> {
        return await this.page.goto("/fashionhub");
    }

    async navigateToAboutURL(): Promise<Response | null> {
        return await this.page.goto("/fashionhub/about.html");
    }

    async navigateToAccountURL(): Promise<Response | null> {
        return await this.page.goto("/fashionhub/login.html");
    }

    async navigateToClothingURL(): Promise<Response | null> {
        return await this.page.goto("/fashionhub/products.html");
    }

    async navigateToShoppingURL(): Promise<Response | null> {
        return await this.page.goto("/fashionhub/cart.html");
    }

    validateResponseStatus(response: Response | null): Boolean {
        if (response == null) {
            return false;
        }
        const s = response.status()
        if (s == 200 || (s >= 300 && s < 400)) {
            return true;
        } else if (s >= 400 && s < 500) { return false; }
        else {
            throw new Error('Invalid Http status code from the response.')
        }
    }
}

