function renderGreeting(text) {
  document.getElementById('greeting').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    renderGreeting('Welcome to the popup!')
})
