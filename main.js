document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    button1.addEventListener('click', function() {
        window.location.href = 'pages/page1.html';
    });

    button2.addEventListener('click', function() {
        window.location.href = 'pages/page2.html';
    });
});