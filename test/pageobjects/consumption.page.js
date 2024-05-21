import { $ } from "@wdio/globals";
import Page from "./page.js";

class ConsumptionPage extends Page {
  get title() {
    return $(".heading-container");
  }

  async openHourly(type) {
    const btn = await $("." + type + "-historical-tabs:last-child");
    await btn.click();
  }

  async selectInitialDate(date) {
    const btn = await $(".toggle");
    await btn.click();

    const btnDate = await $("#HOURLY_" + date);
    await btnDate.click();
  }

  get electricityUsageChart() {
    return $(".main-content");
  }

  async downloadAllData() {
    //const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    do {
      await expect(this.electricityUsageChart).toBeExisting();
      //await delay(500);
      await this.clickDownloadButton();

      //await delay(1000);
      const btn = await $(".previous");
      await btn.click();
    } while (true);
  }

  async clickDownloadButton() {
    const btn = await $(".download-usage-excel");
    await btn.click();
  }

  async open(isGas) {
    if (isGas) return super.open("account/products/natural-gas");
    return super.open("account/products/consumption");
  }
}

export default new ConsumptionPage();
