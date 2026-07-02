import {test,expect} from '@playwright/test';

test('Amazon add to cart verification', async ({page})=>{
    await page.goto('https://www.amazon.in');
    await page.fill('input#twotabsearchtextbox','toys for 4 year old boy');
    await page.keyboard.press('Enter');
    await page.waitForLoadState();
    await expect.page.locator('[class="a-size-base a-spacing-small a-spacing-top-small a-text-normal"]').toContainText('results for');

})

