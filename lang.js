(function () {
  function applyLang(lang) {
    var sections = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < sections.length; i++) {
      var el = sections[i];
      if (el.getAttribute("data-lang") === lang) {
        el.removeAttribute("hidden");
      } else {
        el.setAttribute("hidden", "hidden");
      }
    }

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var j = 0; j < buttons.length; j++) {
      var btn = buttons[j];
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    }

    document.documentElement.lang = lang === "uk" ? "uk" : "en";
    try {
      localStorage.setItem("aj_site_lang", lang);
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = "en";
    try {
      var stored = localStorage.getItem("aj_site_lang");
      if (stored === "uk" || stored === "en") {
        saved = stored;
      }
    } catch (_) {}

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-set-lang"));
      });
    }

    if (saved !== "en") {
      applyLang(saved);
    }
  });
})();
