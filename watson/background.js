// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

// function getCurrentTabUrl(callback) {
//   // Query filter to be passed to chrome.tabs.query - see
//   // https://developer.chrome.com/extensions/tabs#method-query
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };
//
//   chrome.tabs.query(queryInfo, function(tabs) {
//     var tab = tabs[0];
//     var url = tab.url;
//     console.assert(typeof url == 'string', 'tab.url should be a string');
//     callback(url);
//   });
//
// }

username = "8e3879cb-8975-4ebf-964e-146ffeb90646";
password = "Vf4XuewEqVyE";
watsonToneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&text="
function analyzeTone(string) {
    var req = new XMLHttpRequest();
    req.open("GET", watsonToneUrl + encodeURIComponent(string), false, username, password);
    req.send(null)
    return req.response
}

chrome.omnibox.onInputEntered.addListener(function (text) {
    var responseJSON = analyzeTone(text);
    var response = JSON.parse(responseJSON);
    emotion_tones = response['document_tone']['tone_categories'][0];
    anger_score = emotion_tones['tones'][0].score;
    alert("Anger level (0-10): " + 10 * anger_score);

});
