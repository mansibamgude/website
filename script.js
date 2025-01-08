// Add interactive animations if required
document.querySelector('.title').addEventListener('mouseover', function () {
    this.style.color = '#ffcc00';
    this.style.transition = 'color 0.3s';
});
document.querySelector('.title').addEventListener('mouseleave', function () {
    this.style.color = 'white';
});
