'use strict';

var {Given,When, Then} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(220 * 1000);

const hooks = require('../support/hooks/hooks');
const {Builder, until} = require('selenium-webdriver');

let h1 = new hooks()


Given('the contant should equal to {string}', async function (value) {
  // Write code here that turns the phrase above into concrete actions
const delay = require('delay');
//const wd = require('wd');
//const driver = wd.promiseChainRemote('localhost',4723)
var assert= require ('assert')



var desiredCaps = {
  deviceName: 'Bader',
  platformName: 'Android',
  platformVersion: '5.0.2',
  app:'//Users//Shared//Jenkins//Home//workspace//Install_dependencies//test//platforms//android//app//build//outputs//apk//debug//app-debug.apk',
  appPackage:'io.ionic.starter',
  autoGrantPermissions:true,
  unicodeKeyboard:true,
  resetKeyboard:true
};
  		
  	
await driver.init(desiredCaps);
await delay(10000);
//await driver.setImplicitWaitTimeout(10000);

//let el1 = await driver.elementById('parid');
//let element = await driver.elements("id", "paridd");
//let elementsOne = await driver.elementsByName("elementpar");
//let el1 = await driver.findElements(By.id("io.ionic.starter:id/parid"))
let el1 = await driver.elementById("parid");
//let elementsOne = await driver.elementByXpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View');

console.log(await el1.text());
assert.equal(await el1.text(), value);

	

});


Given('the contant should equal II to {string}', async function (value) {
  // Write code here that turns the phrase above into concrete actions
  var assert= require ('assert')
  var x = "Hello CICDD";
  assert.equal(x, value);


});
