document.addEventListener('DOMContentLoaded', function() {
    const loveCalculator = document.querySelector('.love-calculator strong');
    loveCalculator.addEventListener('mouseover', function() {
        loveCalculator.style.color = 'red';
    });
    loveCalculator.addEventListener('mouseout', function() {
        loveCalculator.style.color = '';
    });
});

