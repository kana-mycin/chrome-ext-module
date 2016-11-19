function blockPage() {
    return document.getElementsByTagName('html')[0].innerHTML = '<head></head><body><div id=blockMessage>BLOCKED</div></body>'
}

function doStuff() {
    // --- FILL IN ANY STUFF YOU WANT YOUR EXTENSION TO DO ---
    blockPage();
}

// don't worry about this line
window.addEventListener("load", doStuff, false)
