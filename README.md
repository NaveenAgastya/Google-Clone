# Google Clone

A simple Google search clone that lets users input a query and open the results in the same window. This project demonstrates the use of HTML, CSS, and JavaScript for creating an interactive search input with functionality for clearing the input and performing a Google search.

## Features

- **Search Input**: Users can type a query, and clicking the search icon redirects to Google’s search results for that query.
- **Clear Input Button**: The cross  icon (acting as a "clear" button) appears when there is text in the input field and clears the input when clicked.

## Tech Stack

- **HTML**
- **CSS**
- **JavaScript**

## Code Overview

The main components of this project are:

1. **HTML**: Provides the structure, including the search input field, the  clear icon, and the search icon.
2. **CSS**: Styles the page elements for a simple and user-friendly interface.
3. **JavaScript**: Adds interactivity, including clearing the input and redirecting to Google search.

## How It Works

1. **Clear Input**: When the user types in the input field, the "clear" icon appears. Clicking it will clear the input and hide the icon.
2. **Search Redirect**: When the user clicks the search icon, the page redirects to Google with the entered search query.

## Code Explanation

```javascript
const clean = document.getElementsByClassName('mic')[0];
let input = document.getElementById('search');
let search = document.getElementsByClassName('searcicon')[0];

clean.addEventListener('click', () => {
    input.value = '';
    clean.style.display = 'none';  // Hide the 'mic' element after clearing input
});

window.addEventListener('keydown', () => {
    if (input.value.length > 0) {
        clean.style.display = 'block';
    } else {
        clean.style.display = 'none'; // Hide the 'mic' element when input is empty
    }
});

search.addEventListener('click', () => {
    window.location.href = `https://www.google.com/search?q=${input.value}`;
});
