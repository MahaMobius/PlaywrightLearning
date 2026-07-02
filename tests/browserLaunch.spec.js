//Playwright Browser Launch Test

import {test} from '@playwright/test';

test("Launching browser",async({page}) =>{
    await page.goto("https://en-gb.facebook.com/"); //launch url
    await page.waitForTimeout(3000); //wait
    console.log(await page.url());  //to get url of page
    console.log(await page.title());  //to get title of page
    //to take screenshot
    await page.screenshot({path:'Screenshot/facebookpageSS.png'})
    

})
 test.only("Recording video", async ({browser})=>{
   
    //recording video
        const context = await browser.newContext({recordVideo:{dir:'Videos/'} });
        const page=await context.newPage();
        await page.waitForTimeout(3000);
         await page.goto("https://en-gb.facebook.com/"); //launch url
         await page.waitForTimeout(3000); //wait
    }
    )
