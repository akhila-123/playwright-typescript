import { test, expect } from '@playwright/test';
import testData from '../fixtures/testData';

test('verify login with valid credentails', async ({ page }) => {
  await page.goto('https://login.bol.com/wsp/login');
  await page.getByLabel('E-mailadres').fill(testData.username);
  await page.getByLabel('Wachtwoord').fill(testData.password);
    await page.getByRole('button', { name: 'Inloggen' }).click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});