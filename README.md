# chrome-ext-module
## Chrome extensions for BearHacks 2016
Planning sheet: https://docs.google.com/document/d/1B4dZ36Z4k3zdYL8274GI88mqfQjPtIs6axWCOvIVz7E/edit

### Setup
1. [Chrome installation help](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB)
2. Download and unpack this repository as a ZIP file
3. Turn on Developer Mode at [extension settings](chrome://extensions)

#### How to load Chrome extensions:
1. Open Chrome [extension settings](chrome://extensions)
2. With **Developer Mode** active, click **Load unpacked extension** and load the folder containing the extension. You should see a new extension appear in your browser.

### Demos
#### _Existing Chrome Extensions_
1. [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en)
2. Adblock
3. Momentum- nice backgrounds on new tabs
4. Video Speed Controller: control speed of YouTube videos using S, D, R keys

#### _Google Search Word Replace Exercise_
1. Go to [Google](www.google.com).
2. Right click on the Google Search button, and select **Inspect** from the drop-down menu. You should see a console appear, with a line containing `<input value="Google Search"...` highlighted.
3. Double click on the words `Google Search`, and enter any text that you want. You should see that the words `Google Search` on the webpage are now replaced by your text.
4. Copy and paste the line `document.querySelector('[value="Google Search"]').value = "Hello from BearHacks!"` into the console, and press Enter. What happened? You should see that the text changed.

#### _Facebook Blocker_
1. Load the Facebook Blocker extension
2. Click the **FB Blocker icon** and toggle the button until you see the word **Off** change to **On**.
3. Try to open [Facebook](www.facebook.com) in your browser. You should see that the page gets blocked.
4. Now turn off the blocker, reload the page, and right click to select **Inspect** from the drop-down menu. Once the console appears, paste the following line into the console: `document.getElementsByTagName('html')[0].innerHTML = '<head></head><body><div id=blockMessage>BLOCKED</div></body>'`. This is the blocking code for Facebook Blocker. Try tinkering with the text!

#### _Watson Tone Analyzer Omnibox_
1. Load the tone analyzer extension (folder name: **watson**)
2. Open any browser tab, and type `anger?` followed by the **Tab** key. You should see a prompt pop up that says: _How angry is this person from 1-10?_
3. Enter in or copy paste some text whose anger level you'd like to analyze, and press **Enter**.
4. Check out the rating in the pop up window. :)

#### _Cloud To Butt_
1. Load the text replacement extension (folder name: **cloud-to-butt**)
2. Open a website that mentions the Cloud a lot. Try [wikipedia](https://en.wikipedia.org/wiki/Cloud_computing).
3. Look in cloud-to-butt/content_script.js. Uncomment some of the lines in handleText to replace more things!
4. Try writing your own regex to replace other common words or funny phrases

#### _Wolfram Shortcut_
1. Load the wolfram shortcut extension (folder name: **wolfram-shortcut**)
2. Open any browser tab, and type `wolfram` followed by the **Tab** key. You should see a prompt pop up that says: _Wolfram Shortcut|_
3. Type in `How many calories in a cubic lightyear of butter` and hit enter
4. Look in wolfram-shortcut/background.js to see what you can change and improve on!


### Fundamentals
#### _Intro to Coding in JavaScript_
Basic ideas:
* variables
* functions
* loops
* arrays and "maps"

Useful methods:
* str.replace(oldString, newString)
* str.includes(searchString)
* document.getElementByTagName, getElementById, querySelector

#### _Chrome Extension Resources_
* [Read the background page's console.log](http://stackoverflow.com/questions/10257301/where-to-read-console-messages-from-background-js-in-a-chrome-extension)
* [Chrome APIs](https://developer.chrome.com/extensions/api_index)
* [Architecture Overview](https://developer.chrome.com/extensions/overview)
* Always remember to reload your extension when you test it!

### Go build some Chrome Extensions!
Resources:
* [Extensions developer guide](https://developer.chrome.com/extensions)
* [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* If you're more ambitious: [some cool APIs](http://www.creativebloq.com/web-design/apis-developers-need-know-121518469)
* Check watson/background.js for login credentials!
