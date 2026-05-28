/* =====================================================
   HEATER — vanilla interactions
   ===================================================== */

(() => {
  "use strict";

  // Mobile nav toggle
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Mark active nav link
  const path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  document.querySelectorAll(".site-nav a, .site-footer a").forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    const target = href.replace(/\.html$/, "").replace(/\/$/, "");
    const current = path.replace(/\/$/, "");
    if (target && target === current && href !== "/") a.classList.add("is-active");
    if (path === "/" && (href === "/" || href === "/index.html")) a.classList.add("is-active");
    if (path.startsWith("/work") && (href === "work.html" || href === "/work.html")) {
      a.classList.add("is-active");
    }
  });

  // Contact form: prevent submit, show success
  const form = document.querySelector(".form-card form");
  const success = document.querySelector(".form-success");
  if (form && success) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.style.display = "none";
      success.removeAttribute("hidden");
    });
  }

  // Newsletter form
  document.querySelectorAll(".footer-newsletter form").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = f.querySelector("button");
      if (btn) btn.textContent = "✓";
      const input = f.querySelector("input");
      if (input) input.value = "";
    });
  });

  // Work filter chips (visual only)
  document.querySelectorAll(".work-filter .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".work-filter .chip").forEach((c) => c.classList.remove("is-active--magenta", "is-active"));
      chip.classList.add("is-active--magenta");
    });
  });
})();
