function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderPageStatus(statusText) {
  document.getElementById('pageStatus').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {

    chrome.storage.local.get("blockingOn", val => {
        let blocking = val.blockingOn
        if (blocking) {
            renderStatus('On')
        } else {
            renderStatus('Off')
        }
    })

    document.getElementById("toggle").addEventListener("click", function() {
        chrome.storage.local.get("blockingOn", val => {
            let blocking = !val.blockingOn
            chrome.storage.local.set({blockingOn: blocking}, () => undefined)
            if (blocking) {
                renderStatus('On')
            } else {
                renderStatus('Off')
            }
        })
    })
})
