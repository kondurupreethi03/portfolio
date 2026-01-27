# Git Setup Instructions

## Prerequisites

If you get an error about Xcode command line tools, install them first:

```bash
xcode-select --install
```

Or download from: https://developer.apple.com/xcode/

## Option 1: Using the Script (Easiest)

1. Make the script executable:
```bash
chmod +x push-to-github.sh
```

2. Run the script:
```bash
./push-to-github.sh
```

## Option 2: Manual Commands

Run these commands one by one:

```bash
# Navigate to project directory
cd /Users/preethikonduru/Documents/portfolio

# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/kondurupreethi03/Portfolio.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: React portfolio website"

# Set main branch and push
git branch -M main
git push -u origin main
```

## If You Need to Authenticate

GitHub may ask for authentication. You can use:

1. **Personal Access Token** (recommended):
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with `repo` permissions
   - Use the token as your password when prompted

2. **GitHub CLI**:
   ```bash
   gh auth login
   ```

## Troubleshooting

- **If remote already exists**: Run `git remote remove origin` first, then add it again
- **If you need to force push**: `git push -u origin main --force` (use with caution)
- **If authentication fails**: Make sure you have access to the repository

## After Pushing

Your code will be available at:
https://github.com/kondurupreethi03/Portfolio
