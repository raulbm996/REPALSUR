// Toggle mobile menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a:not(.lang-switch a)').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('open');
    });
});

// Back to top
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 400) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Cookies banner
function closeCookies() {
    document.getElementById('cookiesBanner').classList.remove('show');
    localStorage.setItem('cookiesAccepted', 'true');
}

// Check if cookies already accepted
if (localStorage.getItem('cookiesAccepted') === 'true') {
    document.addEventListener('DOMContentLoaded', () => {
        const banner = document.getElementById('cookiesBanner');
        if (banner) banner.classList.remove('show');
    });
}

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Toggle noticia expandir/contraer
function toggleNoticia(btn) {
    const card = btn.closest('.noticia-card');
    const isExpanded = card.classList.toggle('expanded');
    const lang = localStorage.getItem('lang') || 'es';

    if (typeof translations !== 'undefined') {
        const key = isExpanded ? 'not.readless' : 'not.readmore';
        if (translations[key] && translations[key][lang]) {
            btn.innerHTML = translations[key][lang];
        }
    } else {
        if (isExpanded) {
            btn.innerHTML = (lang === 'en' ? 'Read less' : 'Leer menos') + ' <i class="fas fa-arrow-up"></i>';
        } else {
            btn.innerHTML = (lang === 'en' ? 'Read more' : 'Leer más') + ' <i class="fas fa-arrow-right"></i>';
        }
    }
}
