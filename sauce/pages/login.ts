import { Locator, type Page } from '@playwright/test';


export class LoginPage {
    private readonly _page: Page

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

    async logout(): Promise<void> {
        await this._page.locator('#react-burger-menu-btn').click()
        await this._page.locator('#logout_sidebar_link').click()
    }

    error(): Locator {
        return this._page.locator('[data-test=error]')
    }
}
