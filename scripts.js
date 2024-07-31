document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', () => {
        const paragraph = document.querySelector('main section p');
        paragraph.style.color = paragraph.style.color === 'blue' ? 'black' : 'blue';
    });
});
