window.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Initialize hamburger Lottie
      const hamburger = lottie.loadAnimation({
        container: document.getElementById('hamburger'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'web-assets/lottie-hamburger-menu.json',
      });

      hamburger.setSpeed(3);
      let menuOpen = false;
      const navLinks = document.querySelector('.nav-links');

      document.getElementById('hamburger').addEventListener('click', () => {
        if (!menuOpen) {
          hamburger.playSegments([0, 60], true);
          navLinks.classList.add('active');
        } else {
          hamburger.playSegments([60, 0], true);
          navLinks.classList.remove('active');
        }
        menuOpen = !menuOpen;
      });

      // 👉 Initialize underline animations
      document.querySelectorAll('.underline-animation').forEach(el => {
        lottie.loadAnimation({
          container: el,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'web-assets/lottie-load-bar.json',
        });
      });

    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
