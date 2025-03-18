const { test, expect } = require("@playwright/test");
const { email, password } = require("../tests/user");

test("test1", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("sunjuly82@yandex.ru");
  await page.getByRole("textbox", { name: "Пароль" }).click();
  await page.getByRole("textbox", { name: "Пароль" }).fill("18102017");
  await page.getByTestId("login-submit-btn").click();

  const heading = page.locator("//h2");

  //await page.waitForSelector("text=Моё обучение");
  await page.waitForSelector("text=Моё обучение", { timeout: 40_000 });
  await expect(page.locator("text=Моё обучение")).toBeVisible();
});

test("test2", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("sunjuly82@yandex.ru");
  await page.getByRole("textbox", { name: "Пароль" }).click();
  await page.getByRole("textbox", { name: "Пароль" }).fill("12345678");
  await page.getByTestId("login-submit-btn").click();

  const heading = page.locator("login-error-hint");

  //await page.waitForSelector("text=Вы ввели неправильно логин или пароль");
  await page.waitForSelector("text=Вы ввели неправильно логин или пароль", {
    timeout: 40_000,
  });
  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
  //await expect.heading.toContainText("text=Вы ввели неправильно логин или пароль");
});
