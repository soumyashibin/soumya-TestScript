// spec.js
describe('Protractor Demo App', function() {
    it('CMNR Login', function() {
      browser.get('http://app.rawdatatech.com');
      element(by.id('username')).sendKeys('corporate');
      element(by.id('pass')).sendKeys('cmnr1234');
      element(by.id('login')).click();
       browser.driver.manage().window().setSize(1500, 5000);
       element(by.className('fa fa-power-off')).click();
       
    });
  });