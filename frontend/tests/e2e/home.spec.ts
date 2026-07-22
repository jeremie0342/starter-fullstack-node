import { expect, test } from '@playwright/test';

test('home renders and shows greet button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('button', { name: /hello|bonjour/i })).toBeVisible();
});
