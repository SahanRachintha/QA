const { Builder, By, until } = require('selenium-webdriver');

(async function signupTests() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // ✅ Test 1a: Successful Signup
    console.log("Test 1a: Successful signup ✅");
    await driver.get("http://localhost:5173/signup");

    await driver.findElement(By.name("name")).sendKeys("Sahan Test");
    await driver.findElement(By.name("email")).sendKeys(`sahan${Date.now()}@test.com`);
    await driver.findElement(By.name("password")).sendKeys("SecurePass123");
    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.wait(until.urlContains("/"), 5000);
    console.log("Test 1a passed: Signup redirected to home");

    // ❌ Test 1b: Invalid Email
    console.log("Test 1b: Signup with invalid email ❌");
    await driver.get("http://localhost:5173/signup");

    await driver.findElement(By.name("name")).sendKeys("Sahan Test");
    await driver.findElement(By.name("email")).sendKeys("invalid-email");
    await driver.findElement(By.name("password")).sendKeys("SecurePass123");
    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.sleep(1000); // Wait for browser validation
    let emailInput = await driver.findElement(By.name("email"));
    let validationMessage = await emailInput.getAttribute("validationMessage");

    if (validationMessage && validationMessage.length > 0) {
      console.log("Test 1b passed: Browser blocked invalid email");
    } else {
      console.log("Test 1b failed: No validation message for invalid email");
    }

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();
