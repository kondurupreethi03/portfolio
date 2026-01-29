# How to Add Your Resume

## Steps to Add Your Resume:

1. **Place your resume PDF file** in the `public` folder:
   - File should be named: `resume.pdf`
   - Location: `/Users/preethikonduru/Documents/portfolio/public/resume.pdf`

2. **The resume button is already configured** to download the file as `Preethi_Konduru_Resume.pdf`

## Alternative Options:

### Option 1: Use a different filename
If your resume has a different name, update the Hero component:
- Open: `src/components/Hero.jsx`
- Change: `href="/resume.pdf"` to your filename (e.g., `href="/my-resume.pdf"`)

### Option 2: Link to an external URL
If your resume is hosted elsewhere (Google Drive, Dropbox, etc.):
- Update the href to the full URL
- Example: `href="https://drive.google.com/your-resume-link"`

### Option 3: Link to a different file format
If you have a Word doc or other format:
- Place it in the `public` folder
- Update the href and download attributes accordingly

## Current Configuration:
- Button text: "Download Resume"
- File location: `/public/resume.pdf`
- Download name: `Preethi_Konduru_Resume.pdf`

## After Adding Your Resume:
1. Save your PDF file to `public/resume.pdf`
2. The button will automatically work - no code changes needed!
3. Test it by running `npm run dev` and clicking the button
