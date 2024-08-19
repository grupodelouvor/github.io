document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#playlist .playlist-item');

    items.forEach(item => {
        const title = item.querySelector('.song-info h3').textContent.toLowerCase();
        const artist = item.querySelector('.song-info p').textContent.toLowerCase();
        if (title.includes(query) || artist.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
