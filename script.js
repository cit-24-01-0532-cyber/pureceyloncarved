document.querySelectorAll('.btn-blue').forEach(button => {
    button.onclick = function() {
        const card = this.parentElement.parentElement;
        const img = card.querySelector('img').src;
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('.price').innerText;

        document.getElementById('modalImg').src = img;
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalPrice').innerText = price;
        
        // Custom info for each mask
        if(title.includes("Mayura")) {
            document.getElementById('modalSize').innerText = "12x15 inches";
            document.getElementById('modalDescription').innerText = "Bringing peace and harmony to your home.";
        }

        document.getElementById('productModal').style.display = "block";
    }
});

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('productModal').style.display = "none";
}