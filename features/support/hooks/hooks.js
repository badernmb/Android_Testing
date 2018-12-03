
var hooks =  function (){

var {After, Before, Status} = require('cucumber');
var {AfterAll, BeforeAll} = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');


Before(async function () {
const wd = require('wd');
driver = wd.promiseChainRemote('localhost',4723)


});

Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo

});

// You can use the following shorthand when only specifying tags



After(async function (testCase) {
   var world = this;

  if (testCase.result.status === Status.FAILED) {
     return await driver.takeScreenshot().then(async function(screenShot) {
    world.attach(screenShot, 'image/png');
    await driver.quit()
    });

  }
  await driver.quit()
  });

}
  module.exports = hooks;
