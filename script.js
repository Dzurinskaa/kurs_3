
// Фильтрация по цене
document.getElementById("filterButton").addEventListener("click", function () {
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;

    const dishes = document.querySelectorAll(".menu-card");

    dishes.forEach(dish => {
        const price = parseInt(dish.getAttribute("data-price"));
        if (price >= minPrice && price <= maxPrice) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    });
});

// Поиск по названию или ингредиентам
document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const dishes = document.querySelectorAll(".menu-card");

    dishes.forEach(dish => {
        const title = dish.querySelector(".menu-title").textContent.toLowerCase();
        const description = dish.querySelector(".menu-description").textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    });
});
