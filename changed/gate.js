/* ─────────────────────────────────────────────────────────────
   Simple access gate (DETERRENT ONLY — not real security).
   Anyone technical can bypass this by reading the page source.
   Use it to keep casual visitors out, not to protect secrets.

   ► To change the password, edit the line below.
───────────────────────────────────────────────────────────── */
var SITE_PASSWORD = "tim2026";
/* ───────────────────────────────────────────────────────────── */

(function () {
  var KEY = "site-unlocked";
  try { if (sessionStorage.getItem(KEY) === "yes") return; } catch (e) {}

  function build() {
    if (document.getElementById("__gate")) return;

    var wrap = document.createElement("div");
    wrap.id = "__gate";
    wrap.setAttribute("style", [
      "position:fixed", "inset:0", "z-index:2147483647",
      "background:rgb(250,245,237)",
      "display:flex", "align-items:center", "justify-content:center",
      "font-family:Alexandria,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
      "padding:24px"
    ].join(";"));

    var card = document.createElement("div");
    card.setAttribute("style", [
      "width:100%", "max-width:400px", "background:#fff",
      "border-radius:24px", "box-shadow:0 20px 60px rgba(12,12,13,0.12)",
      "padding:40px 36px", "box-sizing:border-box"
    ].join(";"));

    var h = document.createElement("div");
    h.textContent = "This site is private";
    h.setAttribute("style", "font-weight:700;font-size:26px;line-height:1.2;color:#000;margin-bottom:8px;");

    var p = document.createElement("div");
    p.textContent = "Enter password to continue";
    p.setAttribute("style", "font-weight:300;font-size:16px;line-height:1.5;color:#000;margin-bottom:24px;");

    var input = document.createElement("input");
    input.type = "password";
    input.placeholder = "Password";
    input.setAttribute("style", [
      "width:100%", "box-sizing:border-box", "padding:14px 16px",
      "font-family:Inter,sans-serif", "font-size:16px",
      "border:1.5px solid #e5e5ea", "border-radius:10px", "outline:none",
      "margin-bottom:12px", "transition:border-color .2s ease"
    ].join(";"));
    input.addEventListener("focus", function(){ input.style.borderColor = "rgb(97,85,245)"; });
    input.addEventListener("blur", function(){ input.style.borderColor = "#e5e5ea"; });

    var err = document.createElement("div");
    err.setAttribute("style", "font-family:Inter,sans-serif;font-size:14px;color:#d23;height:18px;margin-bottom:8px;opacity:0;transition:opacity .2s ease;");
    err.textContent = "Incorrect password";

    var btn = document.createElement("button");
    btn.textContent = "Enter";
    btn.setAttribute("style", [
      "width:100%", "padding:14px 24px", "border:none", "cursor:pointer",
      "background:rgb(97,85,245)", "color:#fff",
      "font-family:Inter,sans-serif", "font-weight:600", "font-size:16px",
      "border-radius:4px", "transition:background .25s ease"
    ].join(";"));
    btn.addEventListener("mouseover", function(){ btn.style.background = "rgb(80,68,224)"; });
    btn.addEventListener("mouseout", function(){ btn.style.background = "rgb(97,85,245)"; });

    function submit() {
      if (input.value === SITE_PASSWORD) {
        try { sessionStorage.setItem(KEY, "yes"); } catch (e) {}
        wrap.style.transition = "opacity .3s ease";
        wrap.style.opacity = "0";
        setTimeout(function(){ if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 320);
      } else {
        err.style.opacity = "1";
        input.value = "";
        input.focus();
      }
    }
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });

    card.appendChild(h); card.appendChild(p);
    card.appendChild(input); card.appendChild(err); card.appendChild(btn);
    wrap.appendChild(card);
    (document.body || document.documentElement).appendChild(wrap);
    setTimeout(function(){ input.focus(); }, 50);
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
