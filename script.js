let historyStack = [];
let currentIndex = -1;

// Function to visit a new page
function visitPage() {
    const urlInput = document.getElementById('url-input').value.trim();

    if (urlInput === '') {
        alert('Please enter a valid URL.');
        return;
    }

    // Remove forward history if visiting a new page
    historyStack = historyStack.slice(0, currentIndex + 1);

    historyStack.push(urlInput);
    currentIndex++;

    document.getElementById('url-input').value = ''; // Clear input
    updateDisplay();
}

// Function to navigate back in history
function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    } else {
        alert('No previous pages.');
    }
}

// Function to navigate forward in history
function goForward() {
    if (currentIndex < historyStack.length - 1) {
        currentIndex++;
        updateDisplay();
    } else {
        alert('No forward pages.');
    }
}

// Function to update the display
function updateDisplay() {
    const currentPageElement = document.getElementById('current-page');
    const historyList = document.getElementById('history-list');

    // Display the current page
    if (currentIndex >= 0) {
        currentPageElement.textContent = historyStack[currentIndex];
    } else {
        currentPageElement.textContent = 'No page visited';
    }

    // Update the history list
    historyList.innerHTML = '';
    historyStack.forEach((url, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = url;
        if (index === currentIndex) {
            listItem.classList.add('current');
        }
        historyList.appendChild(listItem);
    });
}

// Function to search through history
function searchHistory() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const historyList = document.getElementById('history-list');

    historyList.innerHTML = ''; // Clear the current list

    historyStack.forEach((url, index) => {
        if (url.toLowerCase().includes(searchTerm)) {
            const listItem = document.createElement('li');
            listItem.textContent = url;
            if (index === currentIndex) {
                listItem.classList.add('current');
            }
            historyList.appendChild(listItem);
        }
    });
}
