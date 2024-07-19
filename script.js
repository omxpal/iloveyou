document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF3388'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffc0cb';
    this.style.display = 'none';
});
