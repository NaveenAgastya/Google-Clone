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
