/* Rendu du site à partir de js/content.js — pas besoin de modifier ce fichier
   pour mettre à jour le contenu. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Petit créateur d'éléments : h("li", {class: "x"}, "texte", enfant...) */
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
    }
    return el;
  }

  /* "Texte FR / Text EN / Texto ES" -> partie selon la langue */
  const pick = (str, lang) => {
    const parts = String(str).split(" / ");
    if (parts.length < 2) return str;
    return parts[Math.min(S.langs.indexOf(lang), parts.length - 1)];
  };
  const chips = (list, lang) => list.map((t) => h("li", null, pick(t, lang)));
  const joined = (list, lang) => list.map((t) => pick(t, lang)).join(" · ");
  const fill = (el, nodes) => { el.replaceChildren(...nodes); };

  /* ---------- Langue ---------- */
  function initialLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (S.langs.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible */ }
    const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return S.langs.includes(nav) ? nav : "en";
  }
  let lang = initialLang();

  function render() {
    const t = S.ui[lang];
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (key === "loading") el.textContent = t.loading.repeat(3);
      else if (t[key] != null) el.textContent = t[key];
    });
    $$("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind]; });
    $$("[data-bind-src]").forEach((el) => { el.src = S[el.dataset.bindSrc]; });

    // Dock
    $$(".dock [data-nav]").forEach((a) => {
      const label = t.nav[a.dataset.nav];
      $(".tip", a).textContent = label;
      a.setAttribute("aria-label", label);
    });
    $("#lang-label").textContent = lang.toUpperCase();
    $$("#lang-menu [data-lang]").forEach((b) => b.setAttribute("aria-current", String(b.dataset.lang === lang)));
    $("#lang-btn .tip").textContent = t.nav.lang;
    $("#lang-btn").setAttribute("aria-label", t.nav.lang);
    $("#modal-close").setAttribute("aria-label", t.close);

    // À propos
    fill($("#about-text"), S.about[lang].map((p) => h("p", null, p)));
    fill($("#facts"), S.facts[lang].map((f) => h("div", null, h("dt", null, f.k), h("dd", null, f.v))));
    fill($("#langs"), S.languages.map((l) =>
      h("li", null,
        h("span", null, l[lang]),
        h("span", { class: "lvl" }, l.level),
        h("span", { class: "gauge", "aria-hidden": "true" },
          Array.from({ length: 6 }, (_, i) => h("i", { class: i < l.score ? "on" : "" })))
      )));
    fill($("#hobbies"), chips(S.hobbies[lang], lang));

    // Parcours
    fill($("#work"), S.work.map((w) =>
      h("li", { class: "company reveal" },
        h("div", { class: "co-head" },
          w.logo
            ? h("img", { class: "co-logo", src: w.logo, alt: "", width: "48", height: "48" })
            : h("span", { class: "co-logo", "aria-hidden": "true" }, w.initials),
          h("div", null, h("h4", null, w.org), h("span", { class: "when" }, w[lang].meta))),
        h("ol", { class: "roles" }, w.roles.map((r) => {
          const c = r[lang];
          return h("li", { class: "role" },
            h("h5", null, c.role),
            h("span", { class: "when" }, c.when),
            h("ul", { class: "bullets" }, c.points.map((p) => h("li", null, p))),
            h("p", { class: "skill-line" }, h("strong", null, t.skillsLabel + (lang === "fr" ? " : " : ": ")), joined(r.skills, lang)));
        })))));
    fill($("#education"), S.education.map((e) =>
      h("li", { class: "reveal" },
        h("h4", null, e.org),
        h("span", { class: "when" }, e[lang].when),
        h("p", null, e[lang].title))));

    // Projet phare
    const f = S.featured[lang], fe = $("#featured");
    $("[data-k=title]", fe).textContent = f.title;
    fill($("[data-k=meta]", fe), [].concat(f.meta).map((line) => h("span", null, line)));
    $("[data-k=summary]", fe).textContent = f.summary;
    fill($("[data-k=points]", fe), f.points.map((p) => h("li", null, p)));
    fill($("[data-k=tags]", fe), chips(S.featured.tags, lang));
    const link = $("[data-k=link]", fe);
    link.hidden = !S.featured.link;
    if (S.featured.link) { link.href = S.featured.link; $("span", link).textContent = t.viewCode; }

    // Projets académiques
    fill($("#project-grid"), S.projects.map((p, i) => {
      const c = p[lang];
      return h("button", { class: "project reveal", type: "button", onclick: () => openProject(i) },
        h("div", { class: "thumb" }, h("img", { src: p.img, alt: "", loading: "lazy" })),
        h("div", { class: "body" },
          h("div", { class: "row" }, h("span", { class: "tag" }, c.tag), h("span", null, p.year)),
          h("h4", null, c.title),
          h("p", null, c.short),
          h("span", { class: "more" }, t.readMore + " →")));
    }));

    // Compétences
    const skillRow = (title, text) => h("div", { class: "skill-row reveal" }, h("h3", null, title), h("p", null, text));
    fill($("#skill-grid"), [
      ...S.skills.map((g) => skillRow(g[lang], joined(g.items, lang))),
      skillRow(t.softTitle, S.soft[lang].join(" · "))
    ]);

    // Contact
    const mail = "mailto:" + S.email;
    $("#email-btn").href = mail;

    observeReveals();
  }

  /* ---------- Fenêtre projet ---------- */
  const modal = $("#modal");
  function openProject(i) {
    const p = S.projects[i], c = p[lang];
    fill($("#modal-body"), [
      h("img", { src: p.img, alt: c.title }),
      h("div", { class: "content" },
        h("p", { class: "eyebrow" }, c.tag + " · " + p.year),
        h("h3", null, c.title),
        h("ul", { class: "chips small" }, chips(p.tools, lang)),
        c.sections.map(([title, text]) => [h("h5", null, title), h("p", null, text)]))
    ]);
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
  $("#modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

  /* ---------- Apparition au défilement ---------- */
  const revealObs = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
      }, { threshold: 0, rootMargin: "0px 0px -8% 0px" })
    : null;
  function observeReveals() {
    $$(".reveal:not(.in)").forEach((el) => (revealObs ? revealObs.observe(el) : el.classList.add("in")));
  }

  /* ---------- Section active dans le dock ---------- */
  if ("IntersectionObserver" in window) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        $$(".dock [data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "about", "journey", "projects", "skills", "contact"].forEach((id) => navObs.observe(document.getElementById(id)));
  }

  /* ---------- Carré du hero : tap pour la citation sur mobile ---------- */
  $("#square").addEventListener("click", (e) => e.currentTarget.classList.toggle("flipped"));

  /* ---------- Changement de langue ---------- */
  const langBtn = $("#lang-btn"), langMenu = $("#lang-menu");
  function toggleLangMenu(open) {
    langMenu.hidden = !open;
    langBtn.setAttribute("aria-expanded", String(open));
  }
  langBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleLangMenu(langMenu.hidden); });
  langMenu.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (err) { /* ignore */ }
    toggleLangMenu(false);
    render();
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".lang-wrap")) toggleLangMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleLangMenu(false); });

  /* ---------- Copier l'e-mail ---------- */
  $("#copy-btn").addEventListener("click", async () => {
    const label = $("#copy-label");
    try {
      await navigator.clipboard.writeText(S.email);
      label.textContent = S.ui[lang].copied;
    } catch (e) {
      window.location.href = "mailto:" + S.email;
      return;
    }
    setTimeout(() => { label.textContent = S.ui[lang].copy; }, 2000);
  });

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Champ d'étoiles (sous les sections) ---------- */
  (function stars() {
    const cv = $("#stars"), ctx = cv.getContext("2d");
    let w, hgt, pts = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      w = cv.width = innerWidth * dpr; hgt = cv.height = innerHeight * dpr;
      const n = Math.round((innerWidth * innerHeight) / 5000);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * hgt,
        r: (Math.random() * 1.1 + 0.2) * dpr, a: Math.random() * 0.7 + 0.15,
        d: Math.random() * 0.4 + 0.1, tw: Math.random() * Math.PI * 2
      }));
    }
    function draw(time) {
      ctx.clearRect(0, 0, w, hgt);
      const off = (scrollY * dpr);
      for (const p of pts) {
        const y = (((p.y - off * p.d) % hgt) + hgt) % hgt;
        const a = reduceMotion ? p.a : p.a * (0.75 + 0.25 * Math.sin(time / 900 + p.tw));
        ctx.globalAlpha = a; ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(p.x, y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    }
    resize(); addEventListener("resize", resize);
    if (reduceMotion) { draw(0); addEventListener("scroll", () => draw(0), { passive: true }); }
    else requestAnimationFrame(draw);
  })();

  /* ---------- Rendu + fin du loader ---------- */
  document.body.classList.add("loading");
  render();
  const loader = $("#loader");
  const video = $(".hero-video");
  const start = performance.now();
  let finished = false;
  function finish() {
    if (finished) return; finished = true;
    const wait = Math.max(0, 1200 - (performance.now() - start)); // laisser voir le trou noir un instant
    setTimeout(() => { loader.classList.add("done"); document.body.classList.remove("loading"); }, wait);
  }
  if (video.readyState >= 2) finish();
  video.addEventListener("loadeddata", finish, { once: true });
  setTimeout(finish, 2500); // filet de sécurité : l'affiche (poster) prend le relais si la vidéo tarde
})();
