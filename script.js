function openLink(url) {
    var win = window.open();
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var buttons = document.querySelectorAll(".button");
    var noResultMessage = document.getElementById("noResultMessage");
    var hasResults = false;

    buttons.forEach(function(button) {
        var buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(searchInput)) {
            button.style.display = "block";
            hasResults = true;
        } else {
            button.style.display = "none";
        }
    });

    if (!hasResults) {
        noResultMessage.style.display = "block";
    } else {
        noResultMessage.style.display = "none";
    }
}

