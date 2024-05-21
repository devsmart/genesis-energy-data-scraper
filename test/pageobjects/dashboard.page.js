import { $ } from "@wdio/globals";
import Page from "./page.js";

class DashboardPage extends Page {
  get title() {
    return $(".title");
  }
}

export default new DashboardPage();
