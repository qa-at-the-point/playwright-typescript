import { test, expect } from "../../sauce/fixtures"
import AxeBuilder from '@axe-core/playwright';


test.beforeEach(async ({ pages }) => {
    pages.login().goto()
})


test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    const a11yResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

    expect(a11yResults.violations).toEqual([]);
});


test('should adhere to a11y best practices', async ({ page }) => {
    const a11yResults = await new AxeBuilder({ page })
        .withTags(['best-practice'])
        .analyze();

    a11yResults.violations.forEach(violation => {
        console.log(violation.description)
    });

    expect(a11yResults.violations).toEqual([]);
})
