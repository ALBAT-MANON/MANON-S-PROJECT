// Example JS to toggle the 'Read more' button
const readMoreButtons = document.querySelectorAll('.news-article button');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('More details about the article will be displayed!');
    });
});