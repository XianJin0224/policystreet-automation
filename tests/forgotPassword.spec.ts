import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test.describe('Forgot Password Scenarios', () => {
  let forgotPasswordPage: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    forgotPasswordPage = new ForgotPasswordPage(page);
    await forgotPasswordPage.navigate();
  });

  test('Successfully submit password recovery request', async ({ page }) => {
    await forgotPasswordPage.submitEmail('user@example.com');
    await expect(page).toHaveURL(/.*email_sent/);
    console.log("forget password test pass")
  });
});
