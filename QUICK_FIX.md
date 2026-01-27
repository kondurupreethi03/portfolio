# 🚀 Quick Fix: Push to GitHub

## The Problem
GitHub no longer accepts passwords. You MUST use a **Personal Access Token**.

## ✅ Solution (3 Steps)

### Step 1: Create Token (2 minutes)
1. Open: https://github.com/settings/tokens
2. Click: **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `Portfolio Push`
4. Expiration: Choose (90 days or 1 year)
5. **IMPORTANT:** Check the box `repo` (under "Select scopes")
6. Scroll down → Click **"Generate token"**
7. **COPY THE TOKEN** (starts with `ghp_...`) - You won't see it again!

### Step 2: Use Token to Push
Run this command:
```bash
git push -u origin main
```

When it asks:
- **Username:** `kondurupreethi03` ✅ (you're doing this correctly)
- **Password:** **PASTE YOUR TOKEN** (not your GitHub password!)

### Step 3: Save Credentials (Optional - for future)
After successful push, configure Git to remember:
```bash
git config --global credential.helper osxkeychain
```

## 🔍 How to Know if You Have the Right Token
- ✅ Token starts with `ghp_` (like `ghp_AbCdEf123456...`)
- ✅ Token is about 40+ characters long
- ✅ You copied it from GitHub token page
- ❌ NOT your GitHub password
- ❌ NOT your username

## 🎯 Quick Test
If you want to test with token directly:
```bash
git push https://kondurupreethi03:YOUR_TOKEN@github.com/kondurupreethi03/Portfolio.git main
```
(Replace `YOUR_TOKEN` with your actual token)

## 📝 Still Not Working?
1. Make sure token has `repo` scope checked
2. Token might be expired - create a new one
3. Make sure you copied the ENTIRE token (no spaces)

## 🎉 After Successful Push
Your portfolio will be available at:
**https://github.com/kondurupreethi03/Portfolio**
