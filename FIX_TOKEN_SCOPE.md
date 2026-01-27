# Fix: Personal Access Token Missing Workflow Scope

## The Problem
```
refusing to allow a Personal Access Token to create or update workflow 
`.github/workflows/deploy.yml` without `workflow` scope
```

Your Personal Access Token needs the `workflow` scope to push workflow files.

## Solution: Update Your Token

### Step 1: Create a New Token with Workflow Scope

1. **Go to GitHub Token Settings:**
   - Visit: https://github.com/settings/tokens
   - Or: GitHub → Your Profile → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Click **"Generate new token"** → **"Generate new token (classic)"**

3. **Configure Token:**
   - **Note:** `Portfolio Push Token` (or any name you prefer)
   - **Expiration:** Choose your preference
   - **Select scopes:** Check these boxes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows) ← **IMPORTANT!**
   - Scroll down and click **"Generate token"**

4. **Copy the Token:**
   - ⚠️ Copy it immediately! It starts with `ghp_...`

### Step 2: Update Your Git Credentials

**Option A: Update Credentials in macOS Keychain**

1. Open **Keychain Access** app on your Mac
2. Search for `github.com`
3. Find the entry for `github.com`
4. Double-click it
5. Check "Show password"
6. Replace the password with your new token
7. Save changes

**Option B: Clear and Re-enter Credentials**

```bash
# Remove old credentials
git credential-osxkeychain erase
host=github.com
protocol=https
[Press Enter twice]

# Now push again - it will ask for credentials
git push origin main
# Username: kondurupreethi03
# Password: [paste your NEW token with workflow scope]
```

**Option C: Use Token in URL (One-time)**

```bash
git push https://kondurupreethi03:YOUR_NEW_TOKEN@github.com/kondurupreethi03/Portfolio.git main
```

### Step 3: Push Again

After updating your token:

```bash
git push origin main
```

## Required Scopes Checklist

Make sure your token has:
- ✅ `repo` - Full control of private repositories
- ✅ `workflow` - Update GitHub Action workflows

## Alternative: Use SSH Instead

If you prefer not to use tokens, you can set up SSH:

1. **Generate SSH Key:**
   ```bash
   ssh-keygen -t ed25519 -C "preethikonduru38@gmail.com"
   ```

2. **Add to GitHub:**
   - Copy public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Add new SSH key

3. **Change Remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:kondurupreethi03/Portfolio.git
   git push origin main
   ```

## After Successful Push

Once pushed, GitHub Actions will automatically deploy your site to:
**https://kondurupreethi03.github.io/Portfolio**
