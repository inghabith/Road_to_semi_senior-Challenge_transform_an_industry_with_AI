# Chef AI 🍝

> An AI-powered recipe assistant with an Italian trattoria aesthetic. Tell it what's in your fridge and it invents tonight's dinner.

Built with **Vanilla JavaScript** and **Vite**, powered by the **OpenRouter API** (free models supported).

---

## Overview

Chef AI is a conversational web app where an animated chef mascot generates personalized recipes based on user-provided ingredients. Recipes are returned as structured JSON and rendered as handwritten-style paper notes, each color-coded by difficulty level.

The app uses OpenRouter as the AI gateway, giving access to multiple free LLM models without requiring separate API keys per provider.

---

## Features

- 🤖 **AI-generated recipes** from any list of ingredients via OpenRouter
- 🎭 **Animated chef mascot** — three states: idle, cooking, happy — synced to agent activity
- 📋 **Recipe cards** styled as paper notes pinned with washi tape
- 🎨 **Difficulty color-coding** — Semplice (green), Media (olive), Da chef (tomato)
- 🔄 **Multi-model support** — switch between free models from the toolbar
- 💾 **API Key persistence** via `localStorage`
- 🛡️ **Robust error handling** — covers null content, empty strings, and reasoning-model edge cases (e.g. models that return `reasoning_content` instead of `content`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Bundler | Vite 5 |
| Language | JavaScript (ES Modules, no framework) |
| Styling | CSS (custom properties, Grid, keyframe animations) |
| AI Gateway | OpenRouter API (`/v1/chat/completions`) |
| Storage | `localStorage` |

---

## Project Structure

```
chef-ai/
├── index.html          # App shell, model selector, API key input
├── package.json
└── src/
    ├── main.js         # All app logic (AI calls, rendering, i18n, state)
    ├── style.css       # Trattoria theme, animations, recipe cards
    └── assets/
        ├── chef-idle.png       # Mascot — waiting state
        ├── chef-cooking.png    # Mascot — thinking state
        └── chef-happy.png      # Mascot — recipes ready state
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A free [OpenRouter](https://openrouter.ai/keys) API key (no credit card required)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173), paste your OpenRouter API key, and start cooking.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

---

## Supported Models (May 2026)

All models below are available for free on OpenRouter:

| Label | Model ID |
|---|---|
| auto ✦ | `openrouter/free` |
| deepseek-v4-flash | `deepseek/deepseek-v4-flash:free` |
| llama-3.3-70b | `meta-llama/llama-3.3-70b-instruct:free` |
| gpt-oss-120b | `openai/gpt-oss-120b:free` |
| gpt-oss-20b | `openai/gpt-oss-20b:free` |
| gemma-4-31b | `google/gemma-4-31b-it:free` |

> **Tip:** Use `openrouter/free` (auto) when unsure — it routes to the best available free model automatically.

---

## How It Works

1. User enters a list of ingredients in the chat input.
2. `main.js` sends the input to the OpenRouter API with a structured system prompt that requests a JSON response containing recipe cards.
3. The API response is parsed by `tryJSON()`, which extracts a valid JSON block even if the model wraps it in extra prose.
4. Each recipe card is rendered as a styled `<div>` with ingredient list, steps, difficulty badge, and time estimate.
5. Tapping a card expands it into a full step-by-step view.

### Error Handling Notes

- Models that return an empty `content` field (e.g. reasoning models) are handled by falling back to `reasoning_content`.
- `tryJSON()` guards against `null` and non-string values before calling `.match()`.
- HTTP errors (401, 429, 402) are caught and shown as user-friendly status messages.

---

## Configuration

No `.env` file needed. The only runtime input is the OpenRouter API key, entered directly in the UI and stored in `localStorage` under the key `chef-ai-key`.

The API endpoint is hardcoded in `main.js`:

```js
const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
```

---

## License

MIT