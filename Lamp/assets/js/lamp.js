var body = document.body;
var button = document.getElementById('toggle-btn');
var darkClass = 'off';

button.addEventListener('click', function () {
    body.classList.toggle(darkClass);
});