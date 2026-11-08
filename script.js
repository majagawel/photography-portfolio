document.getElementById("header").innerHTML=`
    <header id="header">
        <h1>Maja Gaweł</h1>
        <p class="subtitle">FOTOGRAFIA</p>
        
    </header>
`
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.getElementById("nav").innerHTML=`
    <button class="menu-toggle" type="button"
            aria-label="Otwórz menu"
            aria-expanded="false"
            aria-controls="primary-menu">
        <span aria-hidden="true">&#9776;</span>
    </button>
    <div class="nav-links" id="primary-menu">
        <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Strona główna</a>
        <a href="galeria.html" class="${currentPage === 'galeria.html' ? 'active' : ''}">Galeria</a>
        <a href="ja.html" class="${currentPage === 'ja.html' ? 'active' : ''}">O mnie</a>
        <a href="oferta.html" class="${currentPage === 'oferta.html' ? 'active' : ''}">Oferta</a>
        <a href="kontakt.html" class="${currentPage === 'kontakt.html' ? 'active' : ''}">Kontakt</a>
    </div>
`;

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
});


const categoryToggle = document.querySelector(".category-toggle");
const categories = document.getElementById("categories");

if (categoryToggle && categories) {
    categoryToggle.addEventListener("click", () => {
        const isOpen = categories.classList.toggle("is-open");
        categoryToggle.setAttribute("aria-expanded", String(isOpen));
    });

    categories.addEventListener("click", (event) => {
        if (event.target.closest(".button")) {
            categories.classList.remove("is-open");
            categoryToggle.setAttribute("aria-expanded", "false");
        }
    });
}

document.getElementById("footer").innerHTML = `
    <p>© 2026 Maja Gaweł</p>
`;

