// ======================================================
// ARTOOLS Pigmentum — Interatividades (Produção)
// ======================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ──── Header Load Animation ──── */
  setTimeout(() => {
    document.getElementById('site-header').classList.add('loaded');
  }, 100);

  /* ──── Reveal Animations (Scroll) ──── */
  const repRevealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.classList.contains('text-reveal-wrapper')) {
          entry.target.classList.add('reveal-active');
        } else {
          entry.target.querySelectorAll('.text-reveal-wrapper').forEach(el => {
            el.classList.add('reveal-active');
          });
        }
      }
    });
  }, repRevealOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
  document.querySelectorAll('.text-reveal-wrapper').forEach(el => {
    revealObserver.observe(el);
  });

  /* ──── Theme Toggle (Light / Dark Mode) ──── */
  const themeToggleBotao = document.getElementById('themeToggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  const rootHtml = document.getElementById('html-root');
  
  const savedTheme = localStorage.getItem('artools-theme');
  if (savedTheme === 'dark') {
    rootHtml.classList.add('dark');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'block';
  }

  themeToggleBotao.addEventListener('click', () => {
    rootHtml.classList.toggle('dark');
    
    if (rootHtml.classList.contains('dark')) {
      localStorage.setItem('artools-theme', 'dark');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      localStorage.setItem('artools-theme', 'light');
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  });

  /* ──── Video Sound Toggle ──── */
  const penVideo = document.getElementById('pen-video');
  const soundToggleBtn = document.getElementById('soundToggle');
  const iconMuted = document.getElementById('icon-muted');
  const iconSound = document.getElementById('icon-sound');

  if (penVideo && soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (penVideo.muted) {
        penVideo.muted = false;
        iconMuted.style.display = 'none';
        iconSound.style.display = 'block';
      } else {
        penVideo.muted = true;
        iconMuted.style.display = 'block';
        iconSound.style.display = 'none';
      }
    });
  }

  /* ──── Bento Grid Flashlight Effect ──── */
  const bentoCards = document.querySelectorAll('.bc');
  bentoCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });

});
