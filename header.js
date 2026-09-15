/* =========================================================
   SHARED HEADER
   Writes the top info bar + main navigation into every page.
   Edit this ONE file to change the header/menu everywhere.
   The "active" nav highlight is worked out automatically from
   the current page's filename below — no need to hand-edit it
   per page.
   ========================================================= */
(function () {

  var current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  var aboutPages = ["about.html", "our-vision.html", "our-message.html", "our-values.html", "our-team.html", "petrogen-strategy.html"];

  var active = {
    home: current === "index.html",
    about: aboutPages.indexOf(current) !== -1,
    gsd: current === "gas-station-development.html",
    services: current === "services.html",
    business: current === "franchise.html",
    stations: current === "stations.html",
    careers: current === "careers.html",
    contact: current === "contact.html"
  };

  function cls(on) { return on ? ' class="active"' : ""; }

  document.write(`
<div class="top-bar" id="topBar">
  <div class="wrapper top-bar-inner">
    <div class="top-bar-left">
      <a href="mailto:crm@petrogen.sa"><svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>crm@petrogen.sa</a>
      <a href="tel:920022563"><svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2z"/></svg>920 022 563</a>
    </div>
    <div class="top-bar-right">
      <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.9L1 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z"/></svg></a>
      <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
      <a href="https://wa.me/966506575660" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.2-3.6-.8-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.4 0 .6-.6 1.2-1.2 1.1-.7 2 .9 1.7 1.8 2.3 3.2 3 .2.1.4.1.5-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.2 1.5z"/></svg></a>
      <button id="langBtn" class="lang-btn">AR / العربية</button>
    </div>
  </div>
</div>

<header class="site-header" id="siteHeader">
  <div class="wrapper header-inner">

    <a href="index.html" class="logo">
      <span class="logo-mark"><img src="images/petrogen_logo.png" alt="" onerror="this.remove()"></span>
    </a>

    <nav class="main-nav" id="mainNav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="index.html"${cls(active.home)} data-en="Home" data-ar="الرئيسية">Home</a>
        </li>
        <li class="nav-item has-dropdown">
          <a href="about.html"${cls(active.about)}><span data-en="About" data-ar="من نحن">About</span> <span class="caret">▾</span></a>
          <ul class="dropdown">
            <li><a href="our-vision.html"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg></span><span class="dropdown-text"><strong data-en="Our Vision" data-ar="رؤيتنا">Our Vision</strong><small data-en="Where we're headed" data-ar="إلى أين نتجه">Where we're headed</small></span></a></li>
            <li><a href="our-message.html"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg></span><span class="dropdown-text"><strong data-en="Our Message" data-ar="رسالتنا">Our Message</strong><small data-en="What we stand for" data-ar="ما نؤمن به">What we stand for</small></span></a></li>
            <li><a href="our-values.html"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h12l3 5-9 13L3 8z"/><path d="M3 8h18M9 3l3 5 3-5M12 8v13"/></svg></span><span class="dropdown-text"><strong data-en="Our Values" data-ar="قيمنا">Our Values</strong><small data-en="What guides us" data-ar="ما يوجهنا">What guides us</small></span></a></li>
            <li><a href="petrogen-strategy.html"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/></svg></span><span class="dropdown-text"><strong data-en="Petrogen Strategy" data-ar="استراتيجية بتروجين">Petrogen Strategy</strong><small data-en="Our growth roadmap" data-ar="خارطة طريق نمونا">Our growth roadmap</small></span></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="gas-station-development.html"${cls(active.gsd)} data-en="Gas Station Development" data-ar="تطوير محطات الوقود">Gas Station Development</a>
        </li>
        <li class="nav-item has-dropdown">
          <a href="services.html"${cls(active.services)}><span data-en="Services" data-ar="خدماتنا">Services</span> <span class="caret">▾</span></a>
          <ul class="dropdown">
            <li><a href="services.html#fuel"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 22V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v18M3 22h11M17 8l3 2v8a1.5 1.5 0 0 0 3 0v-6l-3-4M7 7h4M7 11h4"/></svg></span><span class="dropdown-text"><strong data-en="Fuel &amp; Gas Stations" data-ar="محطات الوقود">Fuel &amp; Gas Stations</strong><small data-en="91-95 gasoline &amp; diesel" data-ar="بنزين 91-95 والديزل">91-95 gasoline &amp; diesel</small></span></a></li>
            <li><a href="services.html#ev-charging"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7h6a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2z"/><path d="M9 4v3M13 4v3M11 15v3"/><path d="M18 10h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H18"/></svg></span><span class="dropdown-text"><strong data-en="Electric Vehicle Charging" data-ar="شحن السيارات الكهربائية">Electric Vehicle Charging</strong><small data-en="Fast EV charging points" data-ar="نقاط شحن سريعة">Fast EV charging points</small></span></a></li>
            <li><a href="services.html#ehs"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg></span><span class="dropdown-text"><strong data-en="Environmental Health &amp; Safety" data-ar="الصحة والسلامة البيئية">Environmental Health &amp; Safety</strong><small data-en="Certified safety standards" data-ar="معايير سلامة معتمدة">Certified safety standards</small></span></a></li>
            <li><a href="services.html#logistics"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg></span><span class="dropdown-text"><strong data-en="Logistics" data-ar="الخدمات اللوجستية">Logistics</strong><small data-en="Our delivery fleet" data-ar="أسطول التوصيل لدينا">Our delivery fleet</small></span></a></li>
          </ul>
        </li>
        <li class="nav-item has-dropdown">
          <a href="franchise.html"${cls(active.business)}><span data-en="Business" data-ar="أعمالنا">Business</span> <span class="caret">▾</span></a>
          <ul class="dropdown">
            <li><a href="franchise.html"${cls(current === "franchise.html")}><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l1.5-5h15L21 9M3 9v10a1 1 0 0 0 1 1h4v-6h8v6h4a1 1 0 0 0 1-1V9M3 9h18"/></svg></span><span class="dropdown-text"><strong data-en="Petrogen Franchise" data-ar="امتياز بتروجين">Petrogen Franchise</strong><small data-en="Own a station" data-ar="امتلك محطة">Own a station</small></span></a></li>
            <li><a href="franchise.html#vendors"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></span><span class="dropdown-text"><strong data-en="Vendors" data-ar="الموردون">Vendors</strong><small data-en="Supply our network" data-ar="ورّد لشبكتنا">Supply our network</small></span></a></li>
            <li><a href="franchise.html#shops"><span class="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="15" r="3"/><path d="M10.5 12.5L21 2M18 5l3 3M15 8l3 3"/></svg></span><span class="dropdown-text"><strong data-en="Shops for Rent" data-ar="محلات للإيجار">Shops for Rent</strong><small data-en="Retail space available" data-ar="مساحات تجارية متاحة">Retail space available</small></span></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="stations.html"${cls(active.stations)} data-en="Our Stations" data-ar="محطاتنا">Our Stations</a>
        </li>
        <li class="nav-item">
          <a href="careers.html"${cls(active.careers)} data-en="Careers" data-ar="وظائف">Careers</a>
        </li>
        <li class="nav-item">
          <a href="contact.html"${cls(active.contact)} data-en="Contact" data-ar="اتصل بنا">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <button class="btn btn-primary" id="loginBtn" data-en="Login" data-ar="تسجيل الدخول">Login</button>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</header>
`);

})();
