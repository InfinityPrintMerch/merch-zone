document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('offerPopup').style.display = 'flex';

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('offerPopup').style.display = 'none';
    });

    document.getElementById('wantButton').addEventListener('click', function() {
        document.getElementById('offerPopup').style.display = 'none';
    });
});
