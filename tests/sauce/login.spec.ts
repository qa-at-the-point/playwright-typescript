import { test, expect } from "../../sauce/fixtures"


test.beforeEach(async ({ pages }) => {
    pages.login().goto()
})

test.describe('Try to login with', () => {

    test('valid credentials', async ({ pages }) => {
        await pages.login().with('standard_user', 'secret_sauce')
        await expect(pages.products().title()).toHaveText('Products')
    })

    test('locked out user', async ({ pages }) => {
        const login = pages.login()
        await login.with('locked_out_user', 'secret_sauce')
        await expect(login.error()).toContainText('Sorry, this user has been locked out')
    })
})
