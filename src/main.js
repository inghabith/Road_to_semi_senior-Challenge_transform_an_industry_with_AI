import "./style.css";

/* ═══ I18N ═══ */
const I18N = {
  es: {
    tagline: "Trattoria · Recetas con lo que tienes",
    kicker: "Benvenuto in cucina",
    heroTitle: "Dime qué tienes en la nevera<br/>y te invento la cena",
    heroSub: "Un chef de IA con recetas <em>semplici</em> y otras <em>da chef</em>, escritas a mano sobre papel.",
    apiLabel: "API Key",
    save: "Guardar",
    emptyTitle: "La cocina está lista",
    emptyDesc: "Guarda tu API Key y cuéntame qué ingredientes tienes a la mano.",
    placeholder: "Ej: tengo pollo, arroz, limón y ajo…",
    statusStart: "Ingresa tu API Key para comenzar",
    statusReady: "¡Listo! Dime qué ingredientes tienes.",
    statusCooking: "Il chef sta pensando…",
    menuTitle: "Il menù del giorno",
    menuHint: "Toca una nota para leer la receta completa",
    writing: "Il chef sta scrivendo la ricetta…",
    greeting: "Hola, acabo de abrir la cocina.",
    chefMsg: "¡Aquí tienes el menú! Toca una nota para ver el paso a paso.",
    invalidKey: "Key inválida (sk-or-v1-…).",
    saveFirst: "Primero guarda tu API Key.",
    err401: "API Key inválida.",
    err429: "Demasiadas peticiones. Espera un momento.",
    err402: "Sin créditos en openrouter.ai",
    you: "TÚ",
    ingredients: "Ingredientes",
    prep: "Preparación",
    recipeOf: "Receta del Chef",
    couldNotLoad: "No se pudo cargar. Intenta de nuevo.",
    systemChef: `Eres Chef AI, un cocinero de trattoria italiana experto y amigable, que responde en español.

Objetivo: ayudar al usuario a descubrir recetas con los ingredientes que tiene.

1. Si el usuario no ha dado ingredientes aún: salúdalo cálidamente con un toque italiano y pídele los ingredientes. NO uses JSON.
2. Si el usuario da ingredientes: responde SOLO con este JSON (sin texto antes ni después):

{
  "recetas": [
    {
      "nombre": "Nombre del plato",
      "emoji": "🍝",
      "descripcion": "Descripción apetitosa corta (1-2 oraciones).",
      "ingredientesUsados": ["ing1", "ing2"],
      "dificultad": "Semplice",
      "etiquetas": ["30 min", "Vegetariano"]
    }
  ],
  "mensaje": "Mensaje cálido corto (1 línea)."
}

Genera 4-5 recetas mezclando: 2 sencillas ("Semplice"), 2 medias ("Media") y 1 avanzada ("Da chef").
Etiquetas posibles: "15 min", "30 min", "1 hora", "Vegetariano", "Sin horno", "Rápido", "Confort", "Gourmet".
Dificultad obligatoria: "Semplice", "Media" o "Da chef".`,
    systemSteps: `Eres Chef AI. Genera el paso a paso de una receta italiana/casera. Responde SOLO con este JSON (sin texto antes ni después):

{
  "ingredientes": ["200g de pasta", "2 dientes de ajo"],
  "pasos": [
    { "texto": "Instrucción clara del paso.", "tip": "Consejo del chef (o null)" }
  ],
  "tiempoTotal": "30 min",
  "dificultad": "Semplice",
  "porciones": "2 personas"
}

Cantidades aproximadas en ingredientes. Entre 4 y 7 pasos claros. "tip" puede ser null.`
  },
  en: {
    tagline: "Trattoria · Recipes with what you have",
    kicker: "Benvenuto in cucina",
    heroTitle: "Tell me what's in your fridge<br/>and I'll invent dinner",
    heroSub: "An AI chef with <em>semplici</em> recipes and <em>da chef</em> ones, hand-written on paper.",
    apiLabel: "API Key",
    save: "Save",
    emptyTitle: "The kitchen is ready",
    emptyDesc: "Save your API Key and tell me what ingredients you have on hand.",
    placeholder: "E.g.: I have chicken, rice, lemon and garlic…",
    statusStart: "Enter your API Key to begin",
    statusReady: "Ready! Tell me your ingredients.",
    statusCooking: "Il chef is thinking…",
    menuTitle: "Il menù del giorno",
    menuHint: "Tap a note to read the full recipe",
    writing: "Il chef is writing the recipe…",
    greeting: "Hi, I just opened the kitchen.",
    chefMsg: "Here's the menu! Tap a note to see the step-by-step.",
    invalidKey: "Invalid key (sk-or-v1-…).",
    saveFirst: "Save your API Key first.",
    err401: "Invalid API Key.",
    err429: "Too many requests. Wait a moment.",
    err402: "Out of credits on openrouter.ai",
    you: "YOU",
    ingredients: "Ingredients",
    prep: "Steps",
    recipeOf: "Chef's Recipe",
    couldNotLoad: "Couldn't load. Try again.",
    systemChef: `You are Chef AI, a warm Italian trattoria cook who answers in English with occasional Italian flair.

Goal: help the user discover recipes with the ingredients they have.

1. If the user hasn't given ingredients yet: greet them warmly with an Italian touch and ask for ingredients. Do NOT use JSON.
2. If the user provides ingredients: reply with ONLY this JSON (no text before or after):

{
  "recetas": [
    {
      "nombre": "Dish name",
      "emoji": "🍝",
      "descripcion": "Short appetizing description (1-2 sentences).",
      "ingredientesUsados": ["ing1", "ing2"],
      "dificultad": "Semplice",
      "etiquetas": ["30 min", "Vegetarian"]
    }
  ],
  "mensaje": "Short warm message (1 line)."
}

Generate 4-5 recipes mixing: 2 easy ("Semplice"), 2 medium ("Media") and 1 advanced ("Da chef").
Possible tags: "15 min", "30 min", "1 hr", "Vegetarian", "No oven", "Quick", "Comfort", "Gourmet".
Difficulty required: "Semplice", "Media" or "Da chef".`,
    systemSteps: `You are Chef AI. Generate step-by-step instructions for an Italian/home recipe. Reply with ONLY this JSON (no text before or after):

{
  "ingredientes": ["200g pasta", "2 garlic cloves"],
  "pasos": [
    { "texto": "Clear step instruction.", "tip": "Chef's tip (or null)" }
  ],
  "tiempoTotal": "30 min",
  "dificultad": "Semplice",
  "porciones": "2 servings"
}

Approximate quantities. Between 4 and 7 clear steps. "tip" can be null.`
  }
};

// Idioma fijo en español
const lang = "es";
function t(k) { return I18N[lang][k] ?? k; }

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
}

/* ═══ CONFIG ═══ */
const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
let apiKey = localStorage.getItem("chef-ai-key") || "";
let history = [];
let isLoading = false;
let activeCard = null;

const dom = {
  apiKeyInput    : document.getElementById("api-key-input"),
  saveKeyBtn     : document.getElementById("save-key-btn"),
  modelSelect    : document.getElementById("model-select"),
  messages       : document.getElementById("messages"),
  emptyState     : document.getElementById("empty-state"),
  userInput      : document.getElementById("user-input"),
  sendBtn        : document.getElementById("send-btn"),
  status         : document.getElementById("status"),
  recipeSection  : document.getElementById("recipe-section"),
  recipeGrid     : document.getElementById("recipe-grid"),
  recipeSkeleton : document.getElementById("recipe-skeleton"),
  noteWrap       : document.getElementById("recipe-note-wrap"),
  noteLoading    : document.getElementById("note-loading"),
  noteContent    : document.getElementById("note-content"),
  mascots: {
    idle:    document.getElementById("mascot-idle"),
    cooking: document.getElementById("mascot-cooking"),
    happy:   document.getElementById("mascot-happy"),
  }
};

applyI18n();
if (apiKey) {
  dom.apiKeyInput.placeholder = "✓ " + "API Key guardada";
  setStatus(t("statusReady"), "ok");
}

/* ═══ MASCOT ═══ */
function setMascot(state) {
  for (const k in dom.mascots) dom.mascots[k].classList.toggle("mascot-active", k === state);
}

/* ═══ API KEY ═══ */
function saveApiKey() {
  const val = dom.apiKeyInput.value.trim();
  if (!val || !val.startsWith("sk-or")) { setStatus(t("invalidKey"), "error"); return; }
  apiKey = val;
  localStorage.setItem("chef-ai-key", val);
  dom.apiKeyInput.value = "";
  dom.apiKeyInput.placeholder = "✓ " + "API Key guardada";
  setStatus(t("statusReady"), "ok");
  sendGreeting();
}

/* ═══ AI CALL ═══ */
async function callAI(systemPrompt, msgs) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "Cucina AI"
    },
    body: JSON.stringify({
      model: dom.modelSelect.value,
      messages: [{ role: "system", content: systemPrompt }, ...msgs],
      max_tokens: 2048,
      temperature: 0.85
    }),
  });
  if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
  const data = await res.json();
  const choice = data?.choices?.[0];
  if (!choice) throw new Error("Empty response.");
  // deepseek-r1 y otros modelos de razonamiento a veces devuelven
  // content vacío ("") y ponen la respuesta en reasoning_content
  const raw = choice.message?.content;
  const reasoning = choice.message?.reasoning_content;
  const content = (raw && raw.trim()) ? raw : (reasoning && reasoning.trim()) ? reasoning : null;
  if (!content) throw new Error("El modelo no respondió. Intenta de nuevo o cambia de modelo.");
  return content;
}

function tryJSON(text) {
  if (!text || typeof text !== "string") return null;
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}

/* ═══ GREETING ═══ */
async function sendGreeting() {
  history = [{ role: "user", content: t("greeting") }];
  if (dom.emptyState) dom.emptyState.style.display = "none";
  const tid = appendTyping(); setLoading(true); setMascot("cooking");
  try {
    const reply = await callAI(t("systemChef"), history);
    history.push({ role: "assistant", content: reply });
    removeTyping(tid);
    const p = tryJSON(reply);
    if (p?.recetas) { renderRecipes(p); appendMessage("ai", p.mensaje || t("chefMsg")); setMascot("happy"); }
    else { appendMessage("ai", reply); setMascot("idle"); }
    setStatus("");
  } catch(err) { removeTyping(tid); handleError(err); setMascot("idle"); } finally { setLoading(false); }
}

/* ═══ SEND ═══ */
async function sendMessage() {
  if (isLoading) return;
  const text = dom.userInput.value.trim();
  if (!text) return;
  if (!apiKey) { setStatus(t("saveFirst"), "error"); return; }
  dom.userInput.value = ""; autoResize(dom.userInput);
  if (dom.emptyState) dom.emptyState.style.display = "none";
  history.push({ role: "user", content: text });
  appendMessage("user", text);
  const tid = appendTyping(); setLoading(true);
  setStatus(t("statusCooking")); setMascot("cooking");
  try {
    const reply = await callAI(t("systemChef"), history);
    history.push({ role: "assistant", content: reply });
    removeTyping(tid);
    const p = tryJSON(reply);
    if (p?.recetas) { renderRecipes(p); appendMessage("ai", p.mensaje || t("chefMsg")); setMascot("happy"); }
    else { appendMessage("ai", reply); setMascot("idle"); }
    setStatus("");
  } catch(err) { removeTyping(tid); handleError(err); setMascot("idle"); } finally { setLoading(false); }
}

/* ═══ RENDER PAPER NOTE CARDS ═══ */
function difficultyClass(d) {
  const s = (d || "").toLowerCase();
  if (s.includes("sempl") || s.includes("easy") || s.includes("fácil") || s.includes("facil")) return "difficulty-semplice";
  if (s.includes("chef") || s.includes("gourmet") || s.includes("hard") || s.includes("avanz")) return "difficulty-chef";
  return "difficulty-media";
}

function renderRecipes(data) {
  const recetas = data.recetas;
  if (!recetas?.length) return;
  dom.recipeSection.classList.add("visible");
  dom.recipeSkeleton.style.display = "grid";
  dom.recipeGrid.innerHTML = "";
  dom.noteWrap.classList.remove("visible");
  activeCard = null;

  setTimeout(() => {
    dom.recipeSkeleton.style.display = "none";
    recetas.forEach((r, i) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.style.animationDelay = `${i * 0.08}s`;
      const tags = [];
      if (r.dificultad) tags.push(`<span class="card-tag ${difficultyClass(r.dificultad)}">${r.dificultad}</span>`);
      (r.etiquetas || []).forEach(tag => tags.push(`<span class="card-tag">${tag}</span>`));
      card.innerHTML = `
        <span class="card-number">N°${String(i+1).padStart(2,"0")}</span>
        <div class="card-emoji">${r.emoji || "🍴"}</div>
        <div class="card-name">${r.nombre}</div>
        <div class="card-desc">${r.descripcion}</div>
        <div class="card-tags">${tags.join("")}</div>
        <div class="card-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
          "Leer la receta"
        </div>`;
      card.addEventListener("click", () => openNote(card, r));
      dom.recipeGrid.appendChild(card);
    });
    dom.recipeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 850);
}

/* ═══ OPEN NOTE ═══ */
async function openNote(card, receta) {
  if (activeCard === card) {
    card.classList.remove("active");
    activeCard = null;
    dom.noteWrap.classList.remove("visible");
    return;
  }
  document.querySelectorAll(".recipe-card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");
  activeCard = card;

  dom.noteWrap.classList.add("visible");
  dom.noteContent.innerHTML = "";
  dom.noteLoading.classList.add("show");
  setMascot("cooking");

  setTimeout(() => dom.noteWrap.scrollIntoView({ behavior: "smooth", block: "start" }), 120);

  try {
    const prompt = `Receta: "${receta.nombre}". Ingredientes principales: ${(receta.ingredientesUsados||[]).join(", ")}. Descripción: ${receta.descripcion}`;
    const reply = await callAI(t("systemSteps"), [{ role: "user", content: prompt }]);
    const parsed = tryJSON(reply);
    dom.noteLoading.classList.remove("show");
    if (!parsed) {
      dom.noteContent.innerHTML = `<div style="padding:2rem;font-family:var(--font-body);color:var(--muted);font-style:italic;text-align:center;">${t("couldNotLoad")}</div>`;
      setMascot("idle");
      return;
    }
    renderNote(receta, parsed);
    setMascot("happy");
  } catch(err) {
    dom.noteLoading.classList.remove("show");
    dom.noteContent.innerHTML = `<div style="padding:2rem;font-family:var(--font-body);color:var(--tomate);font-style:italic;text-align:center;">Error: ${err.message}</div>`;
    setMascot("idle");
  }
}

/* ═══ RENDER EXPANDED NOTE ═══ */
function renderNote(receta, data) {
  const badges = [
    data.tiempoTotal && `<span class="note-badge">⏱ ${data.tiempoTotal}</span>`,
    data.dificultad  && `<span class="note-badge">${data.dificultad}</span>`,
    data.porciones   && `<span class="note-badge">🍽 ${data.porciones}</span>`,
    ...(receta.etiquetas||[]).map(t=>`<span class="note-badge">${t}</span>`)
  ].filter(Boolean).join("");

  const ingredsHTML = (data.ingredientes || receta.ingredientesUsados || [])
    .map(ing => `<div class="ingredient-item"><div class="ingredient-dot">✦</div><div class="ingredient-text">${ing}</div></div>`)
    .join("");

  const pasosHTML = (data.pasos || [])
    .map((p, i) => `
      <div class="step-item">
        <div class="step-num">${i+1}</div>
        <div class="step-content">
          <div class="step-text">${p.texto}</div>
          ${p.tip ? `<div class="step-tip">💡 ${p.tip}</div>` : ""}
        </div>
      </div>`).join("");

  dom.noteContent.innerHTML = `
    <div class="note-header">
      <div class="note-header-left">
        <div class="note-label">${t("recipeOf")}</div>
        <div class="note-title"><em>${receta.nombre}</em></div>
        <div class="note-meta">${badges}</div>
      </div>
      <button class="note-close" id="note-close-btn" title="Cerrar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="note-emoji-banner">${receta.emoji || "🍴"}</div>
    <div class="note-body">
      <div class="note-ingredients">
        <div class="note-col-title">${t("ingredients")}</div>
        ${ingredsHTML}
      </div>
      <div class="note-steps">
        <div class="note-col-title">${t("prep")}</div>
        ${pasosHTML}
      </div>
    </div>
    <div class="note-footer">
      <p>${receta.descripcion}</p>
      <span class="chef-sig">— Chef AI</span>
    </div>`;

  document.getElementById("note-close-btn").addEventListener("click", () => {
    dom.noteWrap.classList.remove("visible");
    if (activeCard) activeCard.classList.remove("active");
    activeCard = null;
  });
}

/* ═══ UI HELPERS ═══ */
function appendMessage(role, text) {
  const isUser = role === "user";
  const msg = document.createElement("div"); msg.className = `msg ${isUser?"user":"ai"}`;
  const avatar = document.createElement("div"); avatar.className = "avatar"; avatar.textContent = isUser ? t("you") : "👨‍🍳";
  const bubble = document.createElement("div"); bubble.className = "bubble"; bubble.textContent = text;
  msg.appendChild(avatar); msg.appendChild(bubble);
  dom.messages.appendChild(msg); scrollBottom();
}
let tc = 0;
function appendTyping() {
  const id = `t-${++tc}`;
  const msg = document.createElement("div"); msg.className = "msg ai"; msg.id = id;
  const av = document.createElement("div"); av.className = "avatar"; av.textContent = "👨‍🍳";
  const bu = document.createElement("div"); bu.className = "bubble";
  bu.innerHTML = `<span class="typing-dots"><span></span><span></span><span></span></span>`;
  msg.appendChild(av); msg.appendChild(bu); dom.messages.appendChild(msg); scrollBottom();
  return id;
}
function removeTyping(id) { document.getElementById(id)?.remove(); }
function setLoading(v) { isLoading = v; dom.sendBtn.disabled = v; dom.userInput.disabled = v; }
function setStatus(msg, type="") { dom.status.textContent = msg; dom.status.className = type; }
function scrollBottom() { dom.messages.scrollTop = dom.messages.scrollHeight; }
function autoResize(el) { el.style.height = "auto"; el.style.height = Math.min(el.scrollHeight, 110) + "px"; }
function handleError(err) {
  if (err.message.includes("401")) setStatus(t("err401"), "error");
  else if (err.message.includes("429")) setStatus(t("err429"), "error");
  else if (err.message.includes("402")) setStatus(t("err402"), "error");
  else setStatus(`Error: ${err.message}`, "error");
}

/* ═══ EVENTOS ═══ */
dom.saveKeyBtn.addEventListener("click", saveApiKey);
dom.apiKeyInput.addEventListener("keydown", e => { if (e.key==="Enter") { e.preventDefault(); saveApiKey(); } });
dom.sendBtn.addEventListener("click", sendMessage);
dom.userInput.addEventListener("keydown", e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
dom.userInput.addEventListener("input", () => autoResize(dom.userInput));

document.querySelectorAll(".free-tag").forEach(tag => {
  tag.addEventListener("click", () => {
    document.querySelectorAll(".free-tag").forEach(t => t.classList.remove("active"));
    tag.classList.add("active");
    dom.modelSelect.value = tag.dataset.model;
    history = [];
    if (dom.emptyState) dom.emptyState.style.display = "flex";
    dom.messages.querySelectorAll(".msg").forEach(m => m.remove());
    dom.recipeSection.classList.remove("visible");
    dom.noteWrap.classList.remove("visible");
    dom.recipeGrid.innerHTML = "";
    activeCard = null;
    setMascot("idle");
    setStatus("Modelo cambiado.", "ok");
  });
});
dom.modelSelect.addEventListener("change", () => {
  document.querySelectorAll(".free-tag").forEach(t => t.classList.toggle("active", t.dataset.model === dom.modelSelect.value));
  history = [];
});
