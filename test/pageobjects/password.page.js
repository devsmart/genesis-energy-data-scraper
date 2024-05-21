import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PasswordPage extends Page {
  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  async login(password) {
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new PasswordPage();
