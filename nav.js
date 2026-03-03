document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    // === HEADER ===
    const headerEl = document.querySelector(".banner");
    if (headerEl) {
        headerEl.innerHTML = `
            <h1>Hi I am Red Panda</h1>
            <p>Nice Meeting You!</p>
        `;
    }

    // === NAV ===
    const navEl = document.querySelector(".main-nav");
    if (navEl) {
        navEl.innerHTML = `
            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
            <div class="nav-links" id="navLinks">
                <a href="index.html" ${currentPage === "index.html" ? 'class="active"' : ""}>Home</a>
                <a href="about.html" ${currentPage === "about.html" ? 'class="active"' : ""}>About</a>
                <a href="#">Skills</a>
                <a href="#">Portfolio</a>
                <a href="https://achiichi.github.io/ImKanlayaneeR/" target="_blank">Student Work</a>
                <a href="#">Hobbies</a>
                <a href="contact.html" ${currentPage === "contact.html" ? 'class="active"' : ""}>Contact</a>
            </div>
        `;
    }

    // === FOOTER ===
    const footerEl = document.querySelector(".footer");
    if (footerEl) {
        footerEl.innerHTML = `
            <p>© 2026 Kanlayanee</p>
            <p>Open to opportunities • Let's connect</p>
        `;
    }

    // Toggle menu
    window.toggleMenu = function () {
        document.getElementById("navLinks").classList.toggle("active");
    };

    window.addEventListener("wheel", () => {
        const navLinks = document.getElementById("navLinks");
        if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    }, { passive: true });

    document.addEventListener("click", (e) => {
        const navLinks = document.getElementById("navLinks");
        const menuToggle = document.querySelector(".menu-toggle");
        if (navLinks && navLinks.classList.contains("active")) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("active");
            }
        }
    });

    window.addEventListener("touchmove", () => {
        const navLinks = document.getElementById("navLinks");
        if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    }, { passive: true });
});