// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

function getCurrentTabUrl() {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    return url;
  });

}

function shouldBlock(blockUrl) {
    to_block = ['facebook.com']
    for (url of to_block) {
        console.log(url)
        console.log(blockUrl)
        if (blockUrl.indexOf(url) != -1) {
            return true
        }
    }
    return false
}

var blocking = false;

function updateBlock() {
    chrome.storage.local.get("blockingOn", val => {
        blocking = val.blockingOn
        console.log(blocking)
    })
    setTimeout(updateBlock, 500)
}

updateBlock()

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    if (blocking && shouldBlock(request.domain)) {
        sendResponse({action: "blockPage"})
    } else {
        sendResponse({action: "none"})
    }
}, false);
