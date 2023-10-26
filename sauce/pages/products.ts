import { Locator, type Page } from '@playwright/test';


export class ProductsPage {
    private readonly _page: Page

    constructor(page: Page) {
        this._page = page
    }

    title(): Locator {
        return this._page.locator('.title')
    }
}
