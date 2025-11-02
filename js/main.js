// Main JavaScript for Snow Lynx Software LLC website
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar scroll effect
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Add animation classes when elements come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe cards and sections for animation
  document.querySelectorAll(".card, .tech-category").forEach((el) => {
    observer.observe(el);
  });

  // Enhanced hover effects for service cards
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".service-icon i");
      if (icon) {
        icon.classList.add("fa-bounce");
      }
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".service-icon i");
      if (icon) {
        icon.classList.remove("fa-bounce");
      }
    });
  });

  // Technology badge hover effects
  document.querySelectorAll(".tech-tags .badge").forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.2s ease";
    });

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Testimonial card random animation delay
  document.querySelectorAll(".testimonial-card").forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  // Blog card image lazy loading enhancement
  document.querySelectorAll(".blog-card img").forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
      this.style.transition = "opacity 0.3s ease";
    });
  });

  // Social media link tracking (for analytics when implemented)
  document.querySelectorAll(".social-links a").forEach((link) => {
    link.addEventListener("click", function () {
      const platform = this.getAttribute("aria-label");
      console.log(`Social media click: ${platform}`);
      // This is where you would send analytics events
    });
  });

  // Error handling for missing images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      this.src =
        'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23f8f9fa"/><text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial, sans-serif" font-size="24" fill="%236c757d">Image Not Available</text></svg>';
      this.alt = "Image not available";
    });
  });

  // Add subtle parallax effect to hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.querySelector(".hero-section");

    if (parallaxElement && scrolled < window.innerHeight) {
      const speed = scrolled * 0.5;
      parallaxElement.style.transform = `translateY(${speed}px)`;
    }
  });
});
