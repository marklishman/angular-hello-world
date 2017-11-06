import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadindText() {
    return element(by.css('app-hello-world h1')).getText();
  }
}
