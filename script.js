// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2000);
});

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// NAV SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});

// TYPING EFFECT
const phrases = ['JavaScript Developer', 'React Developer', 'Node.js Developer', 'AI Learner', 'MERN Stack Developer'];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-text');
function type() {
  const current = phrases[pi];
  if (!deleting) {
    typedEl.textContent = current.substring(0, ci + 1);
    ci++;
    if (ci === current.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    typedEl.textContent = current.substring(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
setTimeout(type, 500);

// PARTICLES
(function() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  window.addEventListener('resize', resize); resize();
  for (let i = 0; i < 60; i++) {
    particles.push({ x: Math.random()*1400, y: Math.random()*800, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3, r: Math.random()*1.5+0.5, a: Math.random() });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(0,255,136,${p.a * 0.4})`;
      ctx.fill();
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[j].x - p.x, dy = particles[j].y - p.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,255,136,${(1-dist/120)*0.08})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      // Animate skill bars
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    status.textContent = '✓ Message sent! I\'ll get back to you soon.';
    this.reset();
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    setTimeout(() => { status.textContent = ''; }, 5000);
  }, 1500);
});
