#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'my-ema-project';
const targetDir = path.join(process.cwd(), projectName);

console.log(`\n🚀 Initializing World-Class EMA Project: ${projectName}...`);

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Create basic structure
const dirs = ['Web', 'data', 'docs', 'ema', 'ema_modules', 'migrations', 'public'];
dirs.forEach(d => {
    const p = path.join(targetDir, d);
    if (!fs.existsSync(p)) fs.mkdirSync(p);
});

// Create emp.json
const manifest = {
    name: projectName,
    version: "0.1.0",
    description: "An Ema project developed by aydocs",
    dependencies: {
        "emalang": "^0.1.0"
    }
};
fs.writeFileSync(path.join(targetDir, 'emp.json'), JSON.stringify(manifest, null, 2));

// Create app.ema in Web folder
const template = `@server {
    print "EMA Server Started! Port: 3000";
    std::http::serve(3000);
}

@client {
    <div style: "padding: 100px; text-align: center; font-family: 'Outfit', sans-serif; background: radial-gradient(circle at center, #1e293b, #0f172a); color: white; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style: "font-size: 4rem; margin-bottom: 20px; background: linear-gradient(to right, #818cf8, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> "Hello Ema V1.0!" </h1>
        <p style: "font-size: 1.5rem; opacity: 0.9; max-width: 600px; line-height: 1.6;"> "Welcome to your world-class, high-performance universal stack." </p>
        
        <div style: "margin-top: 50px; border: 2px solid rgba(129, 140, 248, 0.3); padding: 30px; border-radius: 24px; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);">
            <p style: "font-weight: 600; letter-spacing: 1px;"> "Crafted with 🚀 by aydocs" </p>
        </div>
        
        @js {
            console.log("Ema V1.0: Professional Project Initialized Successfully.");
        }
    </div>;
}
`;
fs.writeFileSync(path.join(targetDir, 'Web', 'app.ema'), template);

// Create a professional readme for the new project
const readmeContent = `# ${projectName}
An EMA project developed by **aydocs**.

## 🚀 Getting Started
1. Install Ema: \`npm install -g emalang\`
2. Run your project: \`ema Web/app.ema\`

## 🛠 Features
- Unified Full-Stack Architecture
- Scoped CSS-in-EMA
- High-performance V1.0 Engine
`;
fs.writeFileSync(path.join(targetDir, 'README.md'), readmeContent);

console.log(`\n\x1b[32m✓ Project successfully initialized at ${targetDir}\x1b[0m`);
console.log(`\x1b[36mNext steps:\x1b[0m`);
console.log(`  1. \x1b[33mcd ${projectName}\x1b[0m`);
console.log(`  2. \x1b[33mema Web/app.ema\x1b[0m\n`);
