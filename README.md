# playwright-typescript
Sample project with typescript and playwright
**Automate a Login Flow with Playwright & TypeScript**
🧪 **Objective**
Automate the login process of a sample web app using Playwright with TypeScript. Verify successful login by checking for a post-login element.

🔧 **Setup Instructions**
Create a Playwright project:

bash
Copy
Edit
npm init playwright@latest
# Choose TypeScript
Install dependencies (if not already installed):

bash
Copy
Edit
npm install
🔍 Test Scenario
URL: https://example.playwright.dev/login (or use a mock app like https://www.saucedemo.com/ if a real one isn't provided)

Steps:

Navigate to the login page.

Enter valid username and password.

Click on the login button.

Wait for redirection and verify the presence of a dashboard element (e.g., a user profile icon or welcome message).

Take a screenshot after login.

🧾 Test Data
Username: standard_user

Password: secret_sauce

✅ Expected Output
The script logs in successfully.

An assertion confirms the presence of a dashboard element.

A screenshot is saved in the /screenshots folder.

📁 File: tests/login.spec.ts
ts
Copy
Edit
import { test, expect } from '@playwright/test';

test('Login functionality test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Assertion: Check if login was successful
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: 'screenshots/dashboard.png', fullPage: true });
});
🔄 Bonus (Optional Enhancements)
Add login as a reusable helper function.

Use environment variables for credentials.

Add tests for invalid credentials.

✅ Evaluation Criteria
Working and clean test code

Proper assertions and error handling

Use of Playwright best practices

TypeScript usage and structure
