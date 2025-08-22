# Create an HTML README file for the user's Weather App project
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weather App – README</title>
  <style>
    :root {
      --bg: #0f172a;
      --card: #111827;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --accent: #60a5fa;
      --border: #1f2937;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      background: linear-gradient(180deg, var(--bg), #0b1220 60%);
      color: var(--text);
      line-height: 1.6;
      padding: 32px 16px 64px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: rgba(17,24,39,0.7);
      border: 1px solid var(--border);
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      border-radius: 18px;
      overflow: hidden;
    }
    header {
      padding: 28px 28px 20px;
      border-bottom: 1px solid var(--border);
      background: radial-gradient(1200px 400px at -10% -10%, rgba(96,165,250,0.15), transparent 60%),
                  radial-gradient(1200px 400px at 110% -10%, rgba(147,197,253,0.12), transparent 60%);
    }
    h1 {
      margin: 0 0 6px;
      font-size: 2rem;
      letter-spacing: 0.3px;
    }
    .tagline {
      margin: 0;
      color: var(--muted);
      font-size: 1rem;
    }
    main { padding: 24px 28px; }
    section + section { margin-top: 28px; }
    h2 {
      font-size: 1.25rem;
      margin: 0 0 10px;
      color: #dbeafe;
      border-left: 3px solid var(--accent);
      padding-left: 10px;
    }
    p { margin: 8px 0; }
    ul { margin: 10px 0 0 22px; }
    code, pre {
      background: #0b1220;
      border: 1px solid var(--border);
      border-radius: 10px;
    }
    code {
      padding: 2px 6px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
      font-size: 0.95em;
    }
    pre { padding: 14px; overflow-x: auto; }
    a { color: #93c5fd; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 14px;
    }
    .muted { color: var(--muted); }
    footer {
      padding: 18px 28px 26px;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.95rem;
      background: linear-gradient(180deg, rgba(96,165,250,0.08), transparent);
    }
    .kbd {
      border: 1px solid var(--border);
      border-bottom-width: 3px;
      padding: 0 6px;
      border-radius: 6px;
      background: #0b1220;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🌦️ Weather App</h1>
      <p class="tagline">A responsive weather app using HTML, CSS, JavaScript, and the OpenWeather API.</p>
    </header>

    <main>
      <section>
        <h2>🚀 Features</h2>
        <ul>
          <li>🔍 Search weather by city name</li>
          <li>📱 Responsive design (mobile &amp; desktop friendly)</li>
          <li>🌡️ Displays temperature, condition, and icon</li>
          <li>⚡ Fast and lightweight, vanilla JavaScript</li>
        </ul>
      </section>

      

      <section>
        <h2>🛠️ Tech Stack</h2>
        <ul>
          <li><strong>HTML5</strong> – structure</li>
          <li><strong>CSS3</strong> – styling &amp; responsiveness</li>
          <li><strong>JavaScript (ES6)</strong> – Fetch API for data</li>
          <li><strong><a href="https://openweathermap.org/" target="_blank" rel="noopener">OpenWeather API</a></strong> – weather information</li>
        </ul>
      </section>

      <section>
        <h2>📦 Installation &amp; Usage</h2>
        <ol>
          <li>Clone the repository:
            <pre><code>git clone https://github.com/KaushalTaware/Weather_App.git</code></pre>
          </li>
          <li>Open the folder:
            <pre><code>cd Weather_App</code></pre>
          </li>
          <li>Open <code>index.html</code> in your browser.</li>
        </ol>
      </section>

      <section>
        <h2>🌍 Live Demo</h2>
        <p>
          If using GitHub Pages, your site will be available at:<br />
          <code>https://KaushalTaware.github.io/Weather_App/</code>
        </p>
      </section>

      <section>
        <h2>📝 GitHub Pages – Quick Deploy</h2>
        <ol>
          <li>Commit and push your code to the <code>main</code> branch.</li>
          <li>In your repository, go to <span class="kbd">Settings</span> → <span class="kbd">Pages</span>.</li>
          <li>Set <strong>Branch</strong> to <code>main</code> and <strong>Folder</strong> to <code>/(root)</code>, then save.</li>
          <li>Wait for the page to build. Visit your URL from the section above.</li>
        </ol>
      </section>

      <section>
        <h2>🤝 Contributing</h2>
        <p>Contributions are welcome! Fork the repo, create a feature branch, and open a pull request.</p>
      </section>

      <section>
        <h2>📜 License</h2>
        <p>This project is licensed under the <strong>MIT License</strong>. You are free to use, modify, and distribute this project.</p>
      </section>
    </main>

    <footer>
      <p>Built with ♥ for learning and quick weather lookups.</p>
    </footer>
  </div>
</body>
</html>
"""

path = "/mnt/data/README.html"
with open(path, "w", encoding="utf-8") as f:
    f.write(html_content)

path
