/* =====================================================
   EDIT YOUR CONTENT HERE. The page is built from this data.
   Items marked TODO are placeholders for you to replace.
   ===================================================== */
const DATA = {
  about:
    "I'm a second-year Diploma student in Computer System and Network at Jigme Namgyel Engineering College, under the Royal University of Bhutan. I enjoy learning how networks, servers and software work together, and I back my studies with hands-on courses in Cisco networking, Linux administration, Python and PHP/Laravel. My goal is to grow into a skilled IT professional who builds reliable systems and useful software.",
  facts: [
    ["Studying", "Diploma in Computer System and Network (2nd year)"],
    ["College", "Jigme Namgyel Engineering College, RUB"],
    ["Interests", "Networking, Linux, Python, web development"],
    ["Career goal", "IT professional in systems, networks and software"],
  ],
  skills: [
    { icon: "</>", title: "Programming Languages", items: ["Python", "PHP"] },
    { icon: "🌐", title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "Python Tkinter (GUI)"] },
    { icon: "⚙️", title: "Backend Development", items: ["PHP", "Laravel"] },
    { icon: "🛰️", title: "Networking", items: ["CCNA: Introduction to Networks", "Switching, Routing and Wireless"] },
    { icon: "🛠️", title: "Tools and Technologies", items: ["Linux Server Administration", "Git", "GitHub"] },
  ],
  projects: [
    {
      title: "JNEC Club Management System",
      status: "Project",
      description:
        "A club management system built for Jigme Namgyel Engineering College clubs. Source code is available on GitHub.",
      tech: ["TODO: add the technologies you used"],
      image: "", // e.g. "assets/club-system.png" (add a screenshot in the assets folder)
      github: "https://github.com/05240137jnec-coder/JNEC-Club-Management-System",
      live: "",
    },
    {
      title: "TODO: Project 2 title",
      status: "Add your project",
      description: "TODO: Replace this with a short description of your second project.",
      tech: ["TODO"],
      image: "",
      github: "",
      live: "",
      todo: true,
    },
    {
      title: "TODO: Project 3 title",
      status: "Add your project",
      description: "TODO: Replace this with a short description of your third project.",
      tech: ["TODO"],
      image: "",
      github: "",
      live: "",
      todo: true,
    },
  ],
  education: [
    {
      title: "Diploma in Computer System and Network",
      place: "Jigme Namgyel Engineering College, Royal University of Bhutan",
      when: "Currently in 2nd year",
      text: "Studying computer systems, networking and related technologies.",
    },
  ],
  certificates: [
    { name: "Master Full-Stack Web Development with Laravel & PHP", by: "Board Infinity via Coursera", date: "Sep 20, 2026", link: "https://coursera.org/verify/HKBI763C6VHE" },
    { name: "Python Tkinter: Design, Build & Integrate GUIs", by: "EDUCBA via Coursera", date: "Sep 20, 2026", link: "https://coursera.org/verify/L1ODON8O7R89" },
    { name: "Becoming a Linux Server Admin", by: "Packt via Coursera", date: "Sep 21, 2026", link: "https://coursera.org/verify/H08EWMIBP0WV" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", by: "Cisco Networking Academy, via JNEC", date: "Jul 27, 2026", link: "" },
    { name: "CCNA: Introduction to Networks", by: "Cisco Networking Academy, via JNEC", date: "Jul 27, 2026", link: "" },
  ],
  contact: [
    { label: "Email", text: "05240147.jnec@rub.edu.bt", href: "mailto:05240147.jnec@rub.edu.bt" },
    { label: "Phone", text: "+975 16140139", href: "tel:+97516140139" },
    { label: "GitHub", text: "github.com/05240137jnec-coder", href: "https://github.com/05240137jnec-coder" },
    // TODO: add LinkedIn or other social links here, e.g.
    // { label: "LinkedIn", text: "linkedin.com/in/your-name", href: "https://linkedin.com/in/your-name" },
  ],
};

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const make = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------------- render ---------------- */
function render() {
  $("#aboutText").textContent = DATA.about;
  $("#aboutFacts").innerHTML = DATA.facts.map(([k, v]) => `<div class="fact"><b>${esc(k)}</b>${esc(v)}</div>`).join("");

  const sg = $("#skillsGrid");
  DATA.skills.forEach((g) => {
    const c = make("article", "card reveal",
      `<h3><span class="ico" aria-hidden="true">${g.icon}</span>${esc(g.title)}</h3>
       <ul class="tags">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
    sg.appendChild(c);
  });

  const pl = $("#projectsList");
  DATA.projects.forEach((p, i) => {
    const media = p.image
      ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" />`
      : `<span class="p-num" aria-hidden="true">0${i + 1}</span>`;
    const links = [
      p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub repository &rarr;</a>` : "",
      p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live project &rarr;</a>` : "",
    ].join("") || `<span class="none">No public links yet</span>`;
    const art = make("article", "project reveal" + (p.todo ? " todo" : ""),
      `<div class="p-media">${media}</div>
       <div class="p-body">
         <span class="status-tag">${esc(p.status)}</span>
         <h3>${esc(p.title)}</h3>
         <p>${esc(p.description)}</p>
         <ul class="tags">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
         <div class="p-links">${links}</div>
       </div>`);
    pl.appendChild(art);
  });

  $("#timeline").innerHTML = DATA.education.map((e) =>
    `<div class="t-item reveal"><span class="when">${esc(e.when)}</span><h3>${esc(e.title)}</h3><p><strong>${esc(e.place)}</strong></p><p>${esc(e.text)}</p></div>`).join("");

  $("#certList").innerHTML = DATA.certificates.map((c) =>
    `<li class="reveal"><div><strong>${esc(c.name)}</strong><small>${esc(c.by)} &middot; ${esc(c.date)}</small></div>${
      c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener noreferrer">Verify</a>` : ""}</li>`).join("");

  $("#contactList").innerHTML = DATA.contact.map((c) =>
    `<li><a href="${esc(c.href)}"${c.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><small>${esc(c.label)}</small>${esc(c.text)}</a></li>`).join("");

  $("#footSocial").innerHTML = DATA.contact.filter((c) => c.href.startsWith("http") || c.label === "Email")
    .map((c) => `<a href="${esc(c.href)}"${c.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(c.label)}</a>`).join("");

  $("#year").textContent = new Date().getFullYear();
}

/* ---------------- theme ---------------- */
function initTheme() {
  const root = document.documentElement;
  if (!localStorage.getItem("theme") && matchMedia("(prefers-color-scheme: dark)").matches) root.dataset.theme = "dark";
  $("#themeBtn").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

/* ---------------- nav, scroll, reveal ---------------- */
function initNav() {
  const burger = $("#burger"), menu = $("#menu"), nav = $("#nav"), toTop = $("#toTop");
  const close = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu"); };
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  const links = [...menu.querySelectorAll("a")];
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    toTop.classList.toggle("show", scrollY > 600);
    const y = scrollY + innerHeight * 0.35;
    let cur = sections[0];
    sections.forEach((s) => { if (s.offsetTop <= y) cur = s; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(e); });
}

/* ---------------- contact form ---------------- */
function initForm() {
  const form = $("#contactForm"), status = $("#formStatus");
  const rules = {
    name: (v) => (v.trim().length < 2 ? "Please enter your name (at least 2 characters)." : ""),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address."),
    message: (v) => (v.trim().length < 10 ? "Message should be at least 10 characters." : ""),
  };
  const check = (name) => {
    const f = form.elements[name], msg = rules[name](f.value);
    $("#err-" + name).textContent = msg;
    f.closest(".field").classList.toggle("invalid", !!msg);
    f.setAttribute("aria-invalid", String(!!msg));
    return !msg;
  };
  Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", () => check(n)));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.className = "status";
    const ok = Object.keys(rules).map(check).every(Boolean);
    if (!ok) { status.textContent = "Please fix the highlighted fields."; status.classList.add("bad"); return; }
    const to = DATA.contact.find((c) => c.label === "Email").text;
    const subject = encodeURIComponent("Portfolio message from " + form.name.value.trim());
    const body = encodeURIComponent(form.message.value.trim() + "\n\nFrom: " + form.name.value.trim() + " (" + form.email.value.trim() + ")");
    status.textContent = "Opening your email app with your message ready to send...";
    status.classList.add("ok");
    location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

/* ---------------- hero animation ---------------- */
// Each letter of PORTFOLIO flips (rotates) in turn from the first letter to the last,
// switching between a solid face and an outlined face, then the wave repeats.
function initHero() {
  const stage = $(".anim"), word = $("#word"), disp = $("#warpDisp"), turb = $("#warpTurb");
  if (!stage || !word) return;

  const text = word.dataset.text || word.textContent.trim();
  word.textContent = "";
  const letters = [...text].map((ch) => {
    const s = document.createElement("span");
    s.className = "ch";
    s.innerHTML = '<i class="f">' + esc(ch) + '</i><i class="b">' + esc(ch) + "</i>";
    word.appendChild(s);
    return s;
  });

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { if (disp) disp.setAttribute("scale", "0"); return; }

  const PERIOD = 2.8;   // seconds between flips of the same letter
  const STAGGER = 0.14; // delay between neighbouring letters (the wave)
  const FLIP = 0.45;    // share of the period spent flipping
  const WARP = 14;      // gentle warp strength
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  let t = 0, last = performance.now(), boost = 0, visible = true, running = false;

  function frame(now) {
    if (!visible) { running = false; return; }
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now; t += dt; boost = Math.max(0, boost - dt * 1.2);

    letters.forEach((el, i) => {
      const local = (t - i * STAGGER) / PERIOD;
      let angle = 0;
      if (local > 0) {
        const n = Math.floor(local), p = Math.min((local - n) / FLIP, 1);
        angle = 180 * (n + ease(p));
      }
      el.style.transform = "perspective(800px) rotateY(" + (angle % 360).toFixed(1) + "deg)";
    });

    if (disp && turb) {
      disp.setAttribute("scale", (WARP * Math.abs(Math.sin(t * 1.1)) + 30 * boost).toFixed(1));
      turb.setAttribute("baseFrequency", "0.003 " + (0.014 + 0.008 * Math.sin(t * 0.6)).toFixed(4));
    }
    requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(stage);

  // mouse parallax on the red block + extra warp while moving
  stage.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    stage.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    stage.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    boost = 1;
  });
  stage.addEventListener("pointerleave", () => { stage.style.setProperty("--mx", 0); stage.style.setProperty("--my", 0); });
  start();
}

/* ---------------- background video + sound ---------------- */
// Browsers block autoplay with sound, so the video starts muted.
// The "Sound" button lets the visitor turn the audio on (a click is required).
function initVideo() {
  const v = $("#bgVideo"), btn = $("#soundBtn"), wrap = $(".bg-video");
  if (!v || !btn) return;
  const label = $(".s-label", btn);

  function setUI() {
    const on = !v.muted;
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Turn background video sound off" : "Turn background video sound on");
    label.textContent = on ? "Sound on" : "Sound off";
  }

  v.muted = true;
  setUI();

  // if the video file is missing, hide it and the button (the page keeps working)
  v.addEventListener("error", () => { wrap.style.display = "none"; btn.hidden = true; }, true);

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    v.pause(); v.removeAttribute("autoplay"); btn.hidden = true;
  } else {
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }

  btn.addEventListener("click", async () => {
    v.muted = !v.muted;
    if (!v.muted) {
      v.volume = 0.7;
      try { await v.play(); } catch (e) { v.muted = true; }
    }
    setUI();
  });

  // keep the video clearer at the top of the page, calmer further down for readability
  const root = document.documentElement;
  const update = () => {
    const p = Math.min(scrollY / (innerHeight * 0.8), 1);
    root.style.setProperty("--scrim", Math.round(50 + 35 * p) + "%");
  };
  addEventListener("scroll", update, { passive: true });
  update();
}

render();
initTheme();
initNav();
initReveal();
initForm();
initHero();
initVideo();