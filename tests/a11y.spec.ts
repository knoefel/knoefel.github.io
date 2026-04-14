import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Wait for document fonts to be fully loaded before running axe,
// so that @axe-core/playwright's pixel-based color analysis gets
// accurate contrast values from rendered variable fonts.
async function waitForFonts(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
}

test('home page has no WCAG violations', async ({ page }) => {
  await page.goto('/');
  await waitForFonts(page);
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

