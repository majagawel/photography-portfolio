document.getElementById("header").innerHTML=`
    <header id="header">
        <h1>Maja Gaweł</h1>
        <p class="subtitle">FOTOGRAFIA</p>
        
    </header>
`
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.getElementById("nav").innerHTML=`
    <nav id="nav">
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Strona główna</a>
            <a href="galeria.html" class="${currentPage === 'galeria.html' ? 'active' : ''}">Galeria</a>
            <a href="ja.html" class="${currentPage === 'ja.html' ? 'active' : ''}">O mnie</a>
            <a href="oferta.html" class="${currentPage === 'oferta.html' ? 'active' : ''}">Oferta</a>
            <a href="kontakt.html" class="${currentPage === 'kontakt.html' ? 'active' : ''}">Kontakt</a>
    </nav>
`;

document.getElementById("footer").innerHTML = `
    <p>© 2026 Maja Gaweł</p>
`;

document.getElementById("contactForm").addEventListener("submit", function(e){



});
