/* Repalsur · aviso de cookies + Google Analytics 4 SOLO tras aceptar (sin Consent Mode «cookieless»:
   antes de aceptar no se descarga gtag.js ni se envía nada a Google). Elección en localStorage 12 meses.
   Enlace «Configurar cookies» en el pie para cambiarla. */
(function () {
  var GA = "G-SZ7JHGXNTT", KEY = "repalsur_consent", YEAR = 365 * 864e5;
  var d = document, w = window, EN = (d.documentElement.lang || "").slice(0, 2) === "en";
  var T = EN ? {
    txt: 'We use Google Analytics cookies to find out how many people visit us and which pages they find useful. They are only installed if you accept. <a href="/en/cookie-policy/">Cookie policy</a>.',
    yes: "Accept", no: "Reject", cfg: "Cookie settings"
  } : {
    txt: 'Usamos cookies de Google Analytics para saber cuántas personas nos visitan y qué páginas les resultan útiles. Solo se instalan si las aceptas. <a href="/politica-de-cookies/">Política de cookies</a>.',
    yes: "Aceptar", no: "Rechazar", cfg: "Configurar cookies"
  };
  function read() { try { var v = JSON.parse(localStorage.getItem(KEY) || "null"); return v && Date.now() - v.t < YEAR ? v.v : null; } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {} }
  var loaded = false;
  function loadGA() {
    if (loaded) return; loaded = true;
    w.dataLayer = w.dataLayer || []; w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag("js", new Date()); w.gtag("config", GA);
    var s = d.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA; d.head.appendChild(s);
  }
  function clearGA() {
    var host = location.hostname.replace(/^www\./, "");
    d.cookie.split(";").forEach(function (c) {
      var n = c.split("=")[0].trim();
      if (/^(_ga|_gcl)/.test(n)) ["", "." + host, host, "www." + host].forEach(function (dom) {
        d.cookie = n + "=; Max-Age=0; path=/" + (dom ? "; domain=" + dom : "");
      });
    });
  }
  var box = null;
  function show() {
    if (box) return;
    box = d.createElement("div"); box.className = "ck"; box.setAttribute("role", "dialog"); box.setAttribute("aria-live", "polite");
    box.setAttribute("aria-label", EN ? "Cookies" : "Aviso de cookies");
    box.innerHTML = "<p>" + T.txt + '</p><div class="ck-b"><button type="button" class="btn ck-no">' + T.no + '</button><button type="button" class="btn ck-yes">' + T.yes + "</button></div>";
    box.querySelector(".ck-yes").onclick = function () { save("yes"); hide(); loadGA(); };
    box.querySelector(".ck-no").onclick = function () { var was = loaded; save("no"); hide(); clearGA(); if (was) location.reload(); };
    d.body.appendChild(box);
  }
  function hide() { if (box) { box.remove(); box = null; } }
  function footerLink() {
    var f = d.querySelector(".ftr-legal"); if (!f || f.querySelector(".ck-cfg")) return;
    var b = d.createElement("button"); b.type = "button"; b.className = "ck-cfg"; b.textContent = T.cfg; b.onclick = show; f.appendChild(b);
  }
  function start() { footerLink(); var c = read(); if (c === "yes") loadGA(); else if (c !== "no") show(); }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", start); else start();
})();
