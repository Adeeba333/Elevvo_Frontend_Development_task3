var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

var root = document.documentElement;
var toggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '\u2600' : '\u263E';
    toggle.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

applyTheme(root.getAttribute('data-theme') || 'dark');

toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
});

/* signup/login */
var modal = document.getElementById('authModal');
var signupForm = document.getElementById('signupForm');
var loginForm = document.getElementById('loginForm');
var tabs = document.querySelectorAll('.tab');

function showTab(name) {
    tabs.forEach(function (t) {
        var on = t.dataset.tab === name;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on);
    });
    signupForm.hidden = name !== 'signup';
    loginForm.hidden = name !== 'login';
}
function toggleModal(show) {
    modal.hidden = !show;
    document.body.style.overflow = show ? 'hidden' : '';
    if (show) document.querySelectorAll('.form-msg').forEach(function (m) { m.textContent = ''; });
}

document.getElementById('openAuth').onclick = function () { showTab('signup'); toggleModal(true); };
document.getElementById('closeAuth').onclick = function () { toggleModal(false); };
modal.onclick = function (e) { if (e.target === modal) toggleModal(false); };
document.onkeydown = function (e) { if (e.key === 'Escape') toggleModal(false); };
tabs.forEach(function (t) { t.onclick = function () { showTab(t.dataset.tab); }; });

[signupForm, loginForm].forEach(function (form) {
    form.onsubmit = function (e) {
        e.preventDefault();
        form.querySelector('.form-msg').textContent = 'Done!';
        form.reset();
    };
});

/* mobile menu */
var menuBtn = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.textContent = open ? '\u2715' : '\u2630';
}

menuBtn.onclick = function () { setMenu(!navLinks.classList.contains('open')); };
navLinks.onclick = function (e) { if (e.target.tagName === 'A') setMenu(false); };