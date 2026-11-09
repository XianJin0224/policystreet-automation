import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Scenarios', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Successful login using credentials from .env', async ({ page }) => {
    const username = process.env.TEST_USERNAME!;
    const password = process.env.TEST_PASSWORD!;

    await loginPage.performLogin(username, password);
    await expect(page).toHaveURL(/.*secure/);
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    console.log("login with correct data test passed")
  });

  test('Failed login with invalid password displays error', async () => {
    await loginPage.performLogin('tomsmith', 'InvalidPassword123');
    await expect(loginPage.flashMessage).toBeVisible();
    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
    console.log("log in with invalid data test passed")
  });
});