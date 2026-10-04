import { test } from '@playwright/test';
import { SauceDemoPage } from './pages/SauceDemoPage';

function randomCheckoutDetails(): { firstName: string; lastName: string; postalCode: string } {
  const suffix = Math.random().toString(36).slice(2, 8);
  const postalCode = String(Math.floor(10000 + Math.random() * 90000));

  return {
    firstName: `Test${suffix}`,
    lastName: `User${suffix}`,
    postalCode,
  };
}

test('complete SauceDemo backpack checkout as standard user', async ({ page }) => {
  const sauceDemo = new SauceDemoPage(page);
  const { firstName, lastName, postalCode } = randomCheckoutDetails();
  const pauseBetweenSteps = async (): Promise<void> => {
    if (process.env.PW_HEADED === '1') {
      await page.waitForTimeout(2000);
    }
  };

  await sauceDemo.open();
  await pauseBetweenSteps();
  await sauceDemo.login('standard_user', 'secret_sauce');
  await pauseBetweenSteps();
  await sauceDemo.addBackpackToCart();
  await pauseBetweenSteps();
  await sauceDemo.openCart();
  await pauseBetweenSteps();
  await sauceDemo.checkout();
  await pauseBetweenSteps();
  await sauceDemo.enterCheckoutDetails(firstName, lastName, postalCode);
  await pauseBetweenSteps();
  await sauceDemo.finishOrder();
  await pauseBetweenSteps();
  await sauceDemo.expectOrderConfirmation();
});