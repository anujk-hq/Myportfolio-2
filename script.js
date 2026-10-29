
const searchInput = document.getElementById("project-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjects = document.getElementById("no-projects");

let selectedCategory = "all";

function filterProjects() {
    const searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    projectCards.forEach(function(card) {
        const category = card.dataset.category;
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        const matchesSearch =
            card.textContent.toLowerCase().includes(searchText);

        const show = matchesCategory && matchesSearch;
        card.hidden = !show;

        if (show) visibleCount++;
    });

    noProjects.hidden = visibleCount !== 0;
}

if (searchInput){
searchInput.addEventListener("input", filterProjects);
}
if (filterButtons.length>0){
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterProjects();
    });
});
}


const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        

        const name = document.getElementById("name").value.trim();
        const status = document.getElementById("form-status");

        status.textContent =
            `Thanks, ${name}! The form is working, but message sending is not connected yet.`;

        contactForm.reset();
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    if (!themeButton) return;

    function updateThemeButton() {
        const isLight = document.body.classList.contains("light-theme");

        themeButton.textContent = isLight
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";
    }

    updateThemeButton();

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        localStorage.setItem("theme", isLight ? "light" : "dark");

        updateThemeButton();
    });
});



document.addEventListener("DOMContentLoaded", function () {
   
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    backToTopButton.style.display = "none";
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
}
});
