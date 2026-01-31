/* ===========================
   Data (edit freely)
=========================== */
const PROJECTS = [
  {
    id: "meditrack",
    title: "MediTrack — Personal Health Record (Django)",
    repo: "https://github.com/muradbishr/MediTrack---Personal_Health_Record---Django",
    category: ["web", "uiux"],
    tags: ["Django", "UI/UX", "Security", "SQLite"],
    featured: true,
    subtitle: "Patient-managed health records, document upload, and controlled sharing.",
    summary:
      "A digital Personal Medical Record system designed to help patients manage and update medical history, medications, and tests, and share access securely with healthcare providers.",
    highlights: [
      "Patient record management (history, medications, tests)",
      "Medical document upload and storage",
      "Access control and privacy-first mindset",
      "Clear UI flows and form design"
    ],
    images: [
      "assets/meditrack-welcome.jpeg"
      ,"assets/meditrack-about1.jpeg"
      ,"assets/meditrack-about2.jpeg"
      ,"assets/meditrack-about3.jpeg"
      ,"assets/meditrack-1.jpeg"
      ,"assets/meditrack-2.jpeg"
      ,"assets/meditrack-dashboard.jpeg"
      ,"assets/meditrack-3.jpeg"
      ,"assets/meditrack-4.jpeg"
      ,"assets/meditrack-5.jpeg"
      ,"assets/meditrack-6.jpeg"
      ,"assets/meditrack-7.jpeg"
      ,"assets/meditrack-8.jpeg"
      ,"assets/meditrack-9.jpeg"
      ,"assets/meditrack-10.jpeg"


    ]
    ,  prototype: "https://www.figma.com/proto/vg52qdHYnOLSzMFw3DurjG/Untitled?node-id=0-1&t=qjMXCtsCIFan5PnH-1",

  },
  {
    id: "ds-paper",
    title: "DS Project + Paper (Jupyter)",
    repo: "https://github.com/muradbishr/DS_Project-paper---Jubyter",
    category: ["data"],
    tags: ["Jupyter", "ML", "Pipeline"],
    featured: true,
    subtitle: "Data pipeline + evaluation + written report.",
    summary:
      "A data science project organized as notebooks plus a paper, focusing on a complete workflow: cleaning, modeling, evaluation, and communicating results.",
    highlights: [
      "End-to-end data workflow in notebooks",
      "Evaluation with clear metrics/reporting",
      "Readable structure for academic submission"
    ],
    images: []
  },
  {
    id: "sentiment",
    title: "Sentiment Analysis (Jupyter)",
    repo: "https://github.com/muradbishr/Sentiment_Analysis_Project---Jubyter",
    category: ["data"],
    tags: ["NLP", "Classification", "Jupyter"],
    featured: true,
    subtitle: "Sentiment classification workflow and evaluation.",
    summary:
      "An NLP-focused project exploring sentiment classification with structured preprocessing, training, and evaluation.",
    highlights: [
      "Text preprocessing + modeling workflow",
      "Clear evaluation and iteration",
      "Organized notebooks for readability"
    ],
    images: []
  },
  {
    id: "sms-php",
    title: "Students Management System (PHP)",
    repo: "https://github.com/muradbishr/Students_Management_System---php",
    category: ["web"],
    tags: ["PHP", "CRUD", "Web"],
    featured: false,
    subtitle: "Student data management system.",
    summary:
      "A web system for managing students (CRUD), focused on structured data and practical web features.",
    highlights: ["CRUD operations", "Structured database usage", "Practical web app structure"],
    images: []
  },
  {
    id: "pygame",
    title: "Simple Game (Pygame)",
    repo: "https://github.com/muradbishr/simple-game---pygame",
    category: ["systems"],
    tags: ["Python", "Pygame"],
    featured: false,
    subtitle: "Small game project.",
    summary:
      "A small game built to practice Python logic, game loop structure, and basic UI feedback.",
    highlights: ["Game loop practice", "Input handling", "Simple feedback/UX"],
    images: []
  },
  {
    id: "os-sim",
    title: "OS Simulation Project (C++)",
    repo: "https://github.com/muradbishr/OS-simulation-Project---cpp",
    category: ["systems"],
    tags: ["C++", "OS", "Simulation"],
    featured: false,
    subtitle: "Operating systems simulation exercises.",
    summary:
      "A C++ project exploring OS concepts through simulation and structured logic.",
    highlights: ["OS concept practice", "Structured simulation logic", "C++ implementation"],
    images: []
  },
  {
    id: "packet-tracer",
    title: "Networking Project (Packet Tracer)",
    repo: "https://github.com/muradbishr/Networking-project---PACKET-TRACER",
    category: ["systems"],
    tags: ["Networking", "Packet Tracer"],
    featured: false,
    subtitle: "Network design / simulation.",
    summary:
      "A networking project built in Packet Tracer to practice network design and configuration.",
    highlights: ["Network layout design", "Config practice", "Troubleshooting mindset"],
    images: []
  },
  {
    id: "modeling-sim",
    title: "Modeling & Simulation (Python)",
    repo: "https://github.com/muradbishr/Modeling-Simulation-Project---py",
    category: ["data", "systems"],
    tags: ["Python", "Simulation"],
    featured: false,
    subtitle: "Simulation-focused Python project.",
    summary:
      "A Python project focused on modeling/simulation ideas with clear structure and results.",
    highlights: ["Simulation modeling", "Python implementation", "Readable structure"],
    images: []
  },
  {
    id: "hr-cpp",
    title: "HR Management Project (C++)",
    repo: "https://github.com/muradbishr/HR_Management_project---Cpp",
    category: ["systems"],
    tags: ["C++", "OOP"],
    featured: false,
    subtitle: "HR management practice project.",
    summary:
      "A C++ project practicing OOP design and structured data handling.",
    highlights: ["OOP practice", "Clean structure", "Data handling"],
    images: []
  },
  {
    id: "db-sql",
    title: "DB Project (SQL)",
    repo: "https://github.com/muradbishr/DB-project--SQL",
    category: ["systems"],
    tags: ["SQL", "Database"],
    featured: false,
    subtitle: "Database project work.",
    summary:
      "Database-focused project exploring schema, queries, and structured data design.",
    highlights: ["Schema thinking", "Queries", "Data structure"],
    images: []
  },
  {
    id: "car-rental",
    title: "Car Rental Project (C#)",
    repo: "https://github.com/muradbishr/Car_Rental_project---CS",
    category: ["systems"],
    tags: ["C#", "Logic"],
    featured: false,
    subtitle: "C# programming project.",
    summary:
      "A C# project for practicing structured logic, input handling, and core programming foundations.",
    highlights: ["Core C practice", "Input/output handling", "Program structure"],
    images: []
  }
];

/* ===========================
   Helpers
=========================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ===========================
   Render
=========================== */
function makeProjectCard(p, { featured = false } = {}) {
  const tagHTML = p.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("");

  const cls = ["project-card"];
  if (featured || p.featured) cls.push("featured");

  return `
    <article class="${cls.join(" ")}" data-cats="${p.category.join(",")}" data-id="${escapeHTML(p.id)}">
      <div class="project-top">
        <h4 class="project-title">${escapeHTML(p.title)}</h4>
        <button class="icon-btn" type="button" data-open="${escapeHTML(p.id)}" aria-label="Open details">Details</button>
      </div>
      <p class="project-desc">${escapeHTML(p.subtitle)}</p>
      <div class="project-tags">${tagHTML}</div>
      <div class="project-actions">
        <a class="btn btn-ghost btn-sm" href="${escapeHTML(p.repo)}" target="_blank" rel="noreferrer">Repo</a>
        <button class="btn btn-secondary btn-sm" type="button" data-open="${escapeHTML(p.id)}">View</button>
      </div>
    </article>
  `;
}

function renderProjects() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 3);
  $("#featuredGrid").innerHTML = featured.map(p => makeProjectCard(p, { featured: true })).join("");

  $("#projectsGrid").innerHTML = PROJECTS.map(p => makeProjectCard(p)).join("");
}

renderProjects();

/* ===========================
   Filters
=========================== */
let activeFilter = "all";

function applyFilter() {
  const cards = $$(".project-card", $("#projectsGrid"));
  for (const card of cards) {
    const cats = card.getAttribute("data-cats") || "";
    const show = activeFilter === "all" || cats.split(",").includes(activeFilter);
    card.style.display = show ? "" : "none";
  }
}

$$(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".chip").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

/* ===========================
   Modal
=========================== */
const modal = $("#modal");
const modalClose = $("#modalClose");
const modalClose2 = $("#modalClose2");

function openModal(projectId) {
  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) return;

  $("#modalTitle").textContent = p.title;
  $("#modalSubtitle").textContent = p.subtitle;

  $("#modalTags").innerHTML = p.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("");
  $("#modalSummary").textContent = p.summary;

  const ul = $("#modalHighlights");
  ul.innerHTML = "";
  for (const h of p.highlights) {
    const li = document.createElement("li");
    li.textContent = h;
    ul.appendChild(li);
  }

  const imgWrap = $("#modalImages");
  imgWrap.innerHTML = "";
  const hasImages = Array.isArray(p.images) && p.images.length > 0;

  $("#modalImagesSection").style.display = hasImages ? "" : "none";
  if (hasImages) {
    for (const src of p.images) {
      const div = document.createElement("div");
      div.className = "modal-img";
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${p.title} screenshot`;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      div.appendChild(img);
      imgWrap.appendChild(div);
    }
  }

  const repoBtn = $("#modalRepo");
  repoBtn.href = p.repo;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const protoBtn = document.getElementById("modalProto");
if (p.prototype) {
  protoBtn.href = p.prototype;
  protoBtn.style.display = "";
} else {
  protoBtn.style.display = "none";
}

}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const openId = e.target?.dataset?.open;
  if (openId) openModal(openId);

  if (e.target?.dataset?.close) closeModal();
});

modalClose.addEventListener("click", closeModal);
modalClose2.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

$("#openMediTrack").addEventListener("click", () => openModal("meditrack"));

/* ===========================
   Nav (mobile)
=========================== */
const navToggle = $("#navToggle");
const navMenu = $("#navMenu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* ===========================
   Theme
=========================== */
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  // follow system by default
  // (no attribute set = uses dark variables above, but you can swap if you prefer)
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ===========================
   Contact form -> mailto
=========================== */
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  const subject = encodeURIComponent(`Portfolio contact — ${name}`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from my portfolio site`
  );

  window.location.href = `mailto:murad.bishr7@gmail.com?subject=${subject}&body=${body}`;
});

$("#copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("murad.bishr7@gmail.com");
    $("#copyEmail").textContent = "Copied";
    setTimeout(() => ($("#copyEmail").textContent = "Copy"), 1200);
  } catch {
    alert("Copy failed. Please copy manually: murad.bishr7@gmail.com");
  }
});

$("#showPhone").addEventListener("change", (e) => {
  $("#phoneRow").style.display = e.target.checked ? "" : "none";
});

const revealEls = document.querySelectorAll(".section, .project-card, .case-card, .about-grid, .contact-grid");
revealEls.forEach(el => el.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));


/* ===========================
   Footer year
=========================== */
$("#year").textContent = String(new Date().getFullYear());
