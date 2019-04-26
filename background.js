

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({name: '#3aa757',password:'test'}, function() {
    console.log("The color is green.");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      // pageUrl: {hostEquals: 'developer.chrome.com'},
      css: ["input[type='password']"]
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});


