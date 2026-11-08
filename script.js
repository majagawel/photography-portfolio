document.getElementById("header").innerHTML=`
        <h1>Maja Gaweł</h1>
        <p class="subtitle">FOTOGRAFIA</p>
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

document.getElementById("footer").innerHTML = `
    <div class="footer-content">
        <p>© 2026 Maja Gaweł</p>
        <div class="social-links">
            <a href="https://www.instagram.com/maja.gawel06/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100059782929701&locale=pl_PL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/majagawel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/maja-gawe%C5%82-3479b0367/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
        </div>

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


window.addEventListener("load", function () {
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.classList.add("loader-hidden");

});



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.button-form');
        const originalBtnText = submitBtn.value || submitBtn.textContent;
        
        if (submitBtn.tagName === 'INPUT') {
            submitBtn.value = "Wysyłanie...";
        } else {
            submitBtn.textContent = "Wysyłanie...";
        }

        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                contactForm.innerHTML = `
                    <div style="text-align: center; padding: 30px 10px;">
                        <h3 class="windsong-regular" style="font-size: 3rem; color: var(--accent-dark); margin-bottom: 10px;">Dziękuję!</h3>
                        <p style="font-size: 1.1rem; opacity: 0.9;">Twoja wiadomość została wysłana. Odpowiem najszybciej, jak to możliwe.</p>
                    </div>
                `;
            } else {
                alert("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
                if (submitBtn.tagName === 'INPUT') {
                    submitBtn.value = originalBtnText;
                } else {
                    submitBtn.textContent = originalBtnText;
                }
            }
        })
    });
}
