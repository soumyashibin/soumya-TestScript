exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['cmnrlogin.js'],
 capabilities: {
    'browserName': 'chrome'
 },
 onPrepare: function() {
  // Override the timeout for webdriver.
  browser.driver.manage().timeouts().implicitlyWait(60000);
},

};