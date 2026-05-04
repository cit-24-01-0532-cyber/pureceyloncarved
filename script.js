document.querySelectorAll('.shop-now-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.closest('.gallery-item');
        
        // Get data from attributes
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');
        const desc = item.getAttribute('data-desc');
        const size = item.getAttribute('data-size');
        const ship = item.getAttribute('data-ship');
        const img = item.querySelector('img').src;

        // Hide Gallery & Show Details
        document.getElementById('gallerySection').style.display = 'none';
        document.getElementById('productDetail').style.display = 'block';

        // Set Content
        document.getElementById('detailTitle').innerText = name;
        document.getElementById('detailPrice').innerText = price;
        document.getElementById('detailDesc').innerText = desc;
        document.getElementById('detailSize').innerText = size;
        document.getElementById('detailShip').innerText = ship;
        document.getElementById('detailImg').src = img;

        // Trigger Animation
        setTimeout(() => {
            document.querySelector('.detail-left').classList.add('animate-in');
        }, 100);
    });
});
