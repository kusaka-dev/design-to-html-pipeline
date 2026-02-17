# figma-ui-pipeline

Figma MCP の React 出力を取得し、
静的 HTML / CSS へ変換するためのビルド実験リポジトリ。

副業における Figma デザイン → HTML コーディングの効率化を目的とする。

---

## 🎯 Purpose

- Figma Dev Mode + MCP から React (JSX) を取得
- JSX を中間フォーマットとして扱う
- 静的 HTML へ変換
- Tailwind 出力を FLOCSS 設計へ再構築
- 実装速度の向上と品質担保

---

## 🛠 Tech Stack

### Core

- React (Vite)
- TypeScript
- Node.js (LTS)

### CLI / Tools

- figma-mcp-downloader  
  → Figma MCP の完全な design context を取得

- Cursor  
  → JSX → HTML / SCSS 変換補助

### Styling

- SCSS
- FLOCSS設計
- PostCSS（必要に応じて）

---

## 📦 Installation

```bash
npm install
npm run dev