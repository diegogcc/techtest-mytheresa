import { Page, Locator, BrowserContext, ConsoleMessage, expect } from '@playwright/test'
import { BrowserActions } from '../utilities/BrowserActions'
import { testConfig } from '../../testConfig'

let browserActions: BrowserActions

export type Data = { title: string, date: string, author: string }[]

export class PRPage {
    readonly page: Page
    readonly context: BrowserContext
    readonly PR_TITLE_TEXT: Locator
    readonly PR_DATE_TEXT: Locator
    readonly PR_AUTHOR_TEXT: Locator
    readonly NEXT_PAGE_BUTTON: Locator
    readonly CURRENT_PAGE_LOCATOR: string

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context

        this.PR_TITLE_TEXT = this.page.locator('xpath=//*[@data-hovercard-type="pull_request"]')
        this.PR_DATE_TEXT = this.page.locator('xpath=//*[@class="opened-by"]//relative-time')
        this.PR_AUTHOR_TEXT = this.page.locator('xpath=//*[@class="opened-by"]//a')
        this.NEXT_PAGE_BUTTON = this.page.locator('xpath=(//*[@class="next_page"])[1]')
        this.CURRENT_PAGE_LOCATOR = 'xpath=//*[@class="current" and @aria-label="Page {pageNumber}"]'

    }

    async navigateToPRPage(): Promise<void> {
        await this.page.goto(testConfig.repoUrl)
    }

    async getPRTitles(): Promise<Array<string>> {
        return this.PR_TITLE_TEXT.allTextContents()
    }

    async getPRCreatedTimes(): Promise<Array<string>> {
        return this.PR_DATE_TEXT.allTextContents()
    }

    async getPRAuthors(): Promise<Array<string>> {
        return this.PR_AUTHOR_TEXT.allTextContents()
    }

    async nextPageExists(): Promise<Boolean> {
        return this.NEXT_PAGE_BUTTON.isVisible()
    }

    async getPRData(): Promise<Data> {
        let data: Data = await this.getPRPageData()
        let pageNumber = 1

        while (await this.nextPageExists()) {
            pageNumber++;
            await this.NEXT_PAGE_BUTTON.click()
            await this.page.waitForSelector(this.CURRENT_PAGE_LOCATOR.replace('{pageNumber}', pageNumber.toString()))
            let pageData: Data = await this.getPRPageData()
            data.push(...pageData)
        }
        return data
    }

    async getPRPageData(): Promise<Data> {
        let pageData: Data

        const pageTitles = await this.getPRTitles()
        const pageDates = await this.getPRCreatedTimes()
        const pageAuthors = await this.getPRAuthors()

        pageData = pageTitles.map((title, index) => ({
            title,
            date: pageDates[index],
            author: pageAuthors[index]
        }))
        return pageData
    }

}