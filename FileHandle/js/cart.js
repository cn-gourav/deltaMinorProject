import { updateCartUI } from "./ui.js";

export function initCart() {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
    }
}

export function addToCart(product, imgElement) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1,
            timestamp: Date.now(),
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();

    // Anime.js animation
    const cartIcon = document.querySelector(".cart-panel");
    const imgClone = imgElement.cloneNode();
    imgClone.style.position = "absolute";
    imgClone.style.width = "50px";
    imgClone.style.zIndex = "1000";
    imgElement.parentElement.appendChild(imgClone);

    anime({
        targets: imgClone,
        translateX:
            cartIcon.getBoundingClientRect().left -
            imgElement.getBoundingClientRect().left,
        translateY:
            cartIcon.getBoundingClientRect().top -
            imgElement.getBoundingClientRect().top,
        scale: 0.5,
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
        complete: () => {
            imgClone.remove();
            Toastify({
                text: "Product added!",
                duration: 3000,
                style: { background: "#2ecc71" },
            }).showToast();
        },
    });
}

export function removeFromCart(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "Remove this item from cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!",
    }).then((result) => {
        if (result.isConfirmed) {
            const cart = JSON.parse(localStorage.getItem("cart"));
            const updatedCart = cart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            updateCartUI();
            Toastify({
                text: "Product removed!",
                duration: 3000,
                style: { background: "#e74c3c" },
            }).showToast();
        }
    });
}
