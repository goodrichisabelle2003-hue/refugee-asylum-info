const RESOURCE_URL = "data/resources.json";
const PLAN_KEY = "bienvenueAidPlan";

const state = {
  resources: [],
  filters: {
    query: "",
    need: "all",
    region: "all",
    status: "all",
    urgency: "all",
    language: "all",
    type: "all",
    quality: "all",
    cost: "all",
  },
  language: "en",
  saved: readSavedPlan(),
};

const steps = [
  {
    title: "Reach first reception",
    text: "Contact SPADA or a local association to start orientation toward the asylum registration route.",
  },
  {
    title: "Register and keep proof",
    text: "Attend official appointments, keep documents safe, and ask what deadline applies next.",
  },
  {
    title: "Secure basic needs",
    text: "Ask about accommodation, welfare support, domiciliation, health coverage, and emergency shelter.",
  },
  {
    title: "Prepare your story",
    text: "Build a timeline, collect evidence, translate key documents, and seek legal support before interviews or appeals.",
  },
];

const translations = {
  en: {
    skipLink: "Skip to find help",
    navUrgent: "Urgent help",
    navFind: "Find help",
    navPlan: "Saved plan",
    eyebrow: "France asylum support navigator",
    heroTitle: "Find reliable asylum, legal, health, and welfare help in France.",
    heroText: "Search verified public information and nonprofit support without entering personal case details.",
    startButton: "Find help",
    urgentButton: "Emergency numbers",
    translationNote: "UI labels are translated. Resource details remain in the verified source language unless reviewed translation is available.",
    urgentEyebrow: "Use official numbers first",
    urgentTitle: "Urgent help in France",
    matcherEyebrow: "Find help",
    matcherTitle: "Search by need, place, status, and language",
    searchLabel: "Search resources",
    needLabel: "Need",
    regionLabel: "Area",
    statusLabel: "Situation",
    urgencyLabel: "Urgency",
    languageLabel: "Language",
    typeLabel: "Access",
    qualityLabel: "Data quality",
    costLabel: "Cost",
    planEyebrow: "Private on this device",
    planTitle: "Saved plan",
    planPrivacy: "Saved items stay in this browser only. Do not save names, case facts, or identity details.",
    printPlan: "Print plan",
    clearPlan: "Clear plan",
    workflowEyebrow: "First week checklist",
    workflowTitle: "Common first steps",
    resourcesEyebrow: "Matched resources",
    reportLink: "Report outdated information",
    footerDisclaimer: "This app organizes public information. It is not legal advice, not a government service, and does not collect personal case details.",
    lastDataUpdate: "Last data update",
    emptyPlan: "Save resources to build a simple checklist.",
    noResults: "No exact matches. Try clearing a filter, choosing national/online resources, or searching a broader word.",
    loading: "Loading verified resources...",
    loadError: "Could not load resource data. If you opened the file directly, run a local web server and try again.",
    all: "All",
    results: "resources",
    result: "resource",
    showDetails: "Show details",
    hideDetails: "Hide details",
    save: "Save to plan",
    remove: "Remove from plan",
    source: "Source",
    lastVerified: "Last verified",
    nextStep: "Next step",
    eligibility: "Eligibility",
    cost: "Cost",
    languages: "Languages",
    serviceArea: "Service area",
    dataQuality: "Data quality",
    website: "Open source",
    hours: "Hours",
    phone: "Phone",
    email: "Email",
    address: "Address",
    verificationNotes: "Verification notes",
    currentLanguage: "Current language",
  },
  fr: {
    skipLink: "Aller a la recherche d'aide",
    navUrgent: "Aide urgente",
    navFind: "Trouver de l'aide",
    navPlan: "Plan sauvegarde",
    eyebrow: "Orientation asile en France",
    heroTitle: "Trouvez une aide fiable pour l'asile, le droit, la sante et le social en France.",
    heroText: "Cherchez des informations publiques verifiees et des soutiens associatifs sans entrer de details personnels.",
    startButton: "Trouver de l'aide",
    urgentButton: "Numeros d'urgence",
    translationNote: "Les libelles de l'interface sont traduits. Les details des ressources restent dans la langue verifiee de la source sauf traduction relue.",
    urgentEyebrow: "Utilisez d'abord les numeros officiels",
    urgentTitle: "Aide urgente en France",
    matcherEyebrow: "Trouver de l'aide",
    matcherTitle: "Chercher par besoin, lieu, situation et langue",
    searchLabel: "Rechercher",
    needLabel: "Besoin",
    regionLabel: "Zone",
    statusLabel: "Situation",
    urgencyLabel: "Urgence",
    languageLabel: "Langue",
    typeLabel: "Acces",
    qualityLabel: "Qualite des donnees",
    costLabel: "Cout",
    planEyebrow: "Prive sur cet appareil",
    planTitle: "Plan sauvegarde",
    planPrivacy: "Les elements sauvegardes restent dans ce navigateur. Ne sauvegardez pas de noms, faits du dossier ou identite.",
    printPlan: "Imprimer",
    clearPlan: "Effacer",
    workflowEyebrow: "Premiere semaine",
    workflowTitle: "Premieres etapes courantes",
    resourcesEyebrow: "Ressources trouvees",
    reportLink: "Signaler une information perimee",
    footerDisclaimer: "Cette application organise des informations publiques. Ce n'est pas un conseil juridique, ni un service gouvernemental, et elle ne collecte pas de details personnels.",
    lastDataUpdate: "Derniere mise a jour des donnees",
    emptyPlan: "Sauvegardez des ressources pour creer une liste simple.",
    noResults: "Aucun resultat exact. Supprimez un filtre, choisissez national/en ligne, ou cherchez un terme plus large.",
    loading: "Chargement des ressources verifiees...",
    loadError: "Impossible de charger les donnees. Si vous avez ouvert le fichier directement, lancez un serveur local.",
    all: "Tout",
    results: "ressources",
    result: "ressource",
    showDetails: "Voir les details",
    hideDetails: "Masquer les details",
    save: "Sauvegarder",
    remove: "Retirer",
    source: "Source",
    lastVerified: "Verifie le",
    nextStep: "Prochaine etape",
    eligibility: "Eligibilite",
    cost: "Cout",
    languages: "Langues",
    serviceArea: "Zone couverte",
    dataQuality: "Qualite",
    website: "Ouvrir la source",
    hours: "Horaires",
    phone: "Telephone",
    email: "Email",
    address: "Adresse",
    verificationNotes: "Notes de verification",
    currentLanguage: "Langue actuelle",
  },
  dr: {
    skipLink: "رفتن به بخش یافتن کمک",
    navUrgent: "کمک فوری",
    navFind: "یافتن کمک",
    navPlan: "برنامه ذخیره‌شده",
    eyebrow: "راهنمای حمایت پناهندگی در فرانسه",
    heroTitle: "کمک قابل اعتماد برای پناهندگی، حقوق، صحت و رفاه در فرانسه پیدا کنید.",
    heroText: "معلومات عمومی بررسی‌شده و حمایت انجمن‌ها را بدون وارد کردن جزئیات شخصی جستجو کنید.",
    startButton: "یافتن کمک",
    urgentButton: "شماره‌های اضطراری",
    translationNote: "برچسب‌های برنامه ترجمه شده‌اند. جزئیات منابع تا زمان بازبینی ترجمه، به زبان منبع معتبر نشان داده می‌شود.",
    urgentEyebrow: "اول از شماره‌های رسمی استفاده کنید",
    urgentTitle: "کمک فوری در فرانسه",
    matcherEyebrow: "یافتن کمک",
    matcherTitle: "براساس نیاز، محل، وضعیت و زبان جستجو کنید",
    searchLabel: "جستجوی منابع",
    needLabel: "نیاز",
    regionLabel: "منطقه",
    statusLabel: "وضعیت",
    urgencyLabel: "فوریت",
    languageLabel: "زبان",
    typeLabel: "روش دسترسی",
    qualityLabel: "کیفیت معلومات",
    costLabel: "هزینه",
    planEyebrow: "خصوصی در همین دستگاه",
    planTitle: "برنامه ذخیره‌شده",
    planPrivacy: "موارد ذخیره‌شده فقط در همین مرورگر می‌ماند. نام، جزئیات پرونده یا هویت را ذخیره نکنید.",
    printPlan: "چاپ برنامه",
    clearPlan: "پاک کردن",
    workflowEyebrow: "فهرست هفته اول",
    workflowTitle: "گام‌های معمول اول",
    resourcesEyebrow: "منابع پیشنهادی",
    reportLink: "گزارش معلومات قدیمی",
    footerDisclaimer: "این برنامه معلومات عمومی را منظم می‌کند. مشوره حقوقی نیست، خدمات دولتی نیست و جزئیات شخصی جمع‌آوری نمی‌کند.",
    lastDataUpdate: "آخرین به‌روزرسانی معلومات",
    emptyPlan: "منابع را ذخیره کنید تا یک فهرست ساده بسازید.",
    noResults: "نتیجه دقیق پیدا نشد. یک فیلتر را پاک کنید، منابع ملی/آنلاین را انتخاب کنید، یا کلمه عمومی‌تر جستجو کنید.",
    loading: "در حال بارگذاری منابع بررسی‌شده...",
    loadError: "معلومات منابع بارگذاری نشد. اگر فایل را مستقیم باز کرده‌اید، یک سرور محلی اجرا کنید.",
    all: "همه",
    results: "منبع",
    result: "منبع",
    showDetails: "نمایش جزئیات",
    hideDetails: "پنهان کردن جزئیات",
    save: "ذخیره در برنامه",
    remove: "حذف از برنامه",
    source: "منبع",
    lastVerified: "آخرین بررسی",
    nextStep: "گام بعدی",
    eligibility: "شرایط استفاده",
    cost: "هزینه",
    languages: "زبان‌ها",
    serviceArea: "منطقه خدمات",
    dataQuality: "کیفیت معلومات",
    website: "باز کردن منبع",
    hours: "ساعت‌ها",
    phone: "تیلفون",
    email: "ایمیل",
    address: "آدرس",
    verificationNotes: "یادداشت‌های بررسی",
    currentLanguage: "زبان فعلی",
  },
};

const languageOrder = ["en", "fr", "dr"];
const languageNames = { en: "English", fr: "Français", dr: "دری" };
const labelMaps = {
  en: {},
  fr: {
    accessibility: "accessibilite",
    appeal: "recours",
    appointment: "rendez-vous",
    dublin: "procedure Dublin",
    emergency: "urgence",
    family: "famille",
    "family-with-children": "famille avec enfants",
    food: "alimentation",
    free: "gratuit",
    health: "sante",
    housing: "hebergement",
    "in-person": "sur place",
    integration: "integration",
    language: "langue",
    legal: "juridique",
    national: "national",
    nonprofit: "association",
    official: "officiel",
    online: "en ligne",
    phone: "telephone",
    plan: "a preparer",
    safety: "securite",
    "Needs review": "A verifier",
    today: "aujourd'hui",
    unknown: "inconnu",
    week: "cette semaine",
    welfare: "aide sociale",
    work: "travail",
    Verified: "Verifie",
  },
  dr: {
    accessibility: "دسترسی‌پذیری",
    appeal: "استیناف",
    appointment: "وقت ملاقات",
    dublin: "روند دوبلین",
    emergency: "اضطراری",
    family: "خانواده",
    "family-with-children": "خانواده با کودکان",
    food: "غذا",
    free: "رایگان",
    health: "صحت",
    housing: "سرپناه",
    "in-person": "حضوری",
    integration: "ادغام",
    language: "زبان",
    legal: "حقوقی",
    national: "ملی",
    nonprofit: "انجمن غیرانتفاعی",
    official: "رسمی",
    online: "آنلاین",
    phone: "تیلفون",
    plan: "برنامه‌ریزی",
    safety: "امنیت",
    "Needs review": "نیاز به بازبینی",
    today: "امروز",
    unknown: "نامعلوم",
    week: "این هفته",
    welfare: "رفاه",
    work: "کار",
    Verified: "بررسی‌شده",
  },
};
const urgencyRank = { today: 0, week: 1, plan: 2 };
const sourceRank = { emergency: 0, official: 1, nonprofit: 2, "legal-information": 3, directory: 4, other: 5 };

const nodes = {
  resourceGrid: document.querySelector("#resourceGrid"),
  urgentGrid: document.querySelector("#urgentGrid"),
  resultCount: document.querySelector("#resultCount"),
  savedPlan: document.querySelector("#savedPlan"),
  languageToggle: document.querySelector("#languageToggle"),
  lastDataUpdate: document.querySelector("#lastDataUpdate"),
};

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function label(value) {
  return labelMaps[state.language][value] || value;
}

function readSavedPlan() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PLAN_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function persistPlan() {
  localStorage.setItem(PLAN_KEY, JSON.stringify(state.saved));
}

function el(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (key === "className") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "htmlFor") node.htmlFor = value;
    else if (key.startsWith("aria")) node.setAttribute(key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`), value);
    else node.setAttribute(key, value);
  });
  const childList = Array.isArray(children) ? children : [children];
  childList.filter(Boolean).forEach((child) => node.append(child));
  return node;
}

function formatList(items) {
  return Array.isArray(items) && items.length ? items.map(label).join(", ") : "Unknown";
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function matchesArray(resource, field, value) {
  if (value === "all") return true;
  return Array.isArray(resource[field]) && resource[field].map(normalize).includes(normalize(value));
}

function searchableText(resource) {
  return normalize([
    resource.name,
    resource.category,
    resource.summary,
    resource.description,
    resource.service_area,
    resource.eligibility,
    resource.cost,
    resource.source_name,
    resource.next_step,
    ...(resource.needs || []),
    ...(resource.statuses || []),
    ...(resource.regions || []),
    ...(resource.cities || []),
    ...(resource.languages || []),
  ].join(" "));
}

function matchesFilters(resource) {
  const query = normalize(state.filters.query);
  const serviceAreaMatch = state.filters.region === "all" ||
    matchesArray(resource, "regions", state.filters.region) ||
    matchesArray(resource, "cities", state.filters.region) ||
    normalize(resource.service_area).includes(normalize(state.filters.region));
  return (
    (!query || searchableText(resource).includes(query)) &&
    matchesArray(resource, "needs", state.filters.need) &&
    serviceAreaMatch &&
    matchesArray(resource, "statuses", state.filters.status) &&
    (state.filters.urgency === "all" || resource.urgency === state.filters.urgency) &&
    matchesArray(resource, "languages", state.filters.language) &&
    matchesArray(resource, "resource_type", state.filters.type) &&
    (state.filters.quality === "all" || resource.data_quality === state.filters.quality) &&
    (state.filters.cost === "all" || normalize(resource.cost) === normalize(state.filters.cost))
  );
}

function scoreResource(resource) {
  let score = 0;
  if (state.filters.urgency === "today" && resource.urgency === "today") score -= 100;
  if (state.filters.need !== "all" && matchesArray(resource, "needs", state.filters.need)) score -= 35;
  if (state.filters.status !== "all" && matchesArray(resource, "statuses", state.filters.status)) score -= 25;
  if (resource.data_quality === "Verified") score -= 18;
  if (resource.source_type === "official" || resource.source_type === "emergency") score -= 12;
  if (state.filters.region === "all" && (resource.regions || []).some((r) => ["national", "online"].includes(r))) score -= 8;
  score += urgencyRank[resource.urgency] ?? 5;
  score += sourceRank[resource.source_type] ?? 9;
  return score;
}

function filteredResources() {
  return state.resources.filter(matchesFilters).sort((a, b) => scoreResource(a) - scoreResource(b) || a.name.localeCompare(b.name));
}

function setOptions(selectId, options) {
  const select = document.querySelector(`#${selectId}`);
  select.replaceChildren();
  options.forEach(({ value, label }) => select.append(el("option", { value, text: label })));
}

function uniqueFrom(field) {
  const set = new Set();
  state.resources.forEach((resource) => {
    const value = resource[field];
    if (Array.isArray(value)) value.forEach((item) => item && set.add(item));
    else if (value) set.add(value);
  });
  return [...set].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  setOptions("needFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("needs").map((value) => ({ value, label: label(value) }))]);
  const areas = new Set(["national", "online"]);
  state.resources.forEach((resource) => [...(resource.regions || []), ...(resource.cities || [])].forEach((item) => item && areas.add(item)));
  setOptions("regionFilter", [{ value: "all", label: t("all") }, ...[...areas].sort().map((value) => ({ value, label: label(value) }))]);
  setOptions("statusFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("statuses").map((value) => ({ value, label: label(value) }))]);
  setOptions("urgencyFilter", ["all", "today", "week", "plan"].map((value) => ({ value, label: value === "all" ? t("all") : label(value) })));
  setOptions("languageFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("languages").map((value) => ({ value, label: value }))]);
  setOptions("typeFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("resource_type").map((value) => ({ value, label: label(value) }))]);
  setOptions("qualityFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("data_quality").map((value) => ({ value, label: label(value) }))]);
  setOptions("costFilter", [{ value: "all", label: t("all") }, ...uniqueFrom("cost").map((value) => ({ value, label: label(value) }))]);
  Object.entries(state.filters).forEach(([key, value]) => {
    const node = document.querySelector(`#${key}Filter`);
    if (node) node.value = value;
  });
}

function renderUrgentResources() {
  const urgent = state.resources.filter((resource) => resource.urgency === "today").slice(0, 5);
  nodes.urgentGrid.replaceChildren(...urgent.map((resource) => {
    const article = el("article", { className: "urgent-card" });
    article.append(
      el("span", { className: "urgent-number", text: resource.phone || "!" }),
      el("div", {}, [
        el("h3", { text: resource.name }),
        el("p", { text: resource.summary }),
      ])
    );
    return article;
  }));
}

function renderSteps() {
  const stepsNode = document.querySelector("#steps");
  stepsNode.replaceChildren(...steps.map((step, index) => el("article", { className: "step" }, [
    el("strong", { text: String(index + 1) }),
    el("h3", { text: step.title }),
    el("p", { text: step.text }),
  ])));
}

function field(label, value) {
  if (!value || (Array.isArray(value) && !value.length)) return null;
  return el("p", { className: "resource-field" }, [el("strong", { text: `${label}: ` }), document.createTextNode(Array.isArray(value) ? formatList(value) : value)]);
}

function badge(text, modifier = "") {
  return el("span", { className: `tag ${modifier}`, text });
}

function renderResourceCard(resource) {
  const isSaved = state.saved.includes(resource.id);
  const article = el("article", { className: "resource-card" });
  const top = el("div", { className: "resource-topline" }, [
    el("div", {}, [
      el("p", { className: "eyebrow", text: resource.category }),
      el("h3", { text: resource.name }),
      el("p", { text: resource.summary }),
    ]),
  ]);
  const tags = el("div", { className: "tag-list" }, [
    badge(label(resource.urgency), resource.urgency === "today" ? "urgent" : ""),
    badge(label(resource.data_quality), resource.data_quality === "Verified" ? "verified" : "review"),
    badge(label(resource.source_type)),
    ...(resource.resource_type || []).map((type) => badge(label(type), type === "online" ? "online" : "")),
  ]);
  const details = el("details", { className: "resource-details" }, [
    el("summary", { text: t("showDetails") }),
    el("div", { className: "details-body" }, [
      el("p", { text: resource.description }),
      field(t("serviceArea"), resource.service_area),
      field(t("eligibility"), resource.eligibility),
      field(t("languages"), resource.languages),
      field(t("cost"), resource.cost),
      field(t("hours"), resource.hours),
      field(t("phone"), resource.phone),
      field(t("email"), resource.email),
      field(t("address"), resource.address),
      field(t("dataQuality"), label(resource.data_quality)),
      field(t("verificationNotes"), resource.verification_notes),
    ].filter(Boolean)),
  ]);
  const source = el("p", { className: "source-line" }, [
    el("strong", { text: `${t("source")}: ` }),
    el("a", { href: resource.source_url, target: "_blank", rel: "noopener noreferrer", text: resource.source_name }),
    document.createTextNode(` · ${t("lastVerified")}: ${resource.last_verified}`),
  ]);
  const next = field(t("nextStep"), resource.next_step);
  const saveButton = el("button", { type: "button", className: isSaved ? "secondary-button" : "primary-button", text: isSaved ? t("remove") : t("save") });
  saveButton.addEventListener("click", () => toggleSaved(resource.id));
  const sourceLink = el("a", { className: "secondary-button", href: resource.website, target: "_blank", rel: "noopener noreferrer", text: t("website") });
  article.append(top, tags, next, source, details, el("div", { className: "card-actions" }, [saveButton, sourceLink]));
  return article;
}

function renderResources() {
  const visible = filteredResources();
  nodes.resultCount.textContent = `${visible.length} ${visible.length === 1 ? t("result") : t("results")}`;
  if (!visible.length) {
    nodes.resourceGrid.replaceChildren(el("p", { className: "no-results", text: t("noResults") }));
    return;
  }
  nodes.resourceGrid.replaceChildren(...visible.map(renderResourceCard));
}

function renderPlan() {
  if (!state.saved.length) {
    nodes.savedPlan.replaceChildren(el("li", { className: "empty-plan", text: t("emptyPlan") }));
    return;
  }
  const items = state.saved.map((id) => state.resources.find((resource) => resource.id === id)).filter(Boolean);
  nodes.savedPlan.replaceChildren(...items.map((resource) => {
    const remove = el("button", { type: "button", className: "text-button", text: t("remove") });
    remove.addEventListener("click", () => toggleSaved(resource.id));
    return el("li", {}, [
      el("strong", { text: resource.name }),
      el("p", { text: resource.next_step }),
      remove,
    ]);
  }));
}

function toggleSaved(id) {
  state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
  persistPlan();
  renderPlan();
  renderResources();
}

function applyTranslations() {
  document.documentElement.lang = state.language === "dr" ? "fa-AF" : state.language;
  document.documentElement.dir = state.language === "dr" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  const nextLanguage = languageOrder[(languageOrder.indexOf(state.language) + 1) % languageOrder.length];
  nodes.languageToggle.textContent = `${t("currentLanguage")}: ${languageNames[state.language]} · ${languageNames[nextLanguage]}`;
  nodes.languageToggle.setAttribute("aria-label", `Switch language to ${languageNames[nextLanguage]}`);
  populateFilters();
  renderResources();
  renderPlan();
}

function bindFilters() {
  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.filters.query = event.target.value.trim();
    renderResources();
  });
  ["need", "region", "status", "urgency", "language", "type", "quality", "cost"].forEach((key) => {
    document.querySelector(`#${key}Filter`).addEventListener("change", (event) => {
      state.filters[key] = event.target.value;
      renderResources();
    });
  });
  document.querySelector("#clearPlan").addEventListener("click", () => {
    state.saved = [];
    persistPlan();
    renderPlan();
    renderResources();
  });
  document.querySelector("#printPlan").addEventListener("click", () => window.print());
  nodes.languageToggle.addEventListener("click", () => {
    const nextIndex = (languageOrder.indexOf(state.language) + 1) % languageOrder.length;
    state.language = languageOrder[nextIndex];
    applyTranslations();
  });
}

async function init() {
  nodes.resourceGrid.replaceChildren(el("p", { className: "no-results", text: t("loading") }));
  bindFilters();
  renderSteps();
  try {
    const response = await fetch(RESOURCE_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.resources = await response.json();
    const dates = state.resources.map((resource) => resource.last_verified).filter(Boolean).sort();
    nodes.lastDataUpdate.textContent = dates.at(-1) || "Unknown";
    populateFilters();
    renderUrgentResources();
    renderPlan();
    renderResources();
    applyTranslations();
  } catch (error) {
    console.error(error);
    nodes.resourceGrid.replaceChildren(el("p", { className: "no-results", text: t("loadError") }));
  }
}

init();
