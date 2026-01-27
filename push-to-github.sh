#!/bin/bash

# Script to push portfolio to GitHub
# Repository URL: https://github.com/kondurupreethi03/Portfolio.git

echo "🚀 Setting up Git repository..."

# Initialize git repository (if not already initialized)
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

# Add remote repository
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/kondurupreethi03/Portfolio.git
echo "✅ Remote repository added"

# Add all files
git add .
echo "✅ Files staged"

# Commit changes
git commit -m "Initial commit: React portfolio website"
echo "✅ Changes committed"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 View your portfolio at: https://github.com/kondurupreethi03/Portfolio"
