const { Builder, By, until } = require('selenium-webdriver');

(async function loginTests() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // ✅ Test 1a: Successful Login
    console.log("Test 1a: Successful login ✅");
    await driver.get("http://localhost:5173/");

    await driver.findElement(By.name("email")).sendKeys("sahan@test.com"); // Use a valid test account
    await driver.findElement(By.name("password")).sendKeys("123");
    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.wait(until.urlContains("/dashboard"), 5000);
    console.log("Test 1a passed: Login redirected to dashboard");

    // ❌ Test 1b: Invalid Login
    console.log("Test 1b: Login with wrong password ❌");
    await driver.get("http://localhost:5173/");

    await driver.findElement(By.name("email")).sendKeys("sahan@test.com");
    await driver.findElement(By.name("password")).sendKeys("WrongPassword");
    await driver.findElement(By.css("button[type='submit']")).click();

    try {
      await driver.wait(until.alertIsPresent(), 5000);
      let alert = await driver.switchTo().alert();
      console.log("Test 1b passed: Alert text →", await alert.getText());
      await alert.accept();
    } catch (e) {
      console.log("Test 1b failed: No alert appeared");
    }

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();
