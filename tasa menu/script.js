// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close menu after clicking link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// CATEGORY FILTER
// ===============================

const categories =
    document.querySelectorAll(".category");

const foodCards =
    document.querySelectorAll(".food-card");

const noResult =
    document.getElementById("noResult");


categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

        const selected =
            category.dataset.category;

        let visible = 0;

        foodCards.forEach(card => {

            const cardCategory =
                card.dataset.category;

            if (
                selected === "all" ||
                selected === cardCategory
            ) {

                card.style.display = "";

                visible++;

            } else {

                card.style.display = "none";

            }

        });

        noResult.style.display =
            visible === 0 ? "block" : "none";

    });

});


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
        .trim()
        .toLowerCase();

    let visible = 0;

    foodCards.forEach(card => {

        const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        const description =
            card.querySelector("p")
            .textContent
            .toLowerCase();

        if (
            title.includes(search) ||
            description.includes(search)
        ) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });

    noResult.style.display =
        visible === 0 ? "block" : "none";

});


// ===============================
// IMAGE MODAL
// ===============================

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


document.querySelectorAll(".food-image img").forEach(image => {

    image.addEventListener("click", () => {

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        imageModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeImageModal() {

    imageModal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener("click", closeImageModal);


imageModal.addEventListener("click", event => {

    if (event.target === imageModal) {
        closeImageModal();
    }

});


// Close with ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeImageModal();
    }

});


// ===============================
// BACK TO TOP
// ===============================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// ACTIVE NAV
// ===============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// IMAGE ERROR
// ===============================

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.background = "#151515";

        image.style.objectFit = "contain";

    });

});