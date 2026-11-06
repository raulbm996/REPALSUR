/* REPALSUR · interacción (sin dependencias) */
(function () {
  "use strict";
  var w = window, d = document, root = d.documentElement;
  root.classList.add("js");
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };
  var EN = (root.lang || "es").slice(0, 2) === "en";
  var t = function (es, en) { return EN ? en : es; };   /* textos del JS en el idioma de la página */
  var reduce = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- menú móvil ---------- */
  var burger = $("#burger"), mnav = $("#mnav");
  function setMenu(open) {
    mnav.hidden = !open; d.body.style.overflow = open ? "hidden" : "";
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? t("Cerrar menú", "Close menu") : t("Abrir menú", "Open menu"));
  }
  if (burger && mnav) {
    burger.addEventListener("click", function () { setMenu(mnav.hidden); });
    $$("a", mnav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape" && !mnav.hidden) setMenu(false); });
  }
  /* cabecera con sombra al bajar */
  var sc = false;
  w.addEventListener("scroll", function () { var s = w.scrollY > 10; if (s !== sc) { sc = s; root.classList.toggle("is-scrolled", s); } }, { passive: true });

  /* «Pedir precio» de un formato marca la necesidad en el formulario */
  $$("[data-need]").forEach(function (a) {
    a.addEventListener("click", function () {
      var map = { nuevos: "Palets nuevos", usados: "Palets usados" }, v = map[a.getAttribute("data-need")];
      var r = v && $('#presupuesto input[name=necesidad][value="' + v + '"]'); if (r) r.checked = true;
      var fmt = a.closest(".fmt"), msg = $("#presupuesto textarea[name=message]");
      var prod = a.getAttribute("data-prod") || (fmt && $("b", fmt).textContent);
      if (prod && msg && (!msg.value || /^(Me interesa|I am interested in): /.test(msg.value))) msg.value = t("Me interesa: ", "I am interested in: ") + prod + ". ";
    });
  });


  /* ---------- catálogo: filtro por medida ---------- */
  $$(".js-filter").forEach(function (g) {
    var list = g.parentNode.querySelector(".js-pcs");
    $$(".chip", g).forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-f");
        $$(".chip", g).forEach(function (x) { x.classList.toggle("is-on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        $$(".pc", list).forEach(function (li) { li.hidden = !!f && li.getAttribute("data-size") !== f; });
      });
    });
  });

  /* ---------- ficha de palet: pestañas 3D / foto ---------- */
  $$(".js-pv").forEach(function (pv) {
    var tabs = $$(".pv-tabs [data-v]", pv.parentNode);
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        pv.setAttribute("data-mode", t.getAttribute("data-v"));
        tabs.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
      });
    });
  });

  /* ---------- maqueta 3D a escala (cajas CSS, sin librerías) ----------
     data-model: L, W (mm); top[] anchos de las tablas superiores (a lo largo); cross ancho de los travesaños;
     blocks [x, z, alto] de los tacos (bx × bz); bottom[] anchos de las tablas inferiores. */
  $$(".js-p3d").forEach(function (st) {
    var m; try { m = JSON.parse(st.getAttribute("data-model")); } catch (e) { return; }
    if (m.tone) st.classList.add("p3--" + m.tone);
    var rig = $(".js-rig", st), K = 0.35;
    function face(b, cls, w, h, tr) {
      var f = d.createElement("i"); f.className = "f " + cls;
      f.style.cssText = "width:" + w + "px;height:" + h + "px;margin:" + (-h / 2) + "px 0 0 " + (-w / 2) + "px;transform:" + tr;
      b.appendChild(f);
    }
    function box(x, y, z, sx, sy, sz, kind, grain) {   /* x,z = centro; y = base (mm, hacia arriba) */
      var w = sx * K, h = sy * K, dd = sz * K, b = d.createElement("div");
      b.className = "p3-b " + kind;
      b.style.transform = "translate3d(" + (x * K) + "px," + (-(y + sy / 2) * K) + "px," + (z * K) + "px)";
      var gx = grain === "x" ? "g-x" : "g-z";
      face(b, "f-t " + gx, w, dd, "rotateX(90deg) translateZ(" + h / 2 + "px)");
      face(b, "f-d " + gx, w, dd, "rotateX(-90deg) translateZ(" + h / 2 + "px)");
      face(b, "f-s " + (grain === "x" ? "g-x" : "f-end"), w, h, "translateZ(" + dd / 2 + "px)");
      face(b, "f-s " + (grain === "x" ? "g-x" : "f-end"), w, h, "rotateY(180deg) translateZ(" + dd / 2 + "px)");
      face(b, "f-e " + (grain === "z" ? "g-x" : "f-end"), dd, h, "rotateY(90deg) translateZ(" + w / 2 + "px)");
      face(b, "f-e " + (grain === "z" ? "g-x" : "f-end"), dd, h, "rotateY(-90deg) translateZ(" + w / 2 + "px)");
      rig.appendChild(b);
    }
    function spread(widths, span) {   /* primera y última al borde, el resto repartidas */
      var n = widths.length, out = [];
      for (var i = 0; i < n; i++) {
        var a = -span / 2 + widths[0] / 2, z = span / 2 - widths[n - 1] / 2;
        out.push(n === 1 ? 0 : a + (z - a) * i / (n - 1));
      }
      return out;
    }
    var L = m.L, W = m.W, bt = m.bt || 22, bh = m.blocks[2], ct = m.ct || 22, tt = m.tt || 22, y = 0;
    var bxs = spread(new Array(m.bx).fill(m.blocks[0]), L), bzs = spread(new Array(m.bz).fill(m.blocks[1]), W);
    if (m.bottomDir === "z") {   /* patines / largueros a lo ancho, bajo cada fila de tacos */
      m.bottom.forEach(function (w, i) { box(bxs[i] || 0, y, 0, w, bt, W, "p3-board", "z"); });
    } else {
      var bz = spread(m.bottom, W);
      m.bottom.forEach(function (w, i) { box(0, y, bz[i], L, bt, w, "p3-board", "x"); });
      if (m.perim) {   /* base cerrada: tablas también a lo ancho en los dos extremos */
        var e0 = m.bottom[0], e1 = m.bottom[m.bottom.length - 1], inner = W - e0 - e1, zc = (e0 - e1) / 2, wx = m.blocks[0];
        [-L / 2 + wx / 2, L / 2 - wx / 2].forEach(function (x) { box(x, y, zc, wx, bt, inner, "p3-board", "z"); });
      }
    }
    y += bt;
    bxs.forEach(function (x) { bzs.forEach(function (z) { box(x, y, z, m.blocks[0], bh, m.blocks[1], "p3-block", "y"); }); });
    y += bh;
    if (m.cross) { bxs.forEach(function (x) { box(x, y, 0, m.cross, ct, W, "p3-board p3-cross", "z"); }); y += ct; }
    var tz = spread(m.top, W);
    m.top.forEach(function (w, i) { box(0, y, tz[i], L, tt, w, "p3-board p3-top", "x"); });
    var H = y + tt;
    rig.style.setProperty("--lift", (H * K / 2) + "px");

    var ang = 32, tilt = -24, k = 1, last = 0, auto = !reduce, idle = 0, vis = true, drag = null;
    function fit() { k = Math.max(0.4, Math.min(1.6, st.clientWidth * (st.clientWidth < 500 ? 0.76 : 0.86) / (Math.sqrt(L * L + W * W) * K))); }   /* a la diagonal: cabe en cualquier ángulo */
    function draw() { rig.style.transform = "translateY(var(--lift)) scale3d(" + k + "," + k + "," + k + ") rotateX(" + tilt + "deg) rotateY(" + ang + "deg)"; }
    function loop(t) {
      if (last && auto && vis && !drag && t > idle) ang = (ang + (t - last) * 0.012) % 360;   /* ~30 s por vuelta */
      last = t; draw();
      if (vis) w.requestAnimationFrame(loop); else last = 0;
    }
    fit(); draw();
    w.addEventListener("resize", function () { fit(); draw(); });
    if ("IntersectionObserver" in w) new IntersectionObserver(function (es) {
      var v = es[0].isIntersecting; if (v && !vis) { vis = true; w.requestAnimationFrame(loop); } vis = v;
    }).observe(st);
    w.requestAnimationFrame(loop);
    st.addEventListener("pointerdown", function (e) { drag = { x: e.clientX, y: e.clientY, a: ang, t: tilt }; st.setPointerCapture(e.pointerId); st.classList.add("is-drag"); });
    st.addEventListener("pointermove", function (e) {
      if (!drag) return;
      ang = drag.a + (e.clientX - drag.x) * 0.45;
      tilt = Math.max(-60, Math.min(-6, drag.t - (e.clientY - drag.y) * 0.3)); draw();
    });
    function up() { if (!drag) return; drag = null; idle = w.performance.now() + 2500; st.classList.remove("is-drag"); }
    st.addEventListener("pointerup", up); st.addEventListener("pointercancel", up);
  });

  /* ---------- diálogo «Solicitar ficha técnica» ---------- */
  var dlg = $("#ficha");
  if (dlg && dlg.showModal) {
    $$(".js-ficha").forEach(function (b) { b.addEventListener("click", function () { dlg.showModal(); var i = $("input[name=name]", dlg); if (i) i.focus(); }); });
    $$("[data-close]", dlg).forEach(function (b) { b.addEventListener("click", function () { dlg.close(); }); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  } else $$(".js-ficha").forEach(function (b) { b.hidden = true; });

  /* ---------- formularios → Formspree ---------- */
  /* ---------- formularios → Formspree ---------- */
  var FALLO = t("No se ha podido enviar. Llámanos al 674 708 456 o escríbenos por WhatsApp.", "We could not send your request. Call us on +34 674 708 456 or message us on WhatsApp.");
  function readPdf(file) {
    return new Promise(function (resolve, reject) {
      if (!file) return resolve(null);
      if (file.size > 8 * 1024 * 1024) return reject(new Error("cv_big"));
      if (!/\.pdf$/i.test(file.name) && file.type !== "application/pdf") return reject(new Error("cv_type"));
      var r = new FileReader(); r.onload = function () { resolve(r.result); }; r.onerror = function () { reject(new Error("cv_read")); }; r.readAsDataURL(file);
    });
  }
  $$("form.js-contact").forEach(function (form) {
    var statusBox = $(".form-status", form), submitBtn = $("button[type=submit]", form);
    var label = submitBtn ? submitBtn.innerHTML : "Enviar";
    var mount = $(".cf-mount", form);
    var captchaProvider = "", turnstileWidgetId = null, recaptchaWidgetId = null, recaptchaVersion = "v3", recaptchaSiteKey = "";
    var captchaPreparation = null;
    function captchaDeadline(promise) {
      return new Promise(function (resolve, reject) {
        var timer = setTimeout(function () { reject(new Error("CAPTCHA timeout; please retry")); }, 12000);
        Promise.resolve(promise).then(function (v) { clearTimeout(timer); resolve(v); }, function (er) { clearTimeout(timer); reject(er); });
      });
    }
    function captchaConfig() {
      return new Promise(function (resolve, reject) {
        var started = Date.now();
        (function check() {
          if (w.__SITE_CONFIG) return resolve(w.__SITE_CONFIG);
          if (Date.now() - started >= 10000) return reject(new Error("CAPTCHA configuration unavailable"));
          setTimeout(check, 100);
        })();
      });
    }
    function captchaScript(src) {
      var scripts = w.__cmsCaptchaScripts || (w.__cmsCaptchaScripts = {});
      if (!scripts[src]) {
        var script;
        scripts[src] = captchaDeadline(new Promise(function (resolve, reject) {
          script = d.createElement("script"); script.src = src; script.async = true; script.defer = true;
          script.onload = resolve; script.onerror = function () { reject(new Error("CAPTCHA script unavailable")); };
          d.head.appendChild(script);
        })).catch(function (er) { delete scripts[src]; if (script) script.remove(); throw er; });
      }
      return scripts[src];
    }
    function prepareCaptcha() {
      if (!captchaPreparation) {
        captchaPreparation = captchaConfig().then(function (cfg) {
          captchaProvider = cfg.captcha_provider || "";
          if (!captchaProvider) return;
          if (captchaProvider === "turnstile") {
            if (!cfg.turnstile_site_key || !mount) throw new Error("CAPTCHA configuration incomplete");
            return (w.turnstile ? Promise.resolve() : captchaScript("https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit")).then(function () {
              if (turnstileWidgetId === null) turnstileWidgetId = w.turnstile.render(mount, { sitekey: cfg.turnstile_site_key, theme: "light", action: "contact" });
            });
          }
          if (captchaProvider === "recaptcha") {
            recaptchaVersion = cfg.recaptcha_version || "v3"; recaptchaSiteKey = cfg.recaptcha_site_key;
            if (!recaptchaSiteKey) throw new Error("CAPTCHA configuration incomplete");
            return (w.grecaptcha && w.grecaptcha.ready ? Promise.resolve() : captchaScript("https://www.google.com/recaptcha/api.js?render=" + (recaptchaVersion === "v2" ? "explicit" : encodeURIComponent(recaptchaSiteKey))))
              .then(function () { return captchaDeadline(new Promise(function (r) { w.grecaptcha.ready(r); })); })
              .then(function () {
                if (recaptchaVersion === "v2" && recaptchaWidgetId === null) {
                  if (!mount) throw new Error("CAPTCHA mount unavailable");
                  recaptchaWidgetId = w.grecaptcha.render(mount, { sitekey: recaptchaSiteKey, theme: "light" });
                }
              });
          }
          throw new Error("Unknown CAPTCHA provider");
        }).catch(function (er) { captchaPreparation = null; throw er; });
      }
      return captchaPreparation;
    }
    form.addEventListener("focusin", function () { prepareCaptcha().catch(function () {}); });
    function getCaptchaToken() {
      return prepareCaptcha().then(function () {
        if (captchaProvider === "turnstile") return ["cf_token", w.turnstile.getResponse(turnstileWidgetId)];
        if (captchaProvider === "recaptcha") {
          if (recaptchaVersion === "v3") return captchaDeadline(w.grecaptcha.execute(recaptchaSiteKey, { action: "contact" })).then(function (t) { return ["recaptcha_token", t]; });
          return ["recaptcha_token", w.grecaptcha.getResponse(recaptchaWidgetId)];
        }
        return [null, null];
      });
    }
    function say(msg, ok) { statusBox.textContent = msg; statusBox.className = "form-status " + (ok ? "is-ok" : "is-err"); }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {}, energias = [], file = null;
      new FormData(form).forEach(function (v, k) {
        if (k === "energias") { energias.push(v); return; }
        if (typeof v !== "string") { if (v && v.size) file = v; return; }
        data[k] = v.trim();
      });
      if (energias.length) data.energias = energias.join(", ");
      var needMail = form.hasAttribute("data-email");
      if (needMail ? (!data.name || !data.email) : (!data.name || !data.phone)) { say(needMail ? t("Indícanos tu nombre y un correo para enviarte la ficha.", "Please give us your name and an email address so we can send you the data sheet.") : t("Indícanos tu nombre y un teléfono para llamarte.", "Please give us your name and a phone number so we can call you."), false); return; }
      if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) { say(t("Revisa el correo electrónico.", "Please check your email address."), false); return; }
      if (!data.privacidad) { say(t("Acepta la política de privacidad para poder enviar el formulario.", "Please accept the privacy policy to send the form."), false); return; }
      data.source = form.getAttribute("data-source") || "contact";
      data.pageUrl = w.location.href; data.lang = EN ? "en" : "es";
      submitBtn.disabled = true; submitBtn.textContent = t("Enviando…", "Sending…"); say("", true);
      readPdf(file).then(function (pdf) {
        if (pdf) { data.deck = pdf; data.deckName = file.name; }
        return getCaptchaToken();
      }).then(function (pair) {
        if (pair[0]) {
          if (!pair[1]) throw new Error("captcha_empty");
          data[pair[0]] = pair[1];
        }
        data._subject = "Web Repalsur · " + (data.source || "contacto") + (data.name ? " · " + data.name : "");
        return fetch("https://formspree.io/f/xzdaejvp", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) });
      }).then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
        .then(function (res) {
          if (res && res.ok) {
            say(form.getAttribute("data-ok") || t("¡Gracias! Hemos recibido tu solicitud y te llamaremos lo antes posible.", "Thank you! We have received your request and will call you as soon as possible."), true);
            form.reset();
            $$(".f-file-ui small", form).forEach(function (s) { s.textContent = t("Ningún archivo seleccionado", "No file selected"); });
            if (w.turnstile && turnstileWidgetId !== null) w.turnstile.reset(turnstileWidgetId);
          } else say(FALLO, false);
        })
        .catch(function (er) {
          var m = er && er.message;
          say(m === "captcha_empty" ? t("Completa la verificación antispam antes de enviar.", "Please complete the anti-spam check before sending.") : FALLO, false);
        })
        .then(function () { submitBtn.disabled = false; submitBtn.innerHTML = label; });
    });
  });





  /* ---------- movimiento: se monta en la primera interacción (o a los 6 s) para no penalizar la carga ---------- */
  var started = false;
  function count(el) {
    var to = +el.getAttribute("data-to"), t0 = null, dur = 1400;
    if (to < 3) return;
    function step(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) w.requestAnimationFrame(step); }
    el.textContent = "0"; w.requestAnimationFrame(step);
  }
  /* vídeo del hero: se pide tras la primera interacción (la foto sigue siendo el LCP) y aparece al reproducirse */
  function heroVideo() {
    var v = $(".js-hero-vid"), c = w.navigator.connection;
    if (!v || reduce || (c && (c.saveData || /2g/.test(c.effectiveType || "")))) return;
    v.src = v.getAttribute(w.innerWidth < 900 ? "data-src-s" : "data-src-l");
    v.addEventListener("playing", function () { v.classList.add("is-on"); }, { once: true });
    var p = v.play(); if (p && p.catch) p.catch(function () {});
    if ("IntersectionObserver" in w) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var q = v.play(); if (q && q.catch) q.catch(function () {}); } else v.pause(); }); }).observe(v);
  }
  function startMotion() {
    if (started) return; started = true;
    ["scroll", "wheel", "pointermove", "touchstart", "keydown"].forEach(function (e) { w.removeEventListener(e, startMotion); });
    root.classList.add("go");
    heroVideo();
    if (reduce || !("IntersectionObserver" in w)) return;
    var vh = w.innerHeight;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in"); io.unobserve(e.target);
        $$(".js-count", e.target).forEach(count);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    var els = $$(".rv, .js-steps");
    els.forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < vh && r.bottom > 0) { el.classList.add("is-in"); } });
    root.classList.add("motion");
    els.forEach(function (el) { if (!el.classList.contains("is-in")) io.observe(el); });
    /* parallax suave de las bandas con foto */
    var bands = $$(".band-ph img"), tick = false;
    function par() {
      tick = false;
      bands.forEach(function (im) { var r = im.parentNode.parentNode.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; im.style.setProperty("--py", ((r.top + r.height / 2 - vh / 2) * -0.12).toFixed(1) + "px"); });
    }
    if (bands.length) { w.addEventListener("scroll", function () { if (!tick) { tick = true; w.requestAnimationFrame(par); } }, { passive: true }); par(); }
  }
  ["scroll", "wheel", "pointermove", "touchstart", "keydown"].forEach(function (e) { w.addEventListener(e, startMotion, { passive: true }); });
  w.setTimeout(startMotion, 6000);
})();
