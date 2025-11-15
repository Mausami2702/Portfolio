# Setting Up Your Portfolio in Local VS Code

## 📦 Files You Need to Copy

Your portfolio consists of these main files:

### Required Files:
```

portfolio/
├── frontend/               ← Main app (Netlify builds this)
│   ├── src/
│   │   ├── components/
│   │   │   └── Portfolio.jsx  ← ✅ Correct file with Me1.png
│   │   └── assets/images/
│   │       └── Me1.png
│   └── package.json
├── netlify.toml           ← Points to frontend/
└── .nvmrc                 ← Node 20

your-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Portfolio.jsx          ← Main portfolio component
│   ├── App.js                      ← App entry point
│   ├── App.css                     ← All styling
│   └── index.js                    ← React entry
├── package.json                    ← Dependencies
└── README.md
```

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Create a New React App

Open your terminal/command prompt and run:

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

### Step 2: Install Required Dependencies

```bash
npm install lucide-react
```

### Step 3: Copy the Files

I'll provide you with all the file contents below. Replace/create these files in your project:

---

## 📄 File Contents to Copy

### 1. **src/App.js**
```javascript
import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
```

### 2. **src/components/Portfolio.jsx**
(Copy the entire content from `/app/frontend/src/components/Portfolio.jsx`)

### 3. **src/App.css**
(Copy the entire content from `/app/frontend/src/App.css`)

### 4. **src/index.js**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 5. **src/index.css**
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## ▶️ Running Your Portfolio Locally

After copying all files:

```bash
# Start the development server
npm start
```

Your portfolio will open at: **http://localhost:3000**

---

## 🎨 Editing Your Portfolio

All editable content is in `src/components/Portfolio.jsx`:

1. **Personal Info** (Lines 10-18): Name, title, email, photo
2. **About Section** (Lines 20-25): Your bio
3. **Experience** (Lines 27-42): Work history
4. **Education** (Lines 44-57): Education details
5. **Skills** (Lines 59-73): Skills by category
6. **Social Links** (Lines 75-79): Social media URLs

Just edit and save - changes appear instantly!

---

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `build/` folder with optimized files ready for hosting.

---

## 🌐 Deployment Options

You can deploy your portfolio to:

1. **Vercel** (Recommended - Free)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify** (Free)
   - Drag & drop the `build/` folder to netlify.com

3. **GitHub Pages** (Free)
   ```bash
   npm install gh-pages --save-dev
   ```
   Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/my-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
   Then run: `npm run deploy`

---

## 📋 Complete package.json

```json
{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

---

## ✅ Checklist

- [ ] Create React app
- [ ] Install lucide-react
- [ ] Create `src/components/` folder
- [ ] Copy Portfolio.jsx
- [ ] Copy App.js
- [ ] Copy App.css
- [ ] Update index.js
- [ ] Update index.css
- [ ] Run `npm start`
- [ ] Edit your personal information
- [ ] Test the portfolio
- [ ] Build for production
- [ ] Deploy!

---

## 🆘 Troubleshooting

**Issue: "Module not found"**
- Solution: Run `npm install` again

**Issue: "Port 3000 already in use"**
- Solution: Change port or close other React apps

**Issue: Styling not working**
- Solution: Make sure App.css is imported in App.js

---

## 📞 Need Help?

If you encounter any issues:
1. Check that all files are in the correct locations
2. Verify lucide-react is installed: `npm list lucide-react`
3. Clear cache: `npm cache clean --force`
4. Reinstall: Delete `node_modules/` and run `npm install`

---

Your portfolio is ready to go! 🚀
