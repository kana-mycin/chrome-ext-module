function blockPage() {
    return document.getElementsByTagName('html')[0].innerHTML = '<head></head><body><div id=blockMessage>FACEBOOK BLOCKED</div></body>'
}

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.action = "blockPage") {
//             blockPage()
//             sendResponse({err: 'successfully blocked'})
//         }
//     }
// )
//
// function sendLoaded() {
//     chrome.runtime.sendMessage({loaded: true, domain: document.domain}, function(response) {
//         console.log(response)
//         if (response.action == "blockPage") {
//             blockPage()
//         }
//     })
// }

// window.addEventListener("load", sendLoaded, false)
