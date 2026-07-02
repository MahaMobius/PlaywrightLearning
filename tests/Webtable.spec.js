import {test,expert} from '@playwright/test';

test('webtable handling',async ({page} ) =>{
    await page.goto('https://letcode.in/table');

    //to get all data
    const alldata=await page.locator('//table/tbody/tr/td').allTextContents();
    console.log(alldata);

   // To get data from row
   const rowdata=await page.locator('//table/tbody/tr[3]/td').allTextContents();
   console.log(rowdata);

   //To get data from column
   const ColumnData=await page.locator('//table/tbody/tr/td[2]').allTextContents();
   console.log(ColumnData);

   //To get particular data from table
   const Particulardata=await page.locator('//table/tbody/tr[2]/td[1]').allTextContents();
   console.log(Particulardata);

   //To get header 
   const Header=await page.locator('//table/thead/tr/th').allTextContents();
   console.log(Header);

         
})
