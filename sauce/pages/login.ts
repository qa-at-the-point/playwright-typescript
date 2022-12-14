import { Locator, type Page } from '@playwright/test';


export class LoginPage {
    readonly _page: Page

    constructor(page: Page) {
       this._page = page
    }

    async goto(): Promise<LoginPage> {
        await this._page.goto('https://saucedemo.com')
        return this
    }

    async with(username: string, password: string): Promise<void> {
        await this._page.locator('#user-name').fill(username)
        await this._page.locator('#password').fill(password)
        await this._page.locator('#login-button').click()
    }

    error(): Locator {
        return this._page.locator('[data-test=error]')
    }
}
