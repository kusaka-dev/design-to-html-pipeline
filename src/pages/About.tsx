function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 mb-10">
        <h1 className="text-5xl font-bold mb-5 text-gray-900 tracking-tight">About This Project</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          副業におけるデザインからコーディングまでの効率化を目的とした実験的なプロジェクトです。
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-3xl font-semibold text-gray-800">Purpose</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Figma Dev Mode + MCP から React (JSX) を取得し、静的 HTML へ変換することで、
            副業におけるデザインからコーディングまでの効率化を目指しています。
          </p>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🛠</span>
            <h2 className="text-3xl font-semibold text-gray-800">Tech Stack</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>React 19 + TypeScript</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Vite (Build Tool)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Tailwind CSS 4.x</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>React Router DOM</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📦</span>
            <h2 className="text-3xl font-semibold text-gray-800">Features</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Figma MCP からの完全なデザインコンテキスト取得</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>JSX を中間フォーマットとして活用</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Tailwind 出力の FLOCSS 設計への再構築</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>実装速度の向上と品質担保</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔄</span>
            <h2 className="text-3xl font-semibold text-gray-800">Workflow</h2>
          </div>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Figma でデザイン作成</h3>
                <p className="text-gray-600">Figma Dev Mode でコンポーネントを設計する。Figma Desktop アプリを起動しておく必要がある（ローカル MCP サーバーが自動起動される）。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  <a href="https://github.com/yuichiroharai/figma-mcp-downloader" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    figma-mcp-downloader
                  </a>
                  {' '}でデザイン情報を取得
                </h3>
                <p className="text-gray-600 mb-3">
                  Figma MCP ツールを直接呼ぶとコンテキスト上限で情報が欠落するリスクがある。
                  この CLI を使うことで、デザインコンテキストとメタデータを確実にローカルへ保存できる。
                </p>
                <p className="text-gray-600 mb-2 text-sm font-medium">Claude Code へのプロンプト例：</p>
                <pre className="bg-gray-100 rounded p-3 text-sm text-gray-700 whitespace-pre-wrap">{`以下のURLを対象にしてデザインコンテキストをファイルに保存してください。
@FigmaのURL

- ファイルの保存先は \`docs/figma/mobile\`
- ファイル名の形式は \`[番号]-[セクション名].jsx\`
    - 例: \`01-Header.jsx\`
- 「セクション名」はデータの中身から適切に付ける
- デザインの配置順に合わせて「番号」を振る
    - 配置順を把握するために先にメタデータを取得して \`tmp/\` に保存すること
    - メタデータは必要ないので最後に削除すること`}</pre>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">React (JSX) へ変換</h3>
                <p className="text-gray-600">Claude Code がダウンロード済みのデザインコンテキストをもとに React コンポーネント（JSX + Tailwind CSS）を生成する。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">LLM で Vite + EJS + SCSS プロジェクトへ変換</h3>
                <p className="text-gray-600">LLM が JSX コンポーネントを解析し、Vite + EJS + SCSS 構成のプロジェクトへ変換する。Tailwind のユーティリティクラスは SCSS に再構築される。</p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default About
