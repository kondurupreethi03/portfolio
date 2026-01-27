# Setup Guide - Installing Node.js and npm

Since Node.js is not currently installed on your system, you need to install it first before running the React portfolio.

## Option 1: Download Node.js Directly (Recommended - Easiest)

1. **Visit the official Node.js website:**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for macOS
   - Choose the installer for your Mac (Apple Silicon M1/M2 or Intel)

2. **Install Node.js:**
   - Open the downloaded `.pkg` file
   - Follow the installation wizard
   - This will install both Node.js and npm

3. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

## Option 2: Install using Homebrew (If you have it)

If you have Homebrew installed, you can use:
```bash
brew install node
```

## Option 3: Install Homebrew first, then Node.js

If you want to use Homebrew but don't have it:

1. **Install Homebrew:**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   Follow the on-screen instructions.

2. **Add Homebrew to your PATH** (if needed):
   ```bash
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Install Node.js:**
   ```bash
   brew install node
   ```

## After Installing Node.js

Once Node.js is installed, navigate to your portfolio directory and run:

```bash
cd /Users/preethikonduru/Documents/portfolio
npm install
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Troubleshooting

- If `npm` command is still not found after installation, try:
  - Close and reopen your terminal
  - Restart your terminal application
  - Check your PATH: `echo $PATH`

- For network issues, ensure you have internet connectivity and can access:
  - https://nodejs.org
  - https://github.com
