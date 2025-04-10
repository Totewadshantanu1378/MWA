// Resume Modal Handling
const resumeBtn = document.getElementById('resumeBtn');
const modal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

resumeBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const faders = document.querySelectorAll('.card');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
