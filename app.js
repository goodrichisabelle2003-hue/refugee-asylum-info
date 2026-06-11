const resources = [
  {
    name: "SPADA orientation desk",
    type: "First reception",
    needs: ["legal", "housing", "welfare"],
    regions: ["all"],
    status: ["new-arrival", "appointment"],
    urgency: "today",
    summary:
      "The usual first stop to register an intention to seek asylum, get orientation toward GUDA, and receive basic administrative support.",
    nextStep: "Ask for the nearest SPADA and keep every appointment paper, SMS, and proof of address.",
    link: "https://www.service-public.fr/particuliers/vosdroits/F32454",
    source: "Service-Public.fr",
  },
  {
    name: "OFPRA asylum application",
    type: "Asylum procedure",
    needs: ["legal"],
    regions: ["all", "online"],
    status: ["appointment", "appeal", "dublin"],
    urgency: "week",
    summary:
      "Official asylum authority for submitting the file, interview steps, protection decisions, and procedure information.",
    nextStep: "Prepare identity papers, journey facts, evidence, and a clear timeline before any appointment.",
    link: "https://www.ofpra.gouv.fr/",
    source: "OFPRA",
  },
  {
    name: "OFII reception conditions",
    type: "Welfare and housing",
    needs: ["housing", "welfare"],
    regions: ["all", "online"],
    status: ["new-arrival", "appointment"],
    urgency: "week",
    summary:
      "Handles material reception conditions for eligible asylum seekers, including accommodation orientation and the ADA allowance.",
    nextStep: "Ask whether you accepted material reception conditions and how to access the OFII online services or local office.",
    link: "https://www.ofii.fr/",
    source: "OFII",
  },
  {
    name: "Emergency shelter line",
    type: "Tonight shelter",
    needs: ["housing"],
    regions: ["all"],
    status: ["new-arrival", "minor"],
    urgency: "today",
    summary:
      "Call 115 if you have no safe place to sleep. Families, pregnant people, children, and vulnerable people should say this clearly.",
    nextStep: "Call 115, state your city, number of people, ages of children, and any health or safety risks.",
    link: "https://www.service-public.fr/particuliers/vosdroits/F33645",
    source: "Service-Public.fr",
  },
  {
    name: "Health coverage through Assurance Maladie",
    type: "Health care",
    needs: ["health"],
    regions: ["all", "online"],
    status: ["new-arrival", "appointment", "minor"],
    urgency: "week",
    summary:
      "Information on applying for French health coverage and getting care while your administrative situation is being reviewed.",
    nextStep: "Gather proof of identity, address or domiciliation, and asylum procedure documents before applying.",
    link: "https://www.ameli.fr/",
    source: "Ameli",
  },
  {
    name: "La Cimade",
    type: "Legal association",
    needs: ["legal", "family"],
    regions: ["all", "paris", "lyon", "marseille", "north"],
    status: ["dublin", "appeal", "appointment"],
    urgency: "week",
    summary:
      "Association offering legal information and support for migrants and asylum seekers through local teams and hotlines.",
    nextStep: "Find the nearest permanence and bring every prefecture, OFPRA, CNDA, or Dublin document.",
    link: "https://www.lacimade.org/",
    source: "La Cimade",
  },
  {
    name: "France terre d'asile",
    type: "Reception and integration",
    needs: ["legal", "housing", "language", "family"],
    regions: ["all", "paris", "north"],
    status: ["new-arrival", "appointment", "minor"],
    urgency: "week",
    summary:
      "Supports asylum seekers and refugees with reception, rights access, accommodation programs, and integration services.",
    nextStep: "Contact the relevant local service and ask which documents are needed for an appointment.",
    link: "https://www.france-terre-asile.org/",
    source: "France terre d'asile",
  },
  {
    name: "GISTI legal information",
    type: "Specialized legal guidance",
    needs: ["legal"],
    regions: ["online"],
    status: ["dublin", "appeal", "appointment"],
    urgency: "plan",
    summary:
      "Publishes detailed legal resources on foreign nationals' rights, asylum, residence, appeals, and social rights.",
    nextStep: "Use it to prepare questions for a lawyer or association rather than relying on it alone.",
    link: "https://www.gisti.org/",
    source: "GISTI",
  },
  {
    name: "Restos du Coeur",
    type: "Food and essentials",
    needs: ["food"],
    regions: ["all", "paris", "lyon", "marseille", "north"],
    status: ["new-arrival", "minor"],
    urgency: "today",
    summary:
      "Food assistance and basic support through local centers. Conditions and opening times vary by city.",
    nextStep: "Search your local center and ask what proof or registration is required before going.",
    link: "https://www.restosducoeur.org/",
    source: "Restos du Coeur",
  },
  {
    name: "Croix-Rouge francaise",
    type: "Emergency and social aid",
    needs: ["food", "health", "family"],
    regions: ["all", "paris", "lyon", "marseille", "north"],
    status: ["new-arrival", "minor"],
    urgency: "today",
    summary:
      "Local teams may provide emergency aid, social support, first aid, food, clothing, or orientation depending on the area.",
    nextStep: "Look up your departmental delegation and ask about migrant support or social assistance hours.",
    link: "https://www.croix-rouge.fr/",
    source: "Croix-Rouge francaise",
  },
  {
    name: "Secours Catholique",
    type: "Local welfare support",
    needs: ["food", "language", "welfare", "family"],
    regions: ["all", "paris", "lyon", "marseille", "north"],
    status: ["new-arrival", "minor"],
    urgency: "week",
    summary:
      "Local welcome centers can help with material aid, listening, French conversation, and links to social services.",
    nextStep: "Contact the local delegation and ask for accueil migrants or accueil social.",
    link: "https://www.secours-catholique.org/",
    source: "Secours Catholique",
  },
  {
    name: "Refugee.info France",
    type: "Multilingual information",
    needs: ["legal", "health", "housing", "welfare", "language"],
    regions: ["online"],
    status: ["new-arrival", "appointment", "dublin", "appeal", "minor"],
    urgency: "plan",
    summary:
      "Plain-language information for displaced people in France, with multilingual guides and service orientation.",
    nextStep: "Search your topic and verify any deadline-sensitive advice with a local legal worker.",
    link: "https://www.refugee.info/fr-fr",
    source: "Refugee.info",
  },
];

const steps = [
  {
    title: "Reach first reception",
    text: "Contact SPADA or a local association to start orientation toward the asylum registration route.",
  },
  {
    title: "Register and keep proof",
    text: "Attend GUDA/prefecture appointments, keep documents safe, and ask what deadline applies next.",
  },
  {
    title: "Secure basic needs",
    text: "Ask OFII/SPADA about accommodation, ADA, domiciliation, health coverage, and emergency shelter.",
  },
  {
    title: "Prepare your story",
    text: "Build a timeline, collect evidence, translate key documents, and seek legal support before interviews or appeals.",
  },
];

const translations = {
  en: {
    eyebrow: "France asylum support navigator",
    heroTitle: "Find legal, housing, health, and welfare help in France.",
    heroText: "Answer a few questions and build a practical action plan for the first days after arriving in France.",
    startButton: "Start matching",
    urgentButton: "I need urgent help",
    medicalTitle: "Medical emergency",
    medicalText: "Call SAMU for urgent medical danger.",
    policeTitle: "Immediate danger",
    policeText: "Call police or gendarmerie if someone is at risk.",
    shelterTitle: "No safe place tonight",
    shelterText: "Call emergency social accommodation.",
    europeTitle: "European emergency",
    europeText: "Works from mobile phones across Europe.",
    matcherEyebrow: "Personalize results",
    matcherTitle: "What do you need first?",
    regionLabel: "Where are you?",
    needLabel: "Main need",
    statusLabel: "Your situation",
    urgencyLabel: "How urgent is it?",
    planEyebrow: "Your plan",
    planTitle: "Saved next steps",
    clearPlan: "Clear plan",
    workflowEyebrow: "First week checklist",
    workflowTitle: "The usual route through the French asylum system",
    resourcesEyebrow: "Matched resources",
    searchLabel: "Search",
    disclaimerTitle: "Important note",
    disclaimerText:
      "This app helps organize public information and contact points. It is not legal advice. Asylum deadlines can be short, so confirm your situation with a qualified legal worker, association, SPADA, or lawyer.",
  },
  fr: {
    eyebrow: "Orientation asile en France",
    heroTitle: "Trouvez de l'aide juridique, sociale, sante et hebergement en France.",
    heroText: "Repondez a quelques questions et creez un plan d'action pour les premiers jours en France.",
    startButton: "Commencer",
    urgentButton: "Aide urgente",
    medicalTitle: "Urgence medicale",
    medicalText: "Appelez le SAMU en cas de danger medical.",
    policeTitle: "Danger immediat",
    policeText: "Appelez la police ou la gendarmerie si quelqu'un est en danger.",
    shelterTitle: "Pas d'abri ce soir",
    shelterText: "Appelez l'hebergement social d'urgence.",
    europeTitle: "Urgence Europe",
    europeText: "Fonctionne depuis les telephones mobiles en Europe.",
    matcherEyebrow: "Resultats personnalises",
    matcherTitle: "De quoi avez-vous besoin en premier ?",
    regionLabel: "Ou etes-vous ?",
    needLabel: "Besoin principal",
    statusLabel: "Votre situation",
    urgencyLabel: "Quel niveau d'urgence ?",
    planEyebrow: "Votre plan",
    planTitle: "Prochaines etapes",
    clearPlan: "Effacer le plan",
    workflowEyebrow: "Premiere semaine",
    workflowTitle: "Le parcours habituel dans le systeme d'asile francais",
    resourcesEyebrow: "Ressources proposees",
    searchLabel: "Recherche",
    disclaimerTitle: "Note importante",
    disclaimerText:
      "Cette application organise des informations publiques et des contacts. Ce n'est pas un conseil juridique. Les delais d'asile peuvent etre courts : confirmez votre situation avec un juriste, une association, une SPADA ou un avocat.",
  },
  dr: {
    eyebrow: "راهنمای حمایت پناهندگی در فرانسه",
    heroTitle: "کمک حقوقی، مسکن، صحت و رفاه را در فرانسه پیدا کنید.",
    heroText: "به چند پرسش پاسخ دهید و برای روزهای اول ورود به فرانسه یک برنامه عملی بسازید.",
    startButton: "شروع جستجو",
    urgentButton: "به کمک فوری نیاز دارم",
    medicalTitle: "فوریت طبی",
    medicalText: "در خطر جدی صحی با سامو تماس بگیرید.",
    policeTitle: "خطر فوری",
    policeText: "اگر کسی در خطر است با پولیس یا ژاندارمری تماس بگیرید.",
    shelterTitle: "امشب جای امن ندارید",
    shelterText: "برای سرپناه اضطراری اجتماعی تماس بگیرید.",
    europeTitle: "شماره اضطراری اروپا",
    europeText: "از تیلفون همراه در سراسر اروپا کار می‌کند.",
    matcherEyebrow: "نتایج شخصی‌سازی‌شده",
    matcherTitle: "اول به چه چیزی نیاز دارید؟",
    regionLabel: "کجا هستید؟",
    needLabel: "نیاز اصلی",
    statusLabel: "وضعیت شما",
    urgencyLabel: "چقدر فوری است؟",
    planEyebrow: "برنامه شما",
    planTitle: "گام‌های بعدی ذخیره‌شده",
    clearPlan: "پاک کردن برنامه",
    workflowEyebrow: "فهرست هفته اول",
    workflowTitle: "مسیر معمول در سیستم پناهندگی فرانسه",
    resourcesEyebrow: "منابع پیشنهادی",
    searchLabel: "جستجو",
    disclaimerTitle: "یادداشت مهم",
    disclaimerText:
      "این برنامه معلومات عمومی و راه‌های تماس را منظم می‌کند. این مشوره حقوقی نیست. مهلت‌های پناهندگی می‌تواند کوتاه باشد، پس وضعیت خود را با یک کارمند حقوقی، انجمن، سپادا یا وکیل تایید کنید.",
  },
};

const languageOrder = ["en", "fr", "dr"];
const languageLabels = {
  en: "FR",
  fr: "DR",
  dr: "EN",
};

const filters = {
  region: "all",
  need: "all",
  status: "all",
  urgency: "all",
  query: "",
};

let language = "en";
let saved = JSON.parse(localStorage.getItem("bienvenueAidPlan") || "[]");

const resourceGrid = document.querySelector("#resourceGrid");
const resultCount = document.querySelector("#resultCount");
const savedPlan = document.querySelector("#savedPlan");
const languageToggle = document.querySelector("#languageToggle");

function matchesFilter(resource) {
  const queryText = `${resource.name} ${resource.type} ${resource.summary} ${resource.nextStep} ${resource.source}`.toLowerCase();
  return (
    (filters.region === "all" || resource.regions.includes(filters.region) || resource.regions.includes("all")) &&
    (filters.need === "all" || resource.needs.includes(filters.need)) &&
    (filters.status === "all" || resource.status.includes(filters.status)) &&
    (filters.urgency === "all" || resource.urgency === filters.urgency || resource.urgency === "today") &&
    (!filters.query || queryText.includes(filters.query))
  );
}

function renderResources() {
  const visible = resources.filter(matchesFilter);
  resultCount.textContent = `${visible.length} resource${visible.length === 1 ? "" : "s"}`;
  resourceGrid.innerHTML = "";

  if (!visible.length) {
    resourceGrid.innerHTML = '<p class="no-results">No exact matches. Try clearing one filter or search by city, document, or need.</p>';
    return;
  }

  visible.forEach((resource) => {
    const card = document.createElement("article");
    card.className = "resource-card";
    const tags = [resource.type, resource.urgency === "today" ? "Urgent" : resource.urgency, resource.regions.includes("online") ? "Online" : "Local"];
    card.innerHTML = `
      <div class="resource-topline">
        <div>
          <h3>${resource.name}</h3>
          <p>${resource.summary}</p>
        </div>
      </div>
      <div class="tag-list">
        ${tags.map((tag) => `<span class="tag ${tag === "Urgent" ? "urgent" : tag === "Online" ? "online" : ""}">${tag}</span>`).join("")}
      </div>
      <p><strong>Next:</strong> ${resource.nextStep}</p>
      <p>Source: <a href="${resource.link}" target="_blank" rel="noopener noreferrer">${resource.source}</a></p>
      <div class="card-actions">
        <button type="button" data-save="${resource.name}">Add next step</button>
      </div>
    `;
    resourceGrid.append(card);
  });
}

function renderSteps() {
  const stepsNode = document.querySelector("#steps");
  stepsNode.innerHTML = steps
    .map(
      (step, index) => `
        <article class="step">
          <strong>${index + 1}</strong>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
}

function renderPlan() {
  if (!saved.length) {
    savedPlan.innerHTML = '<li class="empty-plan">Add resources to create a simple appointment checklist.</li>';
    return;
  }

  savedPlan.innerHTML = saved.map((item) => `<li>${item}</li>`).join("");
}

function savePlanItem(resourceName) {
  const resource = resources.find((item) => item.name === resourceName);
  if (!resource) return;
  const item = `${resource.name}: ${resource.nextStep}`;
  if (!saved.includes(item)) {
    saved = [...saved, item];
    localStorage.setItem("bienvenueAidPlan", JSON.stringify(saved));
    renderPlan();
  }
}

function applyTranslations() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "dr" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || translations.en[key] || node.textContent;
  });
  languageToggle.textContent = languageLabels[language];
}

document.querySelector("#regionFilter").addEventListener("change", (event) => {
  filters.region = event.target.value;
  renderResources();
});

document.querySelector("#needFilter").addEventListener("change", (event) => {
  filters.need = event.target.value;
  renderResources();
});

document.querySelector("#statusFilter").addEventListener("change", (event) => {
  filters.status = event.target.value;
  renderResources();
});

document.querySelectorAll('input[name="urgency"]').forEach((input) => {
  input.addEventListener("change", (event) => {
    filters.urgency = event.target.value;
    renderResources();
  });
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  filters.query = event.target.value.trim().toLowerCase();
  renderResources();
});

resourceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (button) {
    savePlanItem(button.dataset.save);
  }
});

document.querySelector("#clearPlan").addEventListener("click", () => {
  saved = [];
  localStorage.removeItem("bienvenueAidPlan");
  renderPlan();
});

languageToggle.addEventListener("click", () => {
  const nextIndex = (languageOrder.indexOf(language) + 1) % languageOrder.length;
  language = languageOrder[nextIndex];
  applyTranslations();
});

renderSteps();
renderPlan();
renderResources();
applyTranslations();
