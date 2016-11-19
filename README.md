# chrome-ext-module
## Chrome extensions for BearHacks 2016
Planning sheet: https://docs.google.com/document/d/1B4dZ36Z4k3zdYL8274GI88mqfQjPtIs6axWCOvIVz7E/edit

### Setup
1. [Chrome installation help](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB)
2. Download and unpack this repository as a ZIP file
3. Turn on Developer Mode at [extension settings](chrome://extensions)

### Demos
#### _Existing Chrome Extensions_
1. [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en)
2. Adblock
3. Momentum- nice backgrounds on new tabs
4. Video Speed Controller: control speed of YouTube videos using S, D, R keys

#### _Google Search Word Replace_
1. Go to [Google](www.google.com).
2. Right click on the Google Search button, and select **Inspect** from the drop-down menu. You should see a console appear, with a line containing `<input value="Google Search"...` highlighted.
3. Double click on the words `Google Search`, and enter any text that you want. You should see that the words `Google Search` on the webpage are now replaced by your text.
4. Copy and paste the line `document.querySelector('[value="Google Search"]').value = "Hello from BearHacks!"` into the console, and press Enter. What happened? You should see that the text changed.

#### _Facebook Blocker_
1. Open Chrome [extension settings](chrome://extensions)
2. With **Developer Mode** active, click **Load unpacked extension** and load the folder **Facebook Blocker**. You should see a new extension appear in your browser.
3. Click the **FB Blocker icon** and toggle the button until you see the word **Off** change to **On**.
4. Try to open [Facebook](www.facebook.com) in your browser. You should see that the page gets blocked.
5. Now turn off the blocker, reload the page, and right click to select **Inspect** from the drop-down menu. Once the console appears, paste the following line into the console: `document.getElementsByTagName('html')[0].innerHTML = '<head></head><body><div id=blockMessage>BLOCKED</div></body>'`. This is the blocking code for Facebook Blocker. Try tinkering with the text!

#### _Wolfram Alpha Search Bar_

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

### Go build some Chrome Extensions!
Resources:
* [Extensions developer guide](https://developer.chrome.com/extensions)
* [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* If you're more ambitious: [some cool APIs](http://www.creativebloq.com/web-design/apis-developers-need-know-121518469)
* Check watson/background.js for login credentials!
