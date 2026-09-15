/* =========================================================
   SHARED FOOTER
   Writes the site footer + login modal into every page.
   Edit this ONE file to change the footer/modal everywhere.
   ========================================================= */
(function () {

  document.write(`
<footer class="site-footer">
  <div class="wrapper">

    <div class="footer-grid">
      <div>
        <a href="index.html" class="logo logo-footer">
          <span class="logo-mark"><img src="images/logo.webp" alt="" onerror="this.remove()"></span>
        </a>
        <p class="footer-about" data-en="Founded in 1995, Petrogen has grown from a single fuel station into a certified, Kingdom-wide network built on quality standards, outstanding customer service and continuous development — a reliable partner in the field of energy." data-ar="تأسست بتروجين عام 1995 وتطورت من محطة وقود واحدة إلى شبكة معتمدة على مستوى المملكة، مبنية على معايير الجودة وخدمة العملاء المتميزة والتطوير المستمر — شريك موثوق في مجال الطاقة.">Founded in 1995, Petrogen has grown from a single fuel station into a certified, Kingdom-wide network built on quality standards, outstanding customer service and continuous development — a reliable partner in the field of energy.</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.9L1 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="https://wa.me/966506575660" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.2-3.6-.8-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.4 0 .6-.6 1.2-1.2 1.1-.7 2 .9 1.7 1.8 2.3 3.2 3 .2.1.4.1.5-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.2 1.5z"/></svg></a>
        </div>
      </div>

      <div>
        <h4 data-en="Quick Links" data-ar="روابط سريعة">Quick Links</h4>
        <a href="about.html" data-en="About Petrogen" data-ar="عن بتروجين">About Petrogen</a>
        <a href="services.html" data-en="Our Services" data-ar="خدماتنا">Our Services</a>
        <a href="stations.html" data-en="Our Stations" data-ar="محطاتنا">Our Stations</a>
        <a href="careers.html" data-en="Careers" data-ar="وظائف">Careers</a>
        <a href="contact.html" data-en="Contact Us" data-ar="اتصل بنا">Contact Us</a>
      </div>

      <div>
        <h4 data-en="Our Business" data-ar="أعمالنا">Our Business</h4>
        <a href="franchise.html" data-en="Petrogen Franchise" data-ar="امتياز بتروجين">Petrogen Franchise</a>
        <a href="franchise.html#vendors" data-en="Vendors" data-ar="الموردون">Vendors</a>
        <a href="franchise.html#shops" data-en="Shops for Rent" data-ar="محلات للإيجار">Shops for Rent</a>
        <a href="stations.html" data-en="Our Stations" data-ar="محطاتنا">Our Stations</a>
      </div>

      <div>
        <h4 data-en="Contact" data-ar="تواصل">Contact</h4>
        <a href="tel:920022563"><svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2z"/></svg>920 022 563</a>
        <a href="https://wa.me/966506575660"><svg class="inline-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.2-3.6-.8-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.4 0 .6-.6 1.2-1.2 1.1-.7 2 .9 1.7 1.8 2.3 3.2 3 .2.1.4.1.5-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.2 1.5z"/></svg>+966 50 657 5660</a>
        <a href="mailto:crm@petrogen.sa"><svg class="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>crm@petrogen.sa</a>
        <span data-en="Riyadh, Kingdom of Saudi Arabia" data-ar="الرياض، المملكة العربية السعودية">Riyadh, Kingdom of Saudi Arabia</span>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="footer-bottom">
      <span data-en="© 2026 Petrogen. All rights reserved." data-ar="© 2026 بتروجين. جميع الحقوق محفوظة.">© 2026 Petrogen. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#" data-en="Privacy Policy" data-ar="سياسة الخصوصية">Privacy Policy</a>
        <a href="#" data-en="Terms of Use" data-ar="شروط الاستخدام">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>

<div class="modal-overlay" id="loginModal">
  <div class="modal-box">
    <button class="modal-close" id="modalClose">&times;</button>
    <h3 data-en="Login" data-ar="تسجيل الدخول">Login</h3>
    <form id="loginForm">
      <label data-en="Email" data-ar="البريد الإلكتروني">Email</label>
      <input type="email" required placeholder="you@example.com">
      <label data-en="Password" data-ar="كلمة المرور">Password</label>
      <input type="password" required placeholder="••••••••">
      <button type="submit" class="btn btn-primary btn-block" data-en="Login" data-ar="تسجيل الدخول">Login</button>
    </form>
  </div>
</div>
`);

})();
