const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableProducts = document.querySelectorAll(".products");

const applyFilter = e => {
    document.querySelector(".filter_buttons button.active").classList.remove("active");
    e.target.classList.add("active");

    filterableProducts.forEach(products => {
        products.classList.add("hide");

        if (products.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            products.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", applyFilter));