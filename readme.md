# 🔴 OhMyGOD — LeetCode Patterns

<div align="center">

```
 ██████╗ ██╗  ██╗███╗   ███╗██╗   ██╗ ██████╗  ██████╗ ██████╗ 
██╔═══██╗██║  ██║████╗ ████║╚██╗ ██╔╝██╔════╝ ██╔═══██╗██╔══██╗
██║   ██║███████║██╔████╔██║ ╚████╔╝ ██║  ███╗██║   ██║██║  ██║
██║   ██║██╔══██║██║╚██╔╝██║  ╚██╔╝  ██║   ██║██║   ██║██║  ██║
╚██████╔╝██║  ██║██║ ╚═╝ ██║   ██║   ╚██████╔╝╚██████╔╝██████╔╝
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝    ╚═════╝  ╚═════╝ ╚═════╝ 
```

**Stop memorizing solutions. Start recognizing patterns.**

[![React](https://img.shields.io/badge/React-18-E8000D?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-0A0A0A?style=flat-square&logo=github)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-E8000D?style=flat-square)](LICENSE)
[![Questions](https://img.shields.io/badge/Questions-175+-0A0A0A?style=flat-square)](src/data/questions.js)

</div>

---

## What is this?

OhMyGOD is a **pattern-based LeetCode tracker** with a neo-brutalist design. Instead of grinding random problems, you study by **recognizing patterns** — the same 20 patterns that cover 90% of interview questions at Google, Meta, Amazon, and more.

Built on top of the legendary [leetcode-patterns](https://github.com/seanprashad/leetcode-patterns) repo by Sean Prashad, redesigned from scratch with new features and a distinct visual identity.

---

## Features

| Feature | Description |
|---|---|
| 📋 **175+ Questions** | Curated list covering all major patterns |
| 🏷️ **Pattern Tags** | Each question tagged with its algorithmic pattern(s) |
| 🎯 **Smart Filters** | Filter by pattern, difficulty, company, or search by name |
| ✅ **Progress Tracking** | Check off questions, stored permanently in your browser |
| 📝 **Notes Per Question** | Save your approach, time/space complexity, gotchas |
| 🔥 **Streak Tracker** | 21-day activity heatmap + consecutive day streak |
| 📊 **Pattern Coverage** | Visual chart showing how well you've covered each pattern |
| 💡 **Tips Tab** | Cheatsheets for 12 core patterns (Two Pointers, DP, Graphs...) |
| 🌙 **Dark Mode** | Full dark theme, persisted across sessions |
| 📱 **Responsive** | Works on mobile, tablet, and desktop |

---

## Screenshots

> **Light Mode** — Red header, brutal black borders, aggressive typography  
> **Dark Mode** — Near-black background, red accent shadows, yellow toggle  
> **Notes Modal** — Per-question scratchpad for your approach  
> **Streak Tracker** — 21-day calendar grid with current streak count  

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/ohmygod.git
cd ohmygod

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Opens at **http://localhost:3000** with hot reload.

---

## Deploy to GitHub Pages

### 1. Create the repo on GitHub

Go to [github.com/new](https://github.com/new) → name it `ohmygod` → Create repository

### 2. Set your homepage URL

Open `package.json` and update this line:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/ohmygod"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### 3. Push your code

```bash
git init
git add .
git commit -m "🔴 Initial commit — OhMyGOD"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ohmygod.git
git push -u origin main
```

### 4. Deploy

```bash
npm run deploy
```

This builds the app and pushes it to the `gh-pages` branch automatically.

### 5. Enable Pages in GitHub Settings

1. Go to your repo → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: **gh-pages** → **/root**
4. Click **Save**

✅ Live at: `https://YOUR_USERNAME.github.io/ohmygod`

> First deploy takes ~2 minutes. Subsequent deploys are faster.

---

## Adding Custom Questions

Open `src/data/questions.js` and add an entry to the `QUESTIONS` array:

```js
{
  id: 176,                           // next sequential number
  name: "My Custom Problem",
  url: "https://leetcode.com/problems/my-custom-problem/",
  patterns: ["Arrays", "Hash Table"],  // use existing or add new
  difficulty: "Medium",               // "Easy" | "Medium" | "Hard"
  companies: ["Google", "Amazon"],    // any companies
}
```

The filters, pattern chart, and stats all update automatically. No other changes needed.

### Available Patterns

`Arrays` · `Hash Table` · `Two Pointers` · `Sliding Window` · `Binary Search` · `Stack` · `Linked List` · `Tree` · `Graph` · `BFS` · `DFS` · `Dynamic Programming` · `Greedy` · `Backtracking` · `Heap` · `Trie` · `Bit Manipulation` · `Math` · `Matrix` · `Topological Sort` · `Union Find` · `Divide & Conquer`

---

## Project Structure

```
ohmygod/
├── public/
│   └── index.html                  ← HTML shell
├── src/
│   ├── components/
│   │   ├── Acknowledgements.js     ← Credits tab
│   │   ├── FiltersBar.js           ← Search + filter controls
│   │   ├── NoteModal.js            ← Per-question note editor
│   │   ├── PatternFrequencies.js   ← Pattern coverage chart
│   │   ├── QuestionTable.js        ← Main questions table
│   │   ├── StatsPanel.js           ← Progress counter + streak
│   │   └── Tips.js                 ← Pattern cheatsheets
│   ├── data/
│   │   └── questions.js            ← All 175+ questions + metadata
│   ├── App.js                      ← Root component + all state
│   ├── index.js                    ← React entry point
│   └── styles.css                  ← Neo-brutalist design system
├── .gitignore
├── package.json
└── README.md
```

---

## Tech Stack

- **[React 18](https://reactjs.org/)** — UI framework
- **[Create React App](https://create-react-app.dev/)** — Zero-config build tooling
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — One-command GitHub Pages deploy
- **localStorage** — All progress saved client-side, no backend needed
- **Fonts** — Bebas Neue · Barlow Condensed · Space Mono (Google Fonts)

---

## Data Persistence

All your data is stored in your browser's `localStorage`. Nothing is sent to any server.

| Key | What's stored |
|---|---|
| `omg_solved` | Which questions you've checked off |
| `omg_dates` | Date you last solved each question |
| `omg_notes` | Your per-question notes |
| `omg_dark` | Dark/light mode preference |

To export your progress, open DevTools → Application → Local Storage and copy the values.

---

## Roadmap

- [ ] Export progress to CSV
- [ ] Import/export progress as JSON
- [ ] Custom tags and categories
- [ ] Spaced repetition mode
- [ ] Time-yourself timer per question
- [ ] More than 175 questions

---

## Contributing

Pull requests are welcome. To add questions, fix bugs, or improve the design:

```bash
# Fork the repo, then:
git checkout -b feature/my-improvement
git commit -m "feat: describe what you did"
git push origin feature/my-improvement
# Open a Pull Request
```

---

## Credits

- [Sean Prashad](https://github.com/seanprashad) — Original leetcode-patterns repo that inspired this
- [NeetCode](https://neetcode.io) — Video solutions and the NeetCode 150 roadmap
- [LeetCode](https://leetcode.com) — Problem source
- Everyone who starred, forked, and contributed to the original repo

---

## License

MIT — do whatever you want with it. Just don't submit it as your own interview prep service without giving credit. 😄

---

<div align="center">

**Made with 🔴 and a lot of failed LeetCode submissions**

*OhMyGOD — Because your face when you finally understand DP should be a logo.*

</div>
