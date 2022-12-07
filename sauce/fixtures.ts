import { test as base } from '@playwright/test';
import { Pages } from './pages';


type SauceFixtures = {
    pages: Pages
}


// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<SauceFixtures>({
    pages: async ({ page }, use) => {
        const pages = new Pages(page)
        await pages.login().goto()

        // Use the fixture value in the test.
        await use(pages)

        // Clean up the fixture (if needed)
        // await pages.login().clear()
    },

  // You can set multiple fixtures
  //   settingsPage: async ({ page }, use) => {
  //     await use(new SettingsPage(page));
  //   },
})

export { expect } from '@playwright/test'
