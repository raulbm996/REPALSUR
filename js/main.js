// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    document.body.classList.toggle('menu-open', isOpen);

    let overlay = document.getElementById('menuOverlay');
    if (isOpen) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'menuOverlay';
            overlay.className = 'menu-overlay';
            overlay.addEventListener('click', toggleMenu);
            document.body.appendChild(overlay);
        }
        overlay.classList.add('active');
    } else {
        if (overlay) overlay.classList.remove('active');
    }
}

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a:not(.lang-switch a)').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('open');
        document.body.classList.remove('menu-open');
        const overlay = document.getElementById('menuOverlay');
        if (overlay) overlay.classList.remove('active');
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
    // Immediately show elements already in viewport on page load
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
});

// ===== ENVÍO DE FORMULARIOS (Formspree) =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contacto-form, .footer-form').forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            const lang = localStorage.getItem('lang') || 'es';

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (lang === 'en' ? 'Sending...' : 'Enviando...');
            btn.disabled = true;

            const formData = new FormData(form);

            try {
                const response = await fetch('https://formspree.io/f/xzdaejvp', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                });

                if (response.ok) {
                    const successMsg = lang === 'en'
                        ? 'Message sent successfully! We will contact you soon.'
                        : '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.';
                    showFormMessage(form, 'success', successMsg);
                    form.reset();
                } else {
                    const errorMsg = lang === 'en'
                        ? 'There was an error sending the message. Please try again.'
                        : 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
                    showFormMessage(form, 'error', errorMsg);
                }
            } catch (error) {
                const connMsg = lang === 'en'
                    ? 'Connection error. Please try again later.'
                    : 'Error de conexión. Por favor, inténtalo más tarde.';
                showFormMessage(form, 'error', connMsg);
            }

            btn.innerHTML = originalHTML;
            btn.disabled = false;
        });
    });
});

function showFormMessage(form, type, text) {
    const existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'form-message form-message-' + type;
    msg.textContent = text;
    form.appendChild(msg);

    setTimeout(() => { if (msg.parentNode) msg.remove(); }, 6000);
}

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
