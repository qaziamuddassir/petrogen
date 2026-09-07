/* ==========================================================
   PETROGEN — basic JavaScript (plain, no libraries)
   Every section below only runs if the elements it needs
   exist on the current page, so this one file works for
   index.html, about.html and contact.html.
   ========================================================== */

/* ---------- 1. STICKY HEADER + HIDE TOP BAR ON SCROLL ---------- */
var topBar = document.getElementById("topBar");
var siteHeader = document.getElementById("siteHeader");

function handleScroll() {
  if (window.scrollY > 40) {
    topBar.classList.add("hide");
    siteHeader.classList.add("scrolled");
  } else {
    topBar.classList.remove("hide");
    siteHeader.classList.remove("scrolled");
  }
}

if (topBar && siteHeader) {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once in case the page loads already scrolled
}

/* ---------- 2. MOBILE MENU TOGGLE ---------- */
var menuToggle = document.getElementById("menuToggle");
var mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("is-open");
  });
}

/* ---------- 2b. MOBILE SUBMENU ACCORDION ---------- */
/* On desktop, dropdowns open on hover (pure CSS). On mobile the menu
   is a static list, so tapping a dropdown's top link expands it
   instead of navigating straight away. */
var dropdownTriggers = document.querySelectorAll(".nav-item.has-dropdown > a");

dropdownTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function (e) {
    if (window.innerWidth <= 760) {
      e.preventDefault();
      trigger.parentElement.classList.toggle("is-open");
    }
  });
});

/* ---------- 3. LANGUAGE TOGGLE (EN / AR) ---------- */
var langBtn = document.getElementById("langBtn");
var isArabic = false;

function setLanguage(arabic) {
  isArabic = arabic;

  // swap text on every element that has data-en / data-ar
  var items = document.querySelectorAll("[data-en]");
  items.forEach(function (el) {
    el.textContent = arabic ? el.getAttribute("data-ar") : el.getAttribute("data-en");
  });

  // swap input placeholders that have data-en-placeholder / data-ar-placeholder
  var placeholders = document.querySelectorAll("[data-en-placeholder]");
  placeholders.forEach(function (el) {
    el.placeholder = arabic ? el.getAttribute("data-ar-placeholder") : el.getAttribute("data-en-placeholder");
  });

  // flip page direction for Arabic
  document.documentElement.setAttribute("dir", arabic ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", arabic ? "ar" : "en");

  if (langBtn) {
    langBtn.textContent = arabic ? "EN / English" : "AR / العربية";
  }
}

if (langBtn) {
  langBtn.addEventListener("click", function () {
    setLanguage(!isArabic);
  });
}

/* ---------- 4. HERO SLIDER (home page only) ---------- */
var slides = document.querySelectorAll(".hero-slide");
var dots = document.querySelectorAll(".hero-dot");
var prevBtn = document.getElementById("heroPrev");
var nextBtn = document.getElementById("heroNext");
var currentSlide = 0;
var slideTimer;

function showSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  currentSlide = index;

  slides.forEach(function (slide, i) {
    slide.classList.toggle("is-active", i === currentSlide);
  });
  dots.forEach(function (dot, i) {
    dot.classList.toggle("is-active", i === currentSlide);
  });
}

function startAutoSlide() {
  slideTimer = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 6000);
}

if (slides.length > 0) {
  startAutoSlide();

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      showSlide(currentSlide + 1);
      clearInterval(slideTimer);
      startAutoSlide();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      showSlide(currentSlide - 1);
      clearInterval(slideTimer);
      startAutoSlide();
    });
  }
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showSlide(i);
      clearInterval(slideTimer);
      startAutoSlide();
    });
  });
}

/* ---------- 5. SCROLL-REVEAL ANIMATION ---------- */
var revealItems = document.querySelectorAll(".reveal");

if (revealItems.length > 0) {
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
}

/* ---------- 6. COUNT-UP NUMBERS (stats + trust strip) ---------- */
var statNumbers = document.querySelectorAll("[data-count]");

if (statNumbers.length > 0) {
  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach(function (num) {
    countObserver.observe(num);
  });
}

function animateCount(el) {
  var target = parseInt(el.getAttribute("data-count"), 10);
  var suffix = el.getAttribute("data-suffix") || "";
  var current = 0;
  var step = Math.ceil(target / 60); // about 1 second at 60fps

  var timer = setInterval(function () {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current + suffix;
  }, 16);
}

/* ---------- 7. LOGIN MODAL ---------- */
var loginBtn = document.getElementById("loginBtn");
var loginModal = document.getElementById("loginModal");
var modalClose = document.getElementById("modalClose");
var loginForm = document.getElementById("loginForm");

if (loginBtn && loginModal) {
  loginBtn.addEventListener("click", function () {
    loginModal.classList.add("is-open");
  });
  modalClose.addEventListener("click", function () {
    loginModal.classList.remove("is-open");
  });
  loginModal.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.classList.remove("is-open");
    }
  });
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login form submitted (connect this to your backend later).");
    loginModal.classList.remove("is-open");
  });
}

/* ---------- 7b. NEWSLETTER FORM (footer, all pages) ---------- */
var newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for subscribing! (connect this to your mailing list later).");
    newsletterForm.reset();
  });
}

/* ---------- 8. CONTACT FORM (contact page only) ---------- */
var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent (connect this to your backend later).");
    contactForm.reset();
  });
}
