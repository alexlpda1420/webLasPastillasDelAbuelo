// Script to show preview pop-ups on hover
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('mouseover', function(e) {
        const previewText = this.getAttribute('data-preview');
        const previewBox = document.getElementById('preview');
        previewBox.textContent = previewText;
        previewBox.style.display = 'block';
        previewBox.style.top = (e.pageY + 15) + 'px';
        previewBox.style.left = (e.pageX + 15) + 'px';
    });

    link.addEventListener('mousemove', function(e) {
        const previewBox = document.getElementById('preview');
        previewBox.style.top = (e.pageY + 15) + 'px';
        previewBox.style.left = (e.pageX + 15) + 'px';
    });

    link.addEventListener('mouseout', function() {
        const previewBox = document.getElementById('preview');
        previewBox.style.display = 'none';
    });
});
