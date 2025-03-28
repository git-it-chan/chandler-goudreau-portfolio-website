window.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      // Now that navbar is loaded, initialize Lottie
      const hamburger = lottie.loadAnimation({
        container: document.getElementById('hamburger'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'web-assets/lottie-hamburger-menu.json',
      });

      hamburger.setSpeed(3); // 2x faster (1 = normal speed)

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
    });
    });



  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });