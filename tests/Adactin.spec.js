
import{ test,expect } from '@playwright/test';

test('Login Adactin Portal',async ({page})=>{

    await page.goto('https://adactinhotelapp.com/');
    await page.locator('#username').fill('sarathmaha');
    await page.locator('#password').fill('masha@7721');
    await page.locator('#login').click();
    await page.waitForTimeout(3000);
    await expect.page.locator()
    await expect.page.locator();

})
