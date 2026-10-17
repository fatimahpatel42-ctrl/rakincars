/*
  RAKIN CARS — "LAUNCHING SOON" PAGE
  ==================================
  While LAUNCHED is false, visitors see the "Launching soon" page.
  Anyone with the access code can enter it and see the full website
  (their browser remembers it, so they only type it once).

  You can also share a preview link that unlocks automatically:
     https://rakincars.com/?code=YOURCODE

  ON LAUNCH DAY: change  false  to  true  below and upload this file.
*/
var LAUNCHED = false;

(function () {
  "use strict";
  if (LAUNCHED) return;

  // the access code is stored as a fingerprint, not as plain text
  var CODE_HASH = "c298f084";
  var KEY = "rc_access";

  function hash(s) {
    s = String(s || "").trim().toUpperCase().replace(/\s+/g, "");
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return ("0000000" + h.toString(16)).slice(-8);
  }
  function ok(v) { return hash(v) === CODE_HASH; }
  function remember() { try { localStorage.setItem(KEY, CODE_HASH); } catch (e) {} }
  function unlocked() { try { return localStorage.getItem(KEY) === CODE_HASH; } catch (e) { return false; } }

  // ?code=XXXX in the address unlocks and tidies the address
  try {
    var m = location.search.match(/[?&]code=([^&#]*)/);
    if (m && ok(decodeURIComponent(m[1]))) {
      remember();
      var clean = location.search.replace(/([?&])code=[^&#]*&?/, "$1").replace(/[?&]$/, "");
      history.replaceState(null, "", location.pathname + clean + location.hash);
    }
  } catch (e) {}

  if (unlocked()) return;

  window.RAKIN_LOCKED = true;
  var root = document.documentElement;
  root.classList.add("rc-locked");

  var css =
    "html.rc-locked,html.rc-locked body{overflow:hidden!important;background:#0b0c0d!important}" +
    "html.rc-locked body>*:not(#rc-gate){display:none!important}" +
    "#rc-gate{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;" +
    "padding:24px 16px;color:#f2f4f5;font-family:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center;overflow-y:auto;background:#0b0c0d}" +
    "#rc-gate .g-bg{position:fixed;inset:0;background:url(assets/img/showroom.jpg) center/cover no-repeat;transform:scale(1.08);" +
    "animation:gZoom 22s ease-out forwards;filter:saturate(.9)}" +
    "#rc-gate .g-shade{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(11,12,13,.55) 0%,rgba(11,12,13,.86) 60%,#0b0c0d 100%)}" +
    "#rc-gate .g-in{position:relative;max-width:640px;width:100%}" +
    /* sweeping spotlights */
    "#rc-gate .g-beam{position:fixed;top:-10vh;width:60vw;height:130vh;pointer-events:none;mix-blend-mode:screen;opacity:0;transform-origin:50% 0;" +
    "background:conic-gradient(from 162deg at 50% 0%,transparent 0deg,rgba(255,236,200,.17) 18deg,transparent 36deg);" +
    "-webkit-mask:linear-gradient(#000 10%,transparent 85%);mask:linear-gradient(#000 10%,transparent 85%)}" +
    "#rc-gate .g-beam.b1{left:-12vw;animation:gFade 1.5s .3s forwards,gSwayL 9s 1.5s ease-in-out infinite alternate}" +
    "#rc-gate .g-beam.b2{right:-12vw;animation:gFade 1.5s .6s forwards,gSwayR 10s 1.5s ease-in-out infinite alternate}" +
    /* film grain */
    "#rc-gate .g-grain{position:fixed;inset:-50%;width:200%;height:200%;pointer-events:none;opacity:.32;" +
    "background:url(assets/img/grain.png) repeat;" +
    "animation:gGrain .9s steps(6) infinite}" +
    /* logo with shine */
    "#rc-gate .g-logo-w{position:relative;width:min(300px,70vw);margin:0 auto 26px;opacity:0;animation:gDrop 1.1s .1s cubic-bezier(.2,.8,.2,1.2) forwards}" +
    "#rc-gate .g-logo{width:100%;height:auto;display:block}" +
    "#rc-gate .g-logo-w::after{content:'';position:absolute;inset:0;pointer-events:none;" +
    "-webkit-mask:url(assets/img/logo-white.png) center/contain no-repeat;mask:url(assets/img/logo-white.png) center/contain no-repeat;" +
    "background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.95) 50%,transparent 65%) -150% 0/250% 100% no-repeat;" +
    "animation:gShine 4.5s 1.4s ease-in-out infinite}" +
    /* letter-by-letter headline */
    "#rc-gate h1 .l{display:inline-block;opacity:0;transform:translateY(.5em) rotateX(-70deg);animation:gLetter .6s cubic-bezier(.2,.8,.2,1) forwards}" +
    "#rc-gate h1 .soon{color:#e1251b;animation:gLetter .6s cubic-bezier(.2,.8,.2,1) forwards,gGlow 2.8s ease-in-out infinite}" +
    /* car driving along the road */
    "#rc-gate .g-car{position:absolute;bottom:1px;left:0;width:84px;height:auto;opacity:0;" +
    "filter:drop-shadow(0 0 6px rgba(225,37,27,.6));animation:gDrive 6s 1.6s linear infinite}" +
    "#rc-gate .g-road::before{content:'';position:absolute;inset:-1px 0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.55) 0 14px,transparent 14px 30px);" +
    "opacity:.35;animation:gLane .6s linear infinite}" +
    /* whatsapp pulse */
    "#rc-gate .g-btn.wa{position:relative}" +
    "#rc-gate .g-btn.wa::after{content:'';position:absolute;inset:-2px;border-radius:999px;border:2px solid #1f9d55;animation:gRing 2.4s 2.2s ease-out infinite;opacity:0}" +
    "#rc-gate .g-logo{width:100%;height:auto;display:block}" +
    "#rc-gate .g-kick{font-size:13px;letter-spacing:.32em;text-transform:uppercase;color:#e1251b;font-weight:700;opacity:0;animation:gUp .8s .35s ease forwards}" +
    "#rc-gate h1{font-family:Oswald,'Arial Narrow',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:.02em;" +
    "font-size:clamp(44px,11vw,92px);line-height:.95;margin:12px 0 16px;perspective:600px}" +
    "#rc-gate .g-sub{color:#c7cdd0;font-size:clamp(15px,3.6vw,18px);line-height:1.55;margin:0 auto 6px;max-width:520px;opacity:0;animation:gUp .8s .65s ease forwards}" +
    "#rc-gate .g-sw{color:#8b9397;font-size:14px;font-style:italic;margin:0 0 26px;opacity:0;animation:gUp .8s .75s ease forwards}" +
    "#rc-gate .g-road{position:relative;height:2px;max-width:420px;margin:30px auto 30px;background:linear-gradient(90deg,transparent,#e1251b,transparent);" +
    "opacity:0;animation:gFade .8s 1.2s ease forwards;-webkit-mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}" +
    "#rc-gate .g-roadw{position:relative;max-width:420px;margin:4px auto 30px;padding-top:22px;overflow:hidden}" +
    "#rc-gate .g-btns{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px;opacity:0;animation:gUp .8s .95s ease forwards}" +
    "#rc-gate .g-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:999px;font-weight:700;font-size:15px;" +
    "text-decoration:none;color:#fff;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);backdrop-filter:blur(6px);transition:transform .2s,background .2s}" +
    "#rc-gate .g-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.12)}" +
    "#rc-gate .g-btn.wa{background:#1f9d55;border-color:#1f9d55}#rc-gate .g-btn.wa:hover{background:#23b061}" +
    "#rc-gate .g-btn svg{width:18px;height:18px;flex:none}" +
    "#rc-gate .g-meta{color:#8b9397;font-size:14px;line-height:1.7;opacity:0;animation:gUp .8s 1.05s ease forwards}" +
    "#rc-gate .g-code{margin-top:34px;opacity:0;animation:gUp .8s 1.2s ease forwards}" +
    "#rc-gate .g-link{background:none;border:0;color:#8b9397;font:inherit;font-size:13px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}" +
    "#rc-gate .g-link:hover{color:#f2f4f5}" +
    "#rc-gate form{display:none;gap:8px;justify-content:center;margin-top:12px}" +
    "#rc-gate form.show{display:flex}" +
    "#rc-gate input{width:min(220px,55vw);padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.45);" +
    "color:#fff;font:inherit;font-size:16px;letter-spacing:.12em;text-transform:uppercase;text-align:center;outline:none}" +
    "#rc-gate input:focus{border-color:#e1251b}" +
    "#rc-gate form button{padding:12px 18px;border-radius:10px;border:0;background:#e1251b;color:#fff;font:inherit;font-weight:700;font-size:15px;cursor:pointer}" +
    "#rc-gate form button:hover{background:#b81c14}" +
    "#rc-gate .g-err{color:#ff6b62;font-size:13px;min-height:18px;margin-top:8px}" +
    "#rc-gate form.shake{animation:gShake .4s}" +
    "#rc-gate.leaving{animation:gOut .5s ease forwards}" +
    "@keyframes gUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}" +
    "@keyframes gZoom{to{transform:scale(1)}}" +
    "@keyframes gFade{to{opacity:1}}" +
    "@keyframes gDrop{0%{opacity:0;transform:translateY(-30px) scale(.9)}100%{opacity:1;transform:none}}" +
    "@keyframes gShine{0%{background-position:-150% 0}45%,100%{background-position:250% 0}}" +
    "@keyframes gLetter{to{opacity:1;transform:none}}" +
    "@keyframes gGlow{0%,100%{text-shadow:0 0 0 rgba(225,37,27,0)}50%{text-shadow:0 0 28px rgba(225,37,27,.75),0 0 60px rgba(225,37,27,.35)}}" +
    "@keyframes gDrive{0%{transform:translateX(440px);opacity:0}8%{opacity:1}85%{opacity:1}100%{transform:translateX(-110px);opacity:0}}" +
    "@keyframes gLane{to{background-position:-30px 0}}" +
    "@keyframes gRing{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.25,1.6)}}" +
    "@keyframes gSwayL{from{transform:rotate(14deg)}to{transform:rotate(-8deg)}}" +
    "@keyframes gSwayR{from{transform:rotate(-14deg)}to{transform:rotate(8deg)}}" +
    "@keyframes gGrain{0%{transform:translate(0,0)}17%{transform:translate(-7%,4%)}33%{transform:translate(5%,-6%)}50%{transform:translate(-4%,-3%)}67%{transform:translate(6%,5%)}83%{transform:translate(-5%,7%)}100%{transform:translate(3%,-4%)}}" +
    "@keyframes gShake{0%,100%{transform:none}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}" +
    "@keyframes gOut{to{opacity:0;transform:scale(1.03)}}" +
    "@media (prefers-reduced-motion:reduce){#rc-gate *{animation-duration:.01s!important;animation-delay:0s!important}}";
  var st = document.createElement("style");
  st.textContent = css;
  (document.head || root).appendChild(st);

  var I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    ph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
  };

  function letters(word, start, cls) {
    var out = "";
    for (var i = 0; i < word.length; i++)
      out += '<span class="l' + (cls ? " " + cls : "") + '" aria-hidden="true" style="animation-delay:' +
        (start + i * 0.05).toFixed(2) + 's' + (cls ? "," + (2 + i * 0.05).toFixed(2) + "s" : "") + '">' + word[i] + "</span>";
    return out;
  }
  function build() {
    if (document.getElementById("rc-gate")) return;
    var g = document.createElement("div");
    g.id = "rc-gate";
    g.setAttribute("role", "main");
    g.innerHTML =
      '<div class="g-bg"></div><div class="g-shade"></div>' +
      '<div class="g-beam b1"></div><div class="g-beam b2"></div>' +
      '<div class="g-grain"></div>' +
      '<div class="g-in">' +
        '<div class="g-logo-w"><img class="g-logo" src="assets/img/logo-white.png" alt="Rakin Cars"></div>' +
        '<div class="g-kick">Mikocheni · Dar es Salaam</div>' +
        '<h1 aria-label="Launching soon">' + letters("Launching", 0.55, "") + '<br>' + letters("soon", 1.05, "soon") + '</h1>' +
        '<p class="g-sub">Premium pre-owned luxury cars, hand-picked and inspected. Our new website is almost ready.</p>' +
        '<p class="g-sw">Tovuti yetu mpya inakuja hivi karibuni.</p>' +
        '<div class="g-roadw"><img class="g-car" src="assets/img/logo-car.png" alt=""><div class="g-road" style="margin:0"></div></div>' +
        '<div class="g-btns">' +
          '<a class="g-btn wa" href="https://wa.me/255689091111?text=' + encodeURIComponent("Hi Rakin Cars, I'd like to know what cars you have available.") + '" target="_blank" rel="noopener">' + I.wa + 'WhatsApp us</a>' +
          '<a class="g-btn" href="https://instagram.com/rakincars.tz" target="_blank" rel="noopener">' + I.ig + '@rakincars.tz</a>' +
          '<a class="g-btn" href="tel:+255689091111">' + I.ph + '+255 689 091 111</a>' +
        '</div>' +
        '<div class="g-code">' +
          '<button type="button" class="g-link" id="g-show">Have an access code?</button>' +
          '<form id="g-form" autocomplete="off">' +
            '<input id="g-in" type="text" inputmode="text" autocapitalize="characters" spellcheck="false" placeholder="Enter code" aria-label="Access code">' +
            '<button type="submit">Enter</button>' +
          '</form>' +
          '<div class="g-err" id="g-err" aria-live="polite"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(g);

    var form = g.querySelector("#g-form"), input = g.querySelector("#g-in"), err = g.querySelector("#g-err");
    g.querySelector("#g-show").addEventListener("click", function () {
      form.classList.add("show"); this.style.display = "none"; input.focus();
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (ok(input.value)) {
        remember();
        err.textContent = "";
        g.classList.add("leaving");
        setTimeout(function () { location.reload(); }, 450);
      } else {
        err.textContent = "That code isn't right — please try again.";
        form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
        input.select();
      }
    });
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
