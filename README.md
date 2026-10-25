# HabitRoot website

Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Open locally
Double-click `index.html`. All links are relative, so every page works from the file system.

## Deploy to GitHub Pages
1. Create a GitHub repository (e.g. `habitroot-website`), public.
2. Upload all files in this folder to the repository root (keep `css/`, `js/`, `assets/`).
3. Repository **Settings > Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. Wait a minute or two. The real URL appears at the top of the Pages settings (usually `https://USERNAME.github.io/REPO/`).
5. Replace the placeholders below, commit, and let Pages redeploy.
6. Open `<your-url>/privacy-policy.html` in a private window while signed out of everything. If it loads, it is public.
7. In Google Play Console: **App content > Privacy policy**, paste that URL.
8. In the Android app's Settings screen, add a link that opens the same URL.
Do not say the site is live until step 6 has actually succeeded.

## Placeholders to replace (search for each)
- `https://YOUR-USERNAME.github.io/habitroot-website` : production URL. In every HTML `<head>` (canonical, og:url, og:image), `robots.txt`, `sitemap.xml`
- `support@example.com` : support email. In `contact.html`, `faq.html`, `terms-of-service.html` and `CONFIG.supportEmail` in `js/main.js`
- `privacy@example.com` : privacy email. In `privacy-policy.html`, `contact.html` and `CONFIG.privacyEmail` in `js/main.js`
- `[DEVELOPER_NAME]`, `[DEVELOPER_NAME or COMPANY]`, `[ADDRESS]` : footer of every page, privacy policy, terms
- `[DATE]` : "Last updated" on the three legal pages
- `[JURISDICTION]` : terms, governing law
- `[VERIFY ...]` and `[LEGAL REVIEW ...]` : every one must be resolved against the real app or by a lawyer, then deleted
- `CONFIG.storeUrl` in `js/main.js` : set to the Play Store URL once published; the "Coming Soon" buttons then become real links
- `assets/screenshots/` : add real screenshots and a 1200x630 `og-image.png`; the home page currently shows CSS mockups
- `assets/logo.svg`, `assets/favicon.svg` : stand-in logo; swap in the real HabitRoot logo
- Features page: remove or move to Planned any feature the app does not really implement (streaks, tree growth, rewards)

## Quality checks done in this build
All seven pages exist, share one stylesheet, header and footer, and use relative links. No testimonials, ratings or download links are included. Contact form never claims to send mail. Not yet done: testing in real browsers and screen readers, and a legal review. Do those before launch.
# HabbitRoot
