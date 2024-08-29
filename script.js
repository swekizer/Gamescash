document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let games = document.querySelectorAll('.game');

    games.forEach(function(game) {
        let title = game.querySelector('p').textContent.toLowerCase();
        if (title.includes(filter)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
});
