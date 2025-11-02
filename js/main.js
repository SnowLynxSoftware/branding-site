// Main JavaScript for Snow Lynx Software LLC website

(function () {
  // ========== Constants ==========
  const SELECTORS = {
    ANCHOR_LINKS: 'a[href^="#"]',
    NAVBAR: ".navbar",
    ANIMATED_ELEMENTS: ".card, .tech-category",
    SERVICE_CARDS: ".service-card",
    SERVICE_ICON: ".service-icon i",
    TECH_BADGES: ".tech-tags .badge",
    TESTIMONIAL_CARDS: ".testimonial-card",
    BLOG_CARD_IMAGES: ".blog-card img",
    SOCIAL_LINKS_CONTAINER: ".social-links",
    SOCIAL_LINKS: ".social-links a",
    ALL_IMAGES: "img",
    HERO_SECTION: ".hero-section",
  };

  const CONFIG = {
    NAVBAR_SCROLL_THRESHOLD: 100,
    OBSERVER_THRESHOLD: 0.1,
    OBSERVER_ROOT_MARGIN: "0px 0px -50px 0px",
    ANIMATION_DELAY_INCREMENT: 0.2,
    BADGE_SCALE: 1.1,
    BADGE_TRANSITION: "0.2s ease",
    PARALLAX_SPEED: 0.5,
    TECH_BOUNCE_CLASS: "fa-bounce",
    FADE_IN_CLASS: "fade-in-up",
    BLOG_IMAGE_TRANSITION: "opacity 0.3s ease",
  };

  const SOCIAL_MEDIA = [
    {
      platform: "GitHub",
      url: "https://github.com/snowlynxsoftware",
      icon: "fab fa-github",
      tooltip: "Visit our GitHub",
    },
    {
      platform: "Twitter",
      url: "https://x.com/SnowLynxSoft",
      icon: "fab fa-twitter",
      tooltip: "Follow us on Twitter",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61581769500246",
      icon: "fab fa-facebook",
      tooltip: "Like us on Facebook",
    },
  ];

  const FALLBACK_IMAGE =
    'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23f8f9fa"/><text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial, sans-serif" font-size="24" fill="%236c757d">Image Not Available</text></svg>';

  // ========== Private Functions ==========

  /**
   * Initialize smooth scrolling for anchor links
   */
  function _initSmoothScroll() {
    document.querySelectorAll(SELECTORS.ANCHOR_LINKS).forEach((anchor) => {
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
  }

  /**
   * Initialize navbar hide/show on scroll
   */
  function _initNavbarScroll() {
    let lastScrollTop = 0;
    const navbar = document.querySelector(SELECTORS.NAVBAR);

    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        scrollTop > lastScrollTop &&
        scrollTop > CONFIG.NAVBAR_SCROLL_THRESHOLD
      ) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  /**
   * Initialize intersection observer for fade-in animations
   */
  function _initIntersectionObserver() {
    const observerOptions = {
      threshold: CONFIG.OBSERVER_THRESHOLD,
      rootMargin: CONFIG.OBSERVER_ROOT_MARGIN,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(CONFIG.FADE_IN_CLASS);
        }
      });
    }, observerOptions);

    document.querySelectorAll(SELECTORS.ANIMATED_ELEMENTS).forEach((el) => {
      observer.observe(el);
    });
  }

  /**
   * Initialize hover effects for service cards
   */
  function _initServiceCardHovers() {
    document.querySelectorAll(SELECTORS.SERVICE_CARDS).forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const icon = this.querySelector(SELECTORS.SERVICE_ICON);
        if (icon) {
          icon.classList.add(CONFIG.TECH_BOUNCE_CLASS);
        }
      });

      card.addEventListener("mouseleave", function () {
        const icon = this.querySelector(SELECTORS.SERVICE_ICON);
        if (icon) {
          icon.classList.remove(CONFIG.TECH_BOUNCE_CLASS);
        }
      });
    });
  }

  /**
   * Initialize hover effects for technology badges
   */
  function _initTechBadgeHovers() {
    document.querySelectorAll(SELECTORS.TECH_BADGES).forEach((badge) => {
      badge.addEventListener("mouseenter", function () {
        this.style.transform = `scale(${CONFIG.BADGE_SCALE})`;
        this.style.transition = CONFIG.BADGE_TRANSITION;
      });

      badge.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  }

  /**
   * Initialize testimonial card animation delays
   */
  function _initTestimonialCards() {
    document
      .querySelectorAll(SELECTORS.TESTIMONIAL_CARDS)
      .forEach((card, index) => {
        card.style.animationDelay = `${
          index * CONFIG.ANIMATION_DELAY_INCREMENT
        }s`;
      });
  }

  /**
   * Initialize blog card image loading enhancement
   */
  function _initBlogImageLoading() {
    document.querySelectorAll(SELECTORS.BLOG_CARD_IMAGES).forEach((img) => {
      img.addEventListener("load", function () {
        this.style.opacity = "1";
        this.style.transition = CONFIG.BLOG_IMAGE_TRANSITION;
      });
    });
  }

  /**
   * Initialize error handling for missing images
   */
  function _initImageErrorHandling() {
    document.querySelectorAll(SELECTORS.ALL_IMAGES).forEach((img) => {
      img.addEventListener("error", function () {
        this.src = FALLBACK_IMAGE;
        this.alt = "Image not available";
      });
    });
  }

  /**
   * Initialize parallax effect for hero section
   */
  function _initParallaxEffect() {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const parallaxElement = document.querySelector(SELECTORS.HERO_SECTION);

      if (parallaxElement && scrolled < window.innerHeight) {
        const speed = scrolled * CONFIG.PARALLAX_SPEED;
        parallaxElement.style.transform = `translateY(${speed}px)`;
      }
    });
  }

  /**
   * Populate social media links from config
   */
  function _initSocialMediaLinks() {
    const socialLinksContainer = document.querySelector(
      SELECTORS.SOCIAL_LINKS_CONTAINER
    );

    if (!socialLinksContainer) {
      return;
    }

    // Clear existing content
    socialLinksContainer.innerHTML = "";

    // Build social links from config
    SOCIAL_MEDIA.forEach((social, index) => {
      const link = document.createElement("a");
      link.href = social.url;
      link.className = "text-white me-3";
      link.setAttribute("aria-label", social.platform);
      link.setAttribute("title", social.tooltip);
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("target", "_blank");

      const icon = document.createElement("i");
      icon.className = `${social.icon} fa-lg`;

      link.appendChild(icon);

      // Add analytics tracking
      link.addEventListener("click", function () {
        console.log(`Social media click: ${social.platform}`);
        // Send analytics event if gtag is available
        if (typeof gtag !== "undefined") {
          gtag("event", "social_media_click", {
            platform: social.platform,
            url: social.url,
          });
        }
      });

      socialLinksContainer.appendChild(link);

      // Add spacing - remove margin from last item
      if (index === SOCIAL_MEDIA.length - 1) {
        link.classList.remove("me-3");
      }
    });
  }

  function _initWelcomeMessage() {
    console.log(
      "=======================================\n" +
        "Welcome to Snow Lynx Software LLC!\n" +
        "🎉 You've discovered our Developer Debug Logs! 🎉\n" +
        "We'd love to work with you on building something amazing.\n" +
        "🚀 Reach out to us at support@snowlynxsoftware.com and let's create something incredible together!\n" +
        "======================================="
    );
  }

  /**
   * Initialize all features
   */
  function _init() {
    _initSmoothScroll();
    _initNavbarScroll();
    _initIntersectionObserver();
    _initServiceCardHovers();
    _initTechBadgeHovers();
    _initTestimonialCards();
    _initBlogImageLoading();
    _initSocialMediaLinks();
    _initImageErrorHandling();
    _initParallaxEffect();
    _initWelcomeMessage();
  }

  // ========== Initialize on DOM Ready ==========
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _init);
  } else {
    _init();
  }
})();
