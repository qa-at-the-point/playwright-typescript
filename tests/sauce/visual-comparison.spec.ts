import { test } from "../../sauce/fixtures"
import { expect, type Page } from '@playwright/test';


test.beforeEach(async ({ pages }) => {
    pages.login().goto()
})

test('incorrect product images', async ({ page, pages }) => {
    await pages.login().with('standard_user', 'secret_sauce')
    await expect(page).toHaveScreenshot()
    await pages.login().logout()
})
