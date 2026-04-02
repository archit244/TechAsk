/* =============================================
   GROWTHLAB — app.js
   All interactive behaviors
   ============================================= */

/* === NAVBAR SCROLL EFFECT === */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

/* === HAMBURGER MENU === */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* === FAQ ACCORDION === */
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(fi => {
    fi.classList.remove('open');
    fi.querySelector('.faq-answer').classList.remove('open');
  });

  // Open clicked (unless already open)
  if (!isOpen) {
    item.classList.add('open');
    answer.classList.add('open');
  }
}

/* === FORM SUBMIT === */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn  = document.getElementById('submitBtn');
  const form = document.getElementById('leadForm');
  const success = document.getElementById('formSuccess');

  btn.innerHTML = '<span>Sending…</span>';
  btn.disabled  = true;

  setTimeout(() => {
    form.style.display    = 'none';
    success.style.display = 'block';
  }, 1400);
}

/* === SCROLL ANIMATIONS (Intersection Observer) === */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Animate section titles and content blocks
document.querySelectorAll([
  '[data-animate]',
  '.pain-card',
  '.service-card',
  '.process-step',
  '.result-card',
  '.mini-result',
  '.team-card',
  '.faq-item',
  '.video-wrapper',
  '.solution-card',
  '.section-tag',
  '.section-title',
  '.section-sub',
].join(',')).forEach((el, i) => {
  // Stagger sibling cards without overwriting existing data-animate
  if (!el.hasAttribute('data-animate')) {
    el.setAttribute('data-animate', 'fade-up');
    const siblings = el.parentElement.querySelectorAll('[data-animate="fade-up"]');
    const idx = Array.from(siblings).indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 0.1}s`;
  }
  io.observe(el);
});

/* === VIDEO PLAY PLACEHOLDER === */
function playVideo(playBtn) {
  const wrapper = playBtn.closest('.video-placeholder');
  // Replace placeholder with a YouTube embed (demo video)
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';
  iframe.allow = 'autoplay; fullscreen';
  iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:inherit;';
  wrapper.innerHTML = '';
  wrapper.appendChild(iframe);
}

/* === SMOOTH SCROLL for CTA buttons === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* === COUNTER ANIMATION for stat numbers === */
function animateCounters() {
  document.querySelectorAll('.stat-num, .metric-num').forEach(el => {
    const text = el.textContent.trim();
    const numMatch = text.match(/[\d.]+/);
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const suffix = text.replace(numMatch[0], '');
    const isFloat = text.includes('.');
    let current = 0;
    const duration = 1600;
    const step = target / (duration / 16);

    const update = () => {
      current = Math.min(current + step, target);
      el.textContent = isFloat
        ? current.toFixed(1) + suffix
        : Math.round(current) + suffix;
      if (current < target) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

// Trigger counters once the hero stats come into view
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const counterObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      counterObs.disconnect();
    }
  }, { threshold: 0.5 });
  counterObs.observe(heroStats);
}

/* === LOGO TRACK — pause on hover === */
const logoTrack = document.querySelector('.logo-track');
if (logoTrack) {
  logoTrack.addEventListener('mouseenter', () => logoTrack.style.animationPlayState = 'paused');
  logoTrack.addEventListener('mouseleave', () => logoTrack.style.animationPlayState = 'running');
}

/* === SERVICE CARD micro-interaction === */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect  = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 6;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 6;
    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* === STICKY FORM — highlight after scroll past hero === */
window.addEventListener('scroll', () => {
  const heroSection = document.getElementById('hero');
  const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
  const formCard = document.querySelector('.hero-form-card');
  if (formCard && heroBottom < 0) {
    formCard.style.boxShadow = ''; // already sticky, no extra needed
  }
}, { passive: true });
