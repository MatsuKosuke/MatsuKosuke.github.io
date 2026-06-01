(function () {
  const DEFAULT_LANG = "ja";
  const STORAGE_KEY = "site-language";

  function getValue(path, lang) {
    return path.split(".").reduce((obj, key) => obj && obj[key], window.siteContent[lang]);
  }

  function setText(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getValue(node.dataset.i18n, lang);
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const value = getValue(node.dataset.i18nHtml, lang);
      if (typeof value === "string") node.innerHTML = value;
    });

    renderList("news-list", window.siteContent[lang].news, "ul");
    renderList("publication-list", window.siteContent[lang].publications, "ol");
    renderList("award-list", window.siteContent[lang].awards, "ul");
    // renderTimeline(lang);
    renderTimeline(lang, "education-list", "education");
    renderTimeline(lang, "experience-list", "experience");
    renderToc(lang);

    document.querySelectorAll(".lang-button").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function renderList(id, entries) {
    const list = document.getElementById(id);
    list.innerHTML = "";
    entries.forEach((entry) => {
      const li = document.createElement("li");
      li.innerHTML = entry;
      list.appendChild(li);
    });
  }

  function renderTimeline(lang, listId, contentKey) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    window.siteContent[lang][contentKey].forEach((entry) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${entry.period}</strong><br>${entry.text}`;
      list.appendChild(li);
    });
  }

  function renderToc(lang) {
    const list = document.getElementById("toc-list");
    list.innerHTML = "";
    document.querySelectorAll("section[data-section-title]").forEach((section) => {
      const title = getValue(section.dataset.sectionTitle, lang);
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${section.id}`;
      a.textContent = title;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function setScoreMeter() {
    const meter = document.querySelector(".score-meter");
    if (!meter) return;
    const score = Number(meter.dataset.score);
    const maxScore = Number(meter.dataset.maxScore);
    if (!Number.isFinite(score) || !Number.isFinite(maxScore) || maxScore <= 0) return;
    const width = Math.max(0, Math.min(100, (score / maxScore) * 100));
    meter.querySelector("span").style.width = `${width}%`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    const browserLang = navigator.language && navigator.language.startsWith("ja") ? "ja" : "en";
    const initialLang = window.siteContent[savedLang] ? savedLang : browserLang || DEFAULT_LANG;

    document.querySelectorAll(".lang-button").forEach((button) => {
      button.addEventListener("click", () => setText(button.dataset.lang));
    });

    setScoreMeter();
    setText(initialLang);
  });
})();
