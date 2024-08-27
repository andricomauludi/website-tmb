
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("navbar-hidden");
      } else {
        // Scrolling up
        navbar.classList.remove("navbar-hidden");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
    document.addEventListener("DOMContentLoaded", () => {
      const toggleButton = document.querySelector(".navbar-toggle");
      const menu = document.querySelector(".navbar-menu");
      const links = document.querySelectorAll(".navbar-menu a");
      const fadeInElements = document.querySelectorAll(".fade-in");
      const currentLocation = window.location.pathname; // Use pathname to get the current page URL
  
      links.forEach((link) => {
          const linkPath = new URL(link.href).pathname; // Get the path of the link
          if (linkPath === currentLocation) {
              link.classList.add("active"); // Add active class if the paths match
          }
      });
  
      toggleButton.addEventListener("click", () => {
          menu.classList.toggle("active");
      });

      function checkVisibility() {
        fadeInElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add("fade-in-visible");
          } else {
            el.classList.remove("fade-in-visible");
          }
        });
      }

      window.addEventListener("scroll", checkVisibility);
      checkVisibility(); // Check visibility on load
  });