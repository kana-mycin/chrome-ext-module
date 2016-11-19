
// This sets the description for the default suggestion
chrome.omnibox.setDefaultSuggestion({
  description: "Ask WolframAlpha anything!"
});

// This event is fired only the very first time the user types
chrome.omnibox.onInputStarted.addListener(function() {
    console.log("The user started to type something");
});

// This event is fired whenever the user types
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
      {content: "https://www.wolframalpha.com/input/?i=" + encodeURIComponent(text), description: "You've typed: " + text},
    ]);
});

// This event is fired when the user hits enter in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    // We redirect the current tab's URL to point to Wolfram Alpha
    chrome.tabs.getSelected(null, function(tab)
        {
            // The ?i= component is called a query string. It passes information to the page so the page knows what you want,
            // kind of like an argument getting passed in to a function
            // We need to encode text for it to make sense in the url. For example, you can't have spaces in urls.
            chrome.tabs.update(tab.id, {url: "https://www.wolframalpha.com/input/?i=" + encodeURIComponent(text)});
        });
  });

// This event is fired when the user backs out of the omnibox
chrome.omnibox.onInputCancelled.addListener(function(){
  console.log("The user didn't use our wolfram shortcut after all. Oh well");
})