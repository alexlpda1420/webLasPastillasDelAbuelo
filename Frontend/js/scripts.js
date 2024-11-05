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

document.addEventListener('DOMContentLoaded', () => {
    const previewLinks = document.querySelectorAll('.preview-link');
    const previewDiv = document.getElementById('preview');
    
    previewLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            const href = link.getAttribute('href');
            previewDiv.innerHTML = `<iframe src="${href}" loading="lazy"></iframe>`;
            previewDiv.style.display = 'block';
            const rect = link.getBoundingClientRect();
            previewDiv.style.top = `${rect.bottom + window.scrollY}px`;
            previewDiv.style.left = `${rect.left}px`;
        });

        link.addEventListener('mouseout', () => {
            previewDiv.style.display = 'none';
        });
    });
});

async function getUsers() 
{
    try {
        const response = await axios.get('https://laspastillasdelabuelo.onrender.com/users');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    
}

async function getAlbums() 
{
    try {
        const response = await axios.get('https://laspastillasdelabuelo.onrender.com/albums');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    
}
getUsers();
getAlbums();
 


