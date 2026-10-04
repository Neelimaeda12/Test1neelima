import { expect, type Locator, type Page } from '@playwright/test';

export class SauceDemoPage {
  private readonly page: Page;
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async open(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async addBackpackToCart(): Promise<void> {
    const backpack = this.page.locator('[data-test="inventory-item"]', {
      hasText: 'Sauce Labs Backpack',
    });
    await backpack.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.page.getByRole('button', { name: /^Cart/ }).click();
  }

  async checkout(): Promise<void> {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async enterCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.getByLabel('First Name').fill(firstName);
    await this.page.getByLabel('Last Name').fill(lastName);
    await this.page.getByLabel('Zip/Postal Code').fill(postalCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async finishOrder(): Promise<void> {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async expectOrderConfirmation(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  }
}