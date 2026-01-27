# Resolving Git Push Error

## The Problem
```
error: failed to push some refs to 'https://github.com/kondurupreethi03/Portfolio.git'
hint: Updates were rejected because the remote contains work that you do not have locally.
```

This means the remote repository has commits that your local repository doesn't have.

## Solution Options

### Option 1: Pull and Merge (Recommended - Preserves History)

1. **Pull remote changes:**
   ```bash
   cd /Users/preethikonduru/Documents/portfolio
   git pull origin main
   ```

2. **Resolve any conflicts** (if Git reports conflicts):
   - Git will mark conflicted files
   - Edit the files to resolve conflicts
   - Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Keep the code you want

3. **Commit the merge:**
   ```bash
   git add .
   git commit -m "Merge remote changes"
   ```

4. **Push your changes:**
   ```bash
   git push origin main
   ```

### Option 2: Pull with Rebase (Cleaner History)

1. **Pull with rebase:**
   ```bash
   cd /Users/preethikonduru/Documents/portfolio
   git pull --rebase origin main
   ```

2. **Resolve conflicts** (if any):
   - Edit conflicted files
   - Remove conflict markers
   - Stage the files:
     ```bash
     git add .
     git rebase --continue
     ```

3. **Push:**
   ```bash
   git push origin main
   ```

### Option 3: Force Push (⚠️ Use with Caution)

**Only use this if you're sure you want to overwrite remote changes!**

```bash
cd /Users/preethikonduru/Documents/portfolio
git push --force origin main
```

⚠️ **Warning:** This will overwrite the remote repository and you may lose work!

## Step-by-Step (Safest Approach)

1. **Check what's different:**
   ```bash
   git fetch origin
   git log HEAD..origin/main
   ```

2. **Pull and merge:**
   ```bash
   git pull origin main
   ```

3. **If there are conflicts:**
   - Git will tell you which files have conflicts
   - Open those files and look for conflict markers
   - Choose which version to keep (or combine both)
   - Remove the conflict markers
   - Stage the resolved files:
     ```bash
     git add <filename>
     ```
   - Complete the merge:
     ```bash
     git commit
     ```

4. **Push your changes:**
   ```bash
   git push origin main
   ```

## Quick Fix (If You Just Want Your Local Version)

If you're sure your local version is correct and want to overwrite remote:

```bash
cd /Users/preethikonduru/Documents/portfolio
git push --force-with-lease origin main
```

This is safer than `--force` because it will fail if someone else pushed changes you don't have.

## After Successful Push

Once pushed, your GitHub Actions workflow will automatically deploy to GitHub Pages!

Your site will be available at:
**https://kondurupreethi03.github.io/Portfolio**
