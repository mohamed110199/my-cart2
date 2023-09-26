document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const incrementButton = product.querySelector('.plus');
        const decrementButton = product.querySelector('.minus');
        const quantityElement = product.querySelector('.quantity');

        let quantity = 1;

        incrementButton.addEventListener('click', function() {
            if (quantity < 9) {
                quantity++;
                quantityElement.innerText = quantity;
                decrementButton.disabled = false;
            }

            if (quantity === 9) {
                incrementButton.disabled = true;
            }
        });

        decrementButton.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityElement.innerText = quantity;
                incrementButton.disabled = false;
            }

            if (quantity === 1) {
                decrementButton.disabled = true;
            }
        });
    });
});
