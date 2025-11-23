// ===============================
//  AI Activation Academy - Script
//  Functional + Interactive Version
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  console.log("✅ Script loaded successfully");

  // ---------- 1️⃣ Smooth Scroll for Navigation ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
/*
  // ---------- 2️⃣ Mobile Menu Toggle ----------
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.style.display =
        navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  // ---------- 🟣 Join the Academy Button (Header) ----------
  const joinHeaderBtn = document.querySelector('#join-header-btn');
  if (joinHeaderBtn) {
    joinHeaderBtn.addEventListener('click', () => {
      document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
*/
// ---------- Mobile Menu Toggle ----------
// ----- MOBILE MENU TOGGLE -----
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


  // ---------- 3️⃣ Scroll-to Section Buttons ----------
  const startLearningBtn = document.querySelector('.btn-primary');
  const joinNowHeroBtn = document.querySelector('.btn-secondary');
  const learnMoreBtn = document.querySelector('.learn-more-btn');

  console.log("btn-primary found?", startLearningBtn);
  console.log("btn-secondary found?", joinNowHeroBtn);
  console.log("learn-more-btn found?", learnMoreBtn);

  if (startLearningBtn) {
    startLearningBtn.addEventListener('click', () => {
      document
        .querySelector('#courses')
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (joinNowHeroBtn) {
    joinNowHeroBtn.addEventListener('click', () => {
      document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      document
        .querySelector('#courses')
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ---------- 4️⃣ Fade-In Animation on Scroll ----------
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach(el => fadeObserver.observe(el));

  // ---------- 5️⃣ Course “View Details” Modal ----------
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal';
  modalContainer.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `;
  document.body.appendChild(modalContainer);

  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 5px 30px rgba(0,0,0,0.2);
  `;
  modalContainer.appendChild(modalContent);

  function openModal(courseName) {
    modalContent.innerHTML = `
      <h3>${courseName}</h3>
      <p>More details about <b>${courseName}</b> will be available soon. Stay tuned!</p>
      <button id="closeModal" style="
        margin-top:20px; padding:10px 20px; background:#5548d9;
        color:white; border:none; border-radius:5px; cursor:pointer;">
        Close
      </button>
    `;
    modalContainer.style.display = 'flex';
    document.getElementById('closeModal').onclick = () => {
      modalContainer.style.display = 'none';
    };
  }

  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const title = btn.parentElement.querySelector('h3')?.innerText || 'Course';
      openModal(title);
    });
  });

  // ---------- 6️⃣ Animated Stats (Number Counter) ----------



  // ---------- 7️⃣ Testimonials Highlight on Click ----------
  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('click', () => {
      document
        .querySelectorAll('.testimonial-card')
        .forEach(c => c.classList.remove('highlight'));
      card.classList.add('highlight');
    });
  });

  // Add highlight style dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .testimonial-card.highlight {
      border-color: #5548d9;
      box-shadow: 0 10px 30px rgba(85,72,217,0.15);
      transform: scale(1.03);
    }
  `;
  document.head.appendChild(style);

  // ---------- 8️⃣ Email Form Validation ----------
  const emailForm = document.querySelector('.email-form');
  if (emailForm) {
    emailForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.querySelector('.email-input').value.trim();
      const valid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
      if (!valid) {
        alert('Please enter a valid email address.');
      } else {
        alert('✅ Thanks for joining the AI Activation Academy!');
        emailForm.reset();
      }
    });
  }

  // ---------- 9️⃣ Scroll Progress Bar ----------
  const progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 0;
    background: linear-gradient(90deg, #5548d9, #7b61ff);
    z-index: 9999;
    transition: width 0.1s;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollPos =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrollPos}%`;
  });

  // ---------- 🔟 Dynamic Year Update ----------
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear) {
    footerYear.innerHTML = `© ${new Date().getFullYear()} AI Activation Academy. All rights reserved.`;
  }

});

