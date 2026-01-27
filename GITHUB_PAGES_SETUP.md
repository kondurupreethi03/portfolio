# GitHub Pages Deployment Guide

## ✅ Fixed Issues

All GitHub Pages compatibility issues have been fixed:

1. ✅ `index.html` exists in root directory
2. ✅ All paths are relative (no leading `/`)
3. ✅ Vite configured with base path `/Portfolio/`
4. ✅ GitHub Actions workflow for automatic deployment
5. ✅ All assets use relative paths

## 🚀 Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/kondurupreethi03/Portfolio
   - Click **Settings** → **Pages**
   - Under "Source", select **"GitHub Actions"**
   - Save

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to **Actions** tab in your repository
   - Wait for the workflow to complete (usually 2-3 minutes)
   - Your site will be live at: **https://kondurupreethi03.github.io/Portfolio**

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (create if needed)
   - Folder: **/ (root)**

3. **Push dist folder to gh-pages branch:**
   ```bash
   npm run build
   git checkout -b gh-pages
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

## 🔧 Configuration Details

### Vite Config
- **Base path:** `/Portfolio/` (matches repository name)
- **Build output:** `dist/` directory
- **Assets:** Relative paths automatically handled by Vite

### GitHub Actions Workflow
- Automatically builds on push to `main`
- Deploys `dist/` folder to `gh-pages` branch
- Uses `peaceiris/actions-gh-pages@v3` action

## 📝 Important Notes

1. **Repository Name:** Make sure your repository is named `Portfolio` (case-sensitive)
2. **Base Path:** If you rename the repository, update `base: '/Portfolio/'` in `vite.config.js`
3. **Custom Domain:** If using a custom domain, set `base: '/'` in `vite.config.js`

## 🐛 Troubleshooting

**Blank page after deployment?**
- Check browser console for errors
- Verify base path matches repository name
- Ensure GitHub Pages is enabled and pointing to `gh-pages` branch

**Assets not loading?**
- All paths are relative and should work automatically
- Check that `dist` folder contains all assets
- Verify GitHub Actions workflow completed successfully

**404 errors?**
- Make sure base path in `vite.config.js` matches repository name
- Check that `index.html` is in the root of `dist` folder

## ✅ Verification Checklist

- [ ] Repository name is `Portfolio`
- [ ] `vite.config.js` has `base: '/Portfolio/'`
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] GitHub Actions workflow runs successfully
- [ ] Site accessible at `https://kondurupreethi03.github.io/Portfolio`
