import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }
  async login(username) {
    await this.inputUsername.setValue(username);
    await this.btnSubmit.click();
  }
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
