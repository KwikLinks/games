   function openLink(url) {
        var win = window.open();
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }

    function sortButtonsAlphabetically() {
        var buttonContainer = document.getElementById("buttonContainer");
        var buttons = Array.from(buttonContainer.getElementsByClassName("button"));

        buttons.sort(function(a, b) {
            var textA = a.textContent.toLowerCase();
            var textB = b.textContent.toLowerCase();
            return textA.localeCompare(textB);
        });

        buttonContainer.innerHTML = "";

        var currentSection = "";
        buttons.forEach(function(button) {
            var buttonText = button.textContent.toLowerCase();
            var firstChar = buttonText.charAt(0).toUpperCase();
            
            if (currentSection !== firstChar && (firstChar >= 'A' && firstChar <= 'Z')) {
                currentSection = firstChar;
                var sectionHeader = document.createElement("div");
                sectionHeader.className = "section-header";
                sectionHeader.textContent = currentSection;
                buttonContainer.appendChild(sectionHeader);
            }

            buttonContainer.appendChild(button);
        });
    }

    function search() {
        var searchInput = document.getElementById("searchInput").value.toLowerCase();
        var buttons = document.querySelectorAll(".button");
        var noResultMessage = document.getElementById("noResultMessage");
        var hasResults = false;

        buttons.forEach(function(button) {
            var buttonText = button.textContent.toLowerCase();
            if (buttonText.includes(searchInput)) {
                button.style.display = "inline-block";
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

    // Sort buttons alphabetically initially
    sortButtonsAlphabetically();
