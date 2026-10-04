import { test, expect } from '@playwright/test';

test('Login into application using valid credentials', async function ({page}){

    await
    

    await page.getByLabel("Username").fill("student")

    await expect(page.getByLabel("username")).toHaveValue("student")

    await page.locator("#password").pressSequentially("Password123")

    await page.getByRole('button', {name: 'Submit'}).click()
})

