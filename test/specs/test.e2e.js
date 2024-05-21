import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import ConsumptionPage from "../pageobjects/consumption.page.js";
import PasswordPage from "../pageobjects/password.page.js";
import DashboardPage from "../pageobjects/dashboard.page.js";

describe("My Login application", () => {
  it("Download Data from Genesis Energy", async () => {
    await LoginPage.open();

    await LoginPage.login("EMAIL_GOES_HERE");
    await expect(PasswordPage.inputPassword).toBeExisting();
    await PasswordPage.login("PASSWORD_GOES_HERE");

    await expect(DashboardPage.title).toBeExisting();

    await ConsumptionPage.open(true);
    await expect(ConsumptionPage.title).toBeExisting();
    await expect(ConsumptionPage.title).toHaveText(
      expect.stringContaining("Your products and usage")
    );

    await ConsumptionPage.openHourly("gas"); //electricity

    //2024_05_21
    await ConsumptionPage.selectInitialDate("2024_05_20");
    await ConsumptionPage.downloadAllData();

    // await expect(SecurePage.flashAlert).toBeExisting()
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!')
  });
});
