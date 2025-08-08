import * as MicroModal from "https://cdn.jsdelivr.net/npm/micromodal@0.4.10/dist/micromodal.min.js";
// import * as moment from "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js";
import { addToCart, removeFromCart } from "./cart.js";

export function renderCategoryCarousel(categories) {
    const carousel = document.querySelector(".category-carousel");
    categories.forEach((category) => {
        const div = document.createElement("div");
        div.className = "category-item";
        div.innerHTML = `<h3>${category}</h3>`;
        div.addEventListener("click", () => {
            const section = document.getElementById(category);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 20,
                    behavior: "smooth",
                });
            }
        });
        carousel.appendChild(div);
    });

    $(carousel).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    });
}

export function renderProductSlider(category, products) {
    const container = document.getElementById("product-sections");
    const section = document.createElement("div");
    section.id = category;
    section.className = "product-section";
    section.innerHTML = `<h2>${category}</h2><div class="swiper-${category} swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div>`;
    container.appendChild(section);

    const swiperWrapper = section.querySelector(
        `.swiper-${category} .swiper-wrapper`
    );
    products.forEach((product) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide product-card";
        slide.innerHTML = `
            <img src="${product.image}" alt="${product.title}" data-id="${
            product.id
        }">
            <h4>${product.title.slice(0, 20)}...</h4>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart" data-id="${
                product.id
            }">Add to Cart</button>
        `;
        swiperWrapper.appendChild(slide);
    });

    new Swiper(`.swiper-${category}`, {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: `.swiper-${category} .swiper-pagination`,
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
        },
    });

    // Add event listeners for add to cart
    section.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const product = products.find((p) => p.id == id);
            const img = button.parentElement.querySelector("img");
            addToCart(product, img);
        });
    });

    // Add event listeners for modal
    section.querySelectorAll("img").forEach((img) => {
        img.addEventListener("click", () => {
            const id = img.getAttribute("data-id");
            const product = products.find((p) => p.id == id);
            showModal(product);
        });
    });
}

export function initTooltips(category) {
    document
        .querySelectorAll(`#${category} .product-card img`)
        .forEach((img) => {
            const productId = img.getAttribute("data-id");
            const product = document
                .querySelector(
                    `#${category} .product-card img[data-id="${productId}"]`
                )
                .parentElement.querySelector("h4").textContent;
            tippy(img, {
                content: product.slice(0, 20) + "...",
                placement: "top",
            });
        });
}

export function showModal(product) {
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    MicroModal.show("product-modal");
    modalContent.querySelector(".add-to-cart").addEventListener("click", () => {
        const img = modalContent.querySelector("img");
        addToCart(product, img);
    });
}

export function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.title.slice(0, 15)}... x${item.qty}</span>
            <span>$${item.price}</span>
            <span>${moment(item.timestamp).fromNow()}</span>
            <button class="remove-from-cart" data-id="${
                item.id
            }">Remove</button>
        `;
        cartItems.appendChild(div);
    });

    document.querySelector(".cart-badge").textContent = cart.length;
    document.querySelectorAll(".remove-from-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            removeFromCart(id);
        });
    });
}
