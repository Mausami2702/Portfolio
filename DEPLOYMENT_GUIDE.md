# Portfolio Deployment Guide

## 🚀 One-Time Setup (Do This Now)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Keep it **Public** (required for free Netlify)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Connect Local Git to GitHub
After creating the repo, GitHub will show you commands. Run these in your terminal:

```bash
cd c:\Users\mausa\portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Connect Netlify to GitHub
1. Go to your Netlify dashboard: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `portfolio` repository
6. Netlify will auto-detect settings from `netlify.toml`:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
7. Click "Deploy site"

### Step 4: Configure Custom Domain (mausamip.space)
1. In Netlify, go to: Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `mausamip.space`
4. Netlify will provide DNS records
5. Update your domain registrar's DNS settings with Netlify's nameservers or add the records
6. Wait for DNS propagation (5-30 minutes)

---

## 📝 Daily Workflow: How to Update Your Website

### Scenario 1: Update Your Profile Picture

1. **Replace the image file:**
   ```bash
   # Navigate to assets folder
   cd c:\Users\mausa\portfolio\frontend\src\assets\images
   
   # Replace the existing image with your new one
   # Keep the same filename: 1718219627693.jpg
   # OR rename your new image to match
   ```

2. **Commit and push changes:**
   ```bash
   cd c:\Users\mausa\portfolio
   git add .
   git commit -m "Update profile picture"
   git push
   ```

3. **Automatic deployment:**
   - Netlify detects the push
   - Builds your site automatically
   - Deploys to mausamip.space
   - Takes 2-3 minutes

### Scenario 2: Update Portfolio Content

1. **Edit the file:**
   - Open: `c:\Users\mausa\portfolio\frontend\src\components\Portfolio.jsx`
   - Make your changes (experience, skills, about text, etc.)
   - Save the file

2. **Test locally (optional but recommended):**
   ```bash
   cd c:\Users\mausa\portfolio\frontend
   npm run start
   ```
   - Opens http://localhost:3001
   - Verify your changes look good

3. **Deploy to production:**
   ```bash
   cd c:\Users\mausa\portfolio
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

### Scenario 3: Add New Components or Pages

1. **Create/edit files in:**
   - `c:\Users\mausa\portfolio\frontend\src\components\`
   - `c:\Users\mausa\portfolio\frontend\src\`

2. **Commit and push:**
   ```bash
   cd c:\Users\mausa\portfolio
   git add .
   git commit -m "Add new feature: [describe what you added]"
   git push
   ```

---

## 🔧 Useful Git Commands

### Check what files changed:
```bash
git status
```

### See your commit history:
```bash
git log --oneline
```

### Undo changes before committing:
```bash
git restore <filename>
```

### View deployment status:
- Go to: https://app.netlify.com/sites/YOUR_SITE_NAME/deploys
- Or check your custom domain: https://mausamip.space

---

## 📂 Important File Locations

### Edit these files for content changes:
- **Portfolio content**: `frontend/src/components/Portfolio.jsx`
- **Styles**: `frontend/src/index.css`, `frontend/src/App.css`
- **Images**: `frontend/src/assets/images/`
- **App entry point**: `frontend/src/App.js`

### Don't edit these (auto-generated):
- `frontend/node_modules/`
- `frontend/build/`
- `.git/`

---

## ⚠️ Important Rules

1. **Always work in `frontend/src/`** - NOT in root `src/`
2. **Always commit before making major changes** - Easy to undo
3. **Test locally first** - Run `npm run start` before pushing
4. **Write clear commit messages** - Helps you track changes
5. **Push regularly** - Don't lose work

---

## 🆘 Troubleshooting

### Build fails on Netlify:
- Check the build log in Netlify dashboard
- Ensure `npm run build` works locally first
- Verify all dependencies are in `package.json`

### Changes not showing on website:
- Wait 2-3 minutes for deployment
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check Netlify deploy log for errors

### Git push rejected:
```bash
git pull origin main
# Resolve any conflicts
git push origin main
```

---

## 📞 Quick Reference

**Local dev server**: `cd frontend && npm run start`
**Build production**: `cd frontend && npm run build`
**Git workflow**: `git add . → git commit -m "message" → git push`
**Netlify dashboard**: https://app.netlify.com
**Your website**: https://mausamip.space

---

## ✨ Summary

**To publish changes:**
1. Edit files in `frontend/src/`
2. `git add .`
3. `git commit -m "Describe your changes"`
4. `git push`
5. Wait 2-3 minutes → Live on mausamip.space!

That's it! 🎉
