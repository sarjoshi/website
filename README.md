# Sarthak Joshi Website

Static website for [sarthakjoshi.net](https://sarthakjoshi.net), hosted on Cloudflare Pages.

## Files

- `index.html` - home page
- `research.html` - research page
- `teaching.html` - teaching page
- `cv.html` - CV page
- `style.css` - site styling
- `script.js` - active navigation and footer year

PDFs can be hosted directly in this repository and linked from the HTML pages. This is better than Dropbox for stable public website documents because the links are versioned with the site.

## Local Preview

```powershell
cd "C:\Users\sarth\Dropbox\sjoshi-website"
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Cloudflare Pages

In Cloudflare, go to `Workers & Pages` and create or open the Pages project for this site.

- Connect the GitHub repository: `sarjoshi/website`
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `/`

Cloudflare will redeploy the site whenever the connected `main` branch changes.

## Custom Domain

In the Pages project, go to `Custom domains` and add:

- `sarthakjoshi.net`
- optional: `www.sarthakjoshi.net`

Because the domain is on Cloudflare, let Cloudflare create or manage the DNS record for the Pages project. Do not use GitHub Pages DNS records for this setup.
