// Função para remover acentos
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

document.getElementById('search').addEventListener('input', function() {
    const query = removeAccents(this.value.toLowerCase());
    const items = document.querySelectorAll('#playlist .playlist-item');

    items.forEach(item => {
        const title = removeAccents(item.querySelector('.song-info h3').textContent.toLowerCase());
        const artist = removeAccents(item.querySelector('.song-info p').textContent.toLowerCase());
        if (title.includes(query) || artist.includes(query)) {
            item.style.display = ''; // Mostra o item
        } else {
            item.style.display = 'none'; // Oculta o item
        }
    });
});

document.getElementById('clear-search').addEventListener('click', function() {
    document.getElementById('search').value = '';
    const items = document.querySelectorAll('#playlist .playlist-item');
    items.forEach(item => {
        item.style.display = ''; // Mostra todos os itens
    });
});
