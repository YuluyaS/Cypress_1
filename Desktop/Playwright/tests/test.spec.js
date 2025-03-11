//const { chromium } = require("playwright");
//const { test, expect } = require("playwright");
//const { email, password } = require("../user");

//import { test, expect } from "@playwright/test";


//test("test", async ({ page }) => {
  //await page.goto("https://netology.ru/");
  //await page.getByRole("link", { name: "Войти" }).click();
  //await page.getByRole("textbox", { name: "Email" }).click();
  //await page.getByRole("textbox", { name: "Email" }).fill("sunjuly82@yandex.ru");
  //await page.getByRole("textbox", { name: "Пароль" }).click();
  //await page.getByRole("textbox", { name: "Пароль" }).fill("18102017");
  //await page.getByTestId("login-submit-btn").click();

  //const heading = page.locator('//h2'); 

  //await expect.heading.toContainText('Моё обучение');

  //await expect (page.locator("popmechanic-desktop popmechanic-landscape popmechanic-loaded").toContainText("Инженер по тестированию:расширенный курс"));});

/*

import { test, expect } from "@playwright/test";



test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("sunjuly82@yandex.ru");
  await page.getByRole("textbox", { name: "Пароль" }).click();
  await page.getByRole("textbox", { name: "Пароль" }).fill("12345678");
  await page.getByTestId("login-submit-btn").click();

  await expect(page.locator([userId, 7872227]));
});

*/
