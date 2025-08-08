export async function fetchCategories() {
    const skeleton = document.createElement("div");
    skeleton.className = "loading-skeleton";
    skeleton.style.height = "100px";
    document.querySelector(".category-carousel").appendChild(skeleton);

    try {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const categories = await response.json();
        skeleton.remove();
        return categories;
    } catch (error) {
        skeleton.remove();
        throw error;
    }
}

export async function fetchProductsByCategory(category) {
    const skeleton = document.createElement("div");
    skeleton.className = "loading-skeleton";
    skeleton.style.height = "200px";
    document.getElementById("product-sections").appendChild(skeleton);

    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok)
            throw new Error(`Failed to fetch products for ${category}`);
        const products = await response.json();
        skeleton.remove();
        return products;
    } catch (error) {
        skeleton.remove();
        throw error;
    }
}
