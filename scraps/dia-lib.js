// Shared builder for Dia-style case study pages. Evaluated via new Function('A', src)(atlassianHtml)
const INK='rgb(17,17,17)', MUTED='rgb(96,95,90)', BG='rgb(247,246,243)', P='rgb(97,85,245)', LINE='rgba(17,17,17,0.08)';
const NUM="font-family: Geist, sans-serif; font-weight: 500; letter-spacing: -0.04em;";
const ARW='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: block;"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
const CHECK=(c='rgb(34,160,107)',s=18)=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16" style="display: block; flex: none;"><circle cx="8" cy="8" r="7.5" fill="${c}"></circle><path d="M4.8 8.3l2.1 2.1 4.3-4.6" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
const WARN=(s=18)=>`<svg width="${s}" height="${s}" viewBox="0 0 16 16" style="display: block; flex: none;"><path d="M8 1.5l7 12.5H1z" fill="rgb(245,166,35)"></path><path d="M8 6v3.6" stroke="white" stroke-width="1.6" stroke-linecap="round"></path><circle cx="8" cy="11.8" r=".9" fill="white"></circle></svg>`;

let head = A.slice(0, A.indexOf('<div style="position: relative; background: '+BG));
head = head.replace('    @media (max-width: 900px) {', `    [data-loop] [data-st] { opacity: 0; transform: translateY(10px); transition: opacity .5s ease, transform .7s cubic-bezier(.16,1,.3,1); }
    [data-loop][data-play] [data-st] { opacity: 1; transform: none; }
    [data-loop] [data-bar2] { transform: scaleX(0); transform-origin: left center; transition: transform 1.5s cubic-bezier(.45,0,.2,1); }
    [data-loop][data-play] [data-bar2] { transform: none; }
    [data-loop] [data-fill] { transform: scaleX(0); transform-origin: left center; transition: transform 2.6s cubic-bezier(.45,0,.2,1); }
    [data-loop][data-play] [data-fill] { transform: none; }
    [data-loop] [data-vfill] { transform: scaleY(0); transform-origin: top center; transition: transform 3.2s cubic-bezier(.45,0,.2,1); }
    [data-loop][data-play] [data-vfill] { transform: none; }
    [data-loop] [data-tick2] { background: rgb(255,255,255) !important; box-shadow: inset 0 0 0 2px rgba(17,17,17,0.25) !important; transition: background .35s ease, box-shadow .35s ease; }
    [data-loop] [data-tick2] svg { opacity: 0; transform: scale(.4); transition: opacity .3s ease, transform .45s cubic-bezier(.34,1.56,.64,1); transition-delay: inherit; }
    [data-loop][data-play] [data-tick2] { background: rgb(34,160,107) !important; box-shadow: none !important; }
    [data-loop][data-play] [data-tick2] svg { opacity: 1; transform: none; }
    [data-loop][data-play] [data-checking] { animation: checking 1.7s ease both; animation-delay: inherit; }
    [data-loop] [data-checking] { opacity: 0; }
    [data-loop][data-reset] *, [data-loop][data-reset] { transition: none !important; animation: none !important; }
    @keyframes checking { 0% { opacity: 0; } 15% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; } }
    [data-spot2] { transition: left .9s cubic-bezier(.65,0,.35,1), top .9s cubic-bezier(.65,0,.35,1), width .9s cubic-bezier(.65,0,.35,1), height .9s cubic-bezier(.65,0,.35,1); }
    [data-ring2] { transition: stroke-dashoffset 2.2s cubic-bezier(.16,1,.3,1); }
    @media (max-width: 900px) {`);
const setTitle = (t) => head.replace(/<title>[^<]*<\/title>/, '<title>'+t+'</title>');
const nav = (() => { const i = A.indexOf('<div data-bar'); return A.slice(i, A.indexOf('<section data-screen-label="Hero"', i)); })();
const footer = (() => { const i = A.indexOf('<footer'); return A.slice(i, A.indexOf('</footer>', i) + 9); })();
const aura = (() => { const i = A.indexOf('<div aria-hidden="true" data-aura'); return A.slice(i, A.indexOf('</div>', i) + 6); })();
const leaks = (() => { const i = A.indexOf('<div aria-hidden="true" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;">'); const j = A.indexOf('</div>\n    </div>', i); return A.slice(i, j + 17); })();
let tail = A.slice(A.indexOf('\n</x-dc>'));
tail = tail.replace("g._i = i; g._t = Date.now();", `g._i = i; g._t = Date.now();
      var sp = g.getAttribute('data-spots'), s2 = g.querySelector('[data-spot2]');
      if (sp && s2) { var pp = sp.split(';')[i].split(','); s2.style.left = pp[0] + '%'; s2.style.top = pp[1] + '%'; s2.style.width = pp[2] + '%'; s2.style.height = pp[3] + '%'; }`);
tail = tail.replace("var s = document.querySelector('[data-spot]'); if (!s) return;", `var s = document.querySelector('[data-spot]'); if (!s) return;
      if (s.getAttribute('data-spots') && !s._parsed) { s._parsed = 1; spots = [{ l: 0, t: 0, w: 100, h: 100, label: '' }].concat(s.getAttribute('data-spots').split(';').map(function (x) { var a = x.split(','); return { l: +a[0], t: +a[1], w: +a[2], h: +a[3], label: a.slice(4).join(',') }; })); self.si = 0; }`);
tail = tail.replace("el.removeAttribute('data-play'); setTimeout(function () { el.setAttribute('data-play', ''); }, 700);", "el.setAttribute('data-reset', ''); el.removeAttribute('data-play'); setTimeout(function () { el.removeAttribute('data-reset'); }, 60); setTimeout(function () { el.setAttribute('data-play', ''); }, 700);");
tail = tail.replace("if (r.top < vh * 0.8 && r.bottom > 0) el.setAttribute('data-play', '');", "if (r.top < vh * 0.8 && r.bottom > 0) { el.setAttribute('data-play', ''); q('[data-ring2]', el).forEach(function (c) { c.style.strokeDashoffset = c.getAttribute('data-to'); }); }");
tail = tail.replace("}, 9000);", "}, 11000);");
tail = tail.replace("q('[data-loop][data-play]').forEach(function (el) {", "q('[data-loop][data-play]:not([data-once])').forEach(function (el) {");

const eyebrow=(t)=>`<span style="font-family: Geist, sans-serif; font-weight: 500; font-size: 13px; line-height: 1; letter-spacing: 0.14em; text-transform: uppercase; color: ${MUTED};">${t}</span>`;
const H2=`margin: 0; font-family: Geist, sans-serif; font-weight: 500; font-size: 54px; line-height: 1.05; letter-spacing: -0.04em; color: ${INK}; text-wrap: balance;`;
const H3=`margin: 0; font-family: Geist, sans-serif; font-weight: 500; font-size: 28px; line-height: 1.2; letter-spacing: -0.025em; color: ${INK}; text-wrap: pretty;`;
const BODY=`margin: 0; font-family: Geist, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6; color: ${MUTED}; text-wrap: pretty;`;
const SM=`margin: 0; font-family: Geist, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.55; color: ${MUTED}; text-wrap: pretty;`;
const CARD=`border-radius: 28px; background: rgb(255,255,255); box-shadow: 0 0 0 1px rgba(0,0,0,0.05);`;
const SHADOW='0 0 0 1px rgba(0,0,0,0.05), 0 40px 90px -40px rgba(30,30,60,0.35)';
const words=(t)=>t.split(/\s+/).map(w=>`<span data-w style="opacity: 0.16; transition: opacity .2s linear;">${w}</span>`).join(' ');
const hw=(t,d)=>`<span data-hw style="display: inline-block; animation-delay: ${d}s;">${t}</span>`;
const sec=(label,inner,pad='40px 32px 140px')=>`
  <section data-sec data-screen-label="${label}" style="width: 1200px; max-width: 100%; margin: 0 auto; padding: ${pad}; display: flex; flex-direction: column; gap: 56px;">${inner}
  </section>`;
const frame=(src,alt,pad=10)=>`<div style="border-radius: 24px; background: rgb(255,255,255); padding: ${pad}px; box-shadow: ${SHADOW}; overflow: hidden;"><img src="${src}" alt="${alt}" style="display: block; width: 100%; height: auto; border-radius: 16px;"></div>`;
const bullet=(t)=>`<li style="display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 10px; font-family: Geist, sans-serif; font-size: 17px; line-height: 1.5; color: ${INK};"><span style="color: ${P}; padding-top: 3px;">${ARW}</span><span style="text-wrap: pretty;">${t}</span></li>`;
const ul=(items)=>`<ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px;">${items.map(bullet).join('')}</ul>`;
const chapter=(n,eb,title)=>`
    <div data-rv data-g style="display: grid; grid-template-columns: auto minmax(0,1fr); gap: 32px; align-items: end; padding-bottom: 32px; box-shadow: inset 0 -1px 0 ${LINE};">
      <span style="${NUM} font-size: 128px; line-height: 0.8; color: ${P};">${n}</span>
      <div style="display: flex; flex-direction: column; gap: 16px;">${eyebrow(eb)}<h2 data-h2 style="${H2}">${title}</h2></div>
    </div>`;
const heading=(eb,title,body,max=900)=>`
    <div data-rv style="display: flex; flex-direction: column; gap: 20px; max-width: ${max}px;">
      ${eb?eyebrow(eb):''}
      <h2 data-h2 style="${H2}">${title}</h2>
      ${body?`<p style="${BODY}">${body}</p>`:''}
    </div>`;
const split=(left,right,cols='5fr 7fr',align='center')=>{const [a,b]=cols.split(' ');return `
    <div data-g style="display: grid; grid-template-columns: minmax(0,${a}) minmax(0,${b}); gap: 56px; align-items: ${align};">
      <div data-rv style="display: flex; flex-direction: column; gap: 20px;">${left}</div>
      <div data-rv style="transition-delay: .1s; min-width: 0;">${right}</div>
    </div>`;};
const btnDark=(href,label,attrs='')=>`<a href="${href}" ${attrs} style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; border-radius: 999px; background: ${INK}; color: rgb(255,255,255); font-family: Geist, sans-serif; font-weight: 500; font-size: 16px; line-height: 1; white-space: nowrap; transition: background .3s ease, transform .3s ease;" style-hover="background: ${P}; color: rgb(255,255,255); transform: translateY(-1px);">${label}</a>`;
const btnLight=(href,label,attrs='')=>`<a href="${href}" ${attrs} style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; border-radius: 999px; background: rgb(255,255,255); color: ${INK}; box-shadow: inset 0 0 0 1px rgba(17,17,17,0.1); font-family: Geist, sans-serif; font-weight: 500; font-size: 16px; line-height: 1; white-space: nowrap; transition: box-shadow .3s ease, transform .3s ease;" style-hover="color: ${INK}; box-shadow: inset 0 0 0 1px rgba(17,17,17,0.3); transform: translateY(-1px);">${label}</a>`;
const auraX=(w,h,op,pos)=>{let a=aura.replace('width: 110%; height: 110%',`width: ${w}; height: ${h}`).replace('opacity: 1',`opacity: ${op}`); if(pos) a=a.replace('left: 50%; top: 50%',pos); return a;};
const cnt=(to,dec,pre,suf)=>`<span data-count data-to="${to}" data-dec="${dec}" data-pre="${pre}" data-suf="${suf}">${pre}0${suf}</span>`;
const stat=(num,label,extra,dark,i)=>`
      <div data-rv style="position: relative; overflow: hidden; border-radius: 28px; padding: 32px; display: flex; flex-direction: column; gap: 14px; min-height: 250px; ${dark?`background: ${INK}; color: rgb(255,255,255);`:CARD} transition-delay: ${(i%3)*0.08}s;">
        ${dark?auraX('120%','160%','0.7','left: 90%; top: 90%'):''}
        <span style="position: relative; font-family: Geist, sans-serif; font-weight: 500; font-size: 64px; line-height: 1; letter-spacing: -0.05em; color: ${dark?'rgb(255,255,255)':INK};">${num}</span>
        <span style="position: relative; margin-top: auto; font-family: Geist, sans-serif; font-size: 17px; line-height: 1.45; color: ${dark?'rgb(236,234,250)':INK}; text-wrap: pretty;">${label}</span>
        ${extra?`<span style="position: relative; font-family: Geist, sans-serif; font-size: 14px; line-height: 1.5; color: ${dark?'rgb(200,198,220)':MUTED}; text-wrap: pretty;">${extra}</span>`:''}
      </div>`;
const hero=({badge,badgeIcon,title,role,timeline,team,visual,chips=[]})=>`
  <section data-screen-label="Hero" style="position: relative; padding: 168px 32px 40px; display: flex; flex-direction: column; align-items: center; text-align: center;">
    ${leaks}
    <div data-hw style="position: relative; display: inline-flex; align-items: center; gap: 10px; padding: 6px 16px 6px 6px; border-radius: 999px; background: rgba(255,255,255,0.8); box-shadow: 0 0 0 1px rgba(0,0,0,0.06); font-family: Geist, sans-serif; font-weight: 500; font-size: 14px; color: ${INK};">${badgeIcon}${badge}</div>
    <h1 data-h1 aria-label="${title.replace(/<[^>]+>/g,'')}" style="position: relative; margin: 28px 0 0; max-width: 1080px; font-family: Geist, sans-serif; font-weight: 500; font-size: 80px; line-height: 1.03; letter-spacing: -0.05em; color: ${INK}; display: flex; flex-wrap: wrap; justify-content: center; align-items: baseline; column-gap: 0.22em;">
      ${title.split(' ').map((w,i)=>hw(w,(0.1+i*0.06).toFixed(2))).join('')}
    </h1>
    <div data-hw data-g style="position: relative; margin-top: 48px; width: 880px; max-width: 100%; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1px; border-radius: 20px; overflow: hidden; background: ${LINE}; box-shadow: 0 0 0 1px ${LINE}; animation-delay: .8s;">
      ${[['Role',role],['Timeline',timeline],['Team',team]].map(c=>`<div style="background: rgba(255,255,255,0.75); padding: 20px 24px; display: flex; flex-direction: column; gap: 8px; text-align: left;">${eyebrow(c[0])}<span style="font-family: Geist, sans-serif; font-size: 16px; line-height: 1.4; color: ${INK};">${c[1]}</span></div>`).join('')}
    </div>
    ${chips.length?`<div data-hw style="position: relative; margin-top: 16px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; animation-delay: .9s;">${chips.map(c=>`<span style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: rgba(97,85,245,0.1); font-family: Geist, sans-serif; font-weight: 500; font-size: 14px; color: rgb(66,54,214);">${c}</span>`).join('')}</div>`:''}
    <div data-hw style="position: relative; width: 1200px; max-width: 100%; margin-top: 80px; animation-delay: 1.05s;">
      ${aura}
      <div style="position: relative; z-index: 1; border-radius: 24px; padding: 10px; background: rgba(255,255,255,0.6); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: 0 0 0 1px rgba(255,255,255,0.7), 0 0 0 1px rgba(0,0,0,0.05), 0 50px 120px -40px rgba(50,40,110,0.45);">
        ${visual}
      </div>
    </div>
  </section>`;
const spotImg=(src,alt,spots)=>`<div style="position: relative; border-radius: 16px; overflow: hidden; background: rgb(255,255,255);">
          <img src="${src}" alt="${alt}" style="display: block; width: 100%; height: auto;">
          <div style="position: absolute; inset: 0; overflow: hidden; border-radius: 16px; pointer-events: none;">
            <div data-spot data-spots="${spots}" style="position: absolute; left: 0%; top: 0%; width: 100%; height: 100%; border-radius: 12px; box-shadow: 0 0 0 9999px rgba(16,16,24,0), 0 0 0 2px rgba(97,85,245,0);">
              <span data-spot-label style="position: absolute; left: 0; top: -44px; padding: 8px 14px; border-radius: 999px; background: ${INK}; color: rgb(255,255,255); font-family: Geist, sans-serif; font-weight: 500; font-size: 14px; line-height: 1; white-space: nowrap; opacity: 0;"></span>
            </div>
          </div>
        </div>`;
const vtabs=(tabs,paneHtml,ratio,spots)=>`
    <div data-rv data-tabs${spots?` data-spots="${spots}"`:''} data-g style="display: grid; grid-template-columns: minmax(0,4fr) minmax(0,8fr); gap: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column; gap: 4px;">${tabs.map((t,i)=>`
        <button data-tab="${i}" data-vtab style="position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; padding: 22px 0 24px; border: none; background: transparent; text-align: left; cursor: pointer; color: ${INK}; box-shadow: inset 0 -1px 0 ${LINE};">
          <span style="display: flex; align-items: baseline; gap: 14px;"><span style="${NUM} font-size: 22px; color: ${P};">0${i+1}</span><span style="font-family: Geist, sans-serif; font-weight: 500; font-size: 21px; line-height: 1.3; letter-spacing: -0.02em; text-wrap: pretty;">${t[0]}</span></span>
          <span style="font-family: Geist, sans-serif; font-size: 15px; line-height: 1.55; color: ${MUTED}; padding-left: 38px; text-wrap: pretty;">${t[1]}</span>
          <span data-prog style="position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: ${INK};"></span>
        </button>`).join('')}
      </div>
      <div style="position: relative;">
        ${auraX('110%','110%','0.6')}
        <div style="position: relative; z-index: 1; aspect-ratio: ${ratio}; border-radius: 24px; overflow: hidden; background: rgb(255,255,255); box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 50px 110px -50px rgba(50,40,110,0.45);">${paneHtml}
        </div>
      </div>
    </div>`;
const gallery=(imgs,h=300)=>`
    <div data-rv data-mqwrap style="overflow: hidden; margin: 0 -32px; -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent); mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);">
      <div data-mq style="display: flex; gap: 20px; width: max-content; animation-duration: 60s;">${[...imgs,...imgs].map(s=>`<div style="flex: none; height: ${h}px; border-radius: 20px; overflow: hidden; background: rgb(255,255,255); box-shadow: 0 0 0 1px rgba(0,0,0,0.05);"><img src="${s}" alt="" style="display: block; height: 100%; width: auto;"></div>`).join('')}</div>
    </div>`;
const PREV={mac:['./MacquarieDia.dc.html','Macquarie','Broker Portal: Reducing application handling time','./assets/macquarie-preview.png'],atl:['./AtlassianDia.dc.html','Atlassian','Teams as the organising principle for work across Atlassian apps','./assets/teams-preview.png'],cba:['./CommBankDia.dc.html','CommBank','Digitisation: Onboarding your business with CommBank','./assets/cba-screen-v3.png'],wbc:['./WestpacDia.dc.html','Westpac','Westpac GEL: Australia&rsquo;s first banking Design System','./assets/westpac-preview.png']};
const cta=(others)=>`
  <section data-sec data-screen-label="Contact" style="padding: 40px 32px 120px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
    <div data-rv style="position: relative; width: 1200px; max-width: 100%; border-radius: 36px; overflow: hidden; background: rgb(255,255,255); box-shadow: 0 0 0 1px rgba(0,0,0,0.05); padding: 110px 32px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px;">
      ${auraX('80%','140%','0.55')}
      <h2 data-h2 style="position: relative; ${H2} max-width: 760px;">Reach out for a detailed walk-through</h2>
      <p style="position: relative; ${BODY} max-width: 520px;">You can also view this more detailed case study via Figma in your own time. Whilst you&rsquo;re here, check out my other case studies.</p>
      <div style="position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">${btnDark('https://www.linkedin.com/in/timtianlehe/','Connect on LinkedIn','target="_blank"')}${btnLight('./assets/TimHe_CV_26.pdf','Download CV','download target="_blank"')}</div>
    </div>
    <div data-g style="width: 1200px; max-width: 100%; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px;">${others.map(k=>PREV[k]).map((o,i)=>`
      <a data-wc data-rv href="${o[0]}" style="position: relative; height: 340px; border-radius: 28px; background: rgb(236,234,229); overflow: hidden; padding: 28px; display: flex; flex-direction: column; gap: 8px; color: ${INK}; transition-delay: ${i*0.08}s;">
        <span style="position: relative; z-index: 1;">${eyebrow(o[1])}</span>
        <span style="position: relative; z-index: 1; font-family: Geist, sans-serif; font-weight: 500; font-size: 20px; line-height: 1.25; letter-spacing: -0.015em; text-wrap: pretty;">${o[2]}</span>
        <div data-wimg style="position: absolute; left: 28px; right: 28px; bottom: -30px; height: 190px; border-radius: 12px; overflow: hidden; background: rgb(255,255,255); box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 20px 40px -20px rgba(30,30,60,0.3);"><div data-wpan style="position: absolute; inset: 0; background: rgb(255,255,255) url(${o[3]}) center top / cover no-repeat;"></div></div>
      </a>`).join('')}
    </div>
  </section>`;
const page=(title,sections)=>setTitle(title)+`<div style="position: relative; background: ${BG}; min-height: 100vh; font-family: Geist, sans-serif; color: ${INK}; overflow-x: clip;">
${nav}
${sections.join('\n')}
    ${footer}
</div>`+tail;
return {INK,MUTED,BG,P,LINE,NUM,ARW,CHECK,WARN,eyebrow,H2,H3,BODY,SM,CARD,SHADOW,words,hw,sec,frame,bullet,ul,chapter,heading,split,btnDark,btnLight,aura,auraX,leaks,cnt,stat,hero,spotImg,vtabs,gallery,cta,page};
