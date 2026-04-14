import { test } from '@playwright/test';

// Emulate prefers-reduced-motion: reduce so all [data-fade] elements render
// at opacity: 1 immediately — without this, a fullPage screenshot captures
// the page before the IntersectionObserver has fired for below-fold sections.

test('desktop 1440x900 snapshot', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'tests/snapshots/home-desktop.png', fullPage: true });
});

test('mobile 375x812 snapshot', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'tests/snapshots/home-mobile.png', fullPage: true });
});

test('tablet 600x900 snapshot', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 600, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'tests/snapshots/home-tablet.png', fullPage: true });
});

