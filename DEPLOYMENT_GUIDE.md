# GitHub Pages Deployment Guide

## 🚨 Quick Fix for "File not found" Error

If you're getting a "File not found" error, follow these steps:

### Method 1: Repository Settings (Recommended)
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Method 2: Use the docs folder
1. In **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Choose **"main"** branch and **"/docs"** folder
4. Click **Save**

### Method 3: GitHub Actions (Advanced)
1. In **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. The workflow will run automatically on push

## 📁 File Structure for GitHub Pages

Your repository should have these files in the root:
```
├── index.html          # Main portfolio page
├── assets/             # CSS, JS, and images
├── .nojekyll          # Prevents Jekyll processing
├── docs/              # Alternative deployment folder
└── .github/workflows/ # Auto-deployment (optional)
```

## ✅ What I Fixed

1. **Added relative paths** in index.html (./assets/ instead of /assets/)
2. **Created .nojekyll** file to prevent Jekyll conflicts
3. **Multiple deployment options** (root, docs folder, GitHub Actions)
4. **Fixed asset references** for static hosting

## 🔧 Troubleshooting

**Still getting "File not found"?**
1. Check that `index.html` exists in your repository root
2. Verify GitHub Pages is enabled in Settings → Pages
3. Make sure the repository is public (or you have GitHub Pro for private repos)
4. Wait 5-10 minutes after enabling Pages

**Assets not loading?**
- Ensure the `assets/` folder is in the same directory as `index.html`
- Check that file paths use `./assets/` (relative paths)

**404 on custom routes?**
- GitHub Pages only serves static files
- All routes will serve the `index.html` file (which is what we want for a single-page app)

## 🌐 Your Site URL

Once deployed, your portfolio will be available at:
`https://[your-username].github.io/[repository-name]`

Example: `https://johndoe.github.io/my-portfolio`