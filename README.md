# Sarthak Joshi Website

Static website for [sarthakjoshi.net](https://sarthakjoshi.net), hosted on GitHub Pages.

## Files

- `index.html` - home page
- `research.html` - research page
- `teaching.html` - teaching page
- `cv.html` - CV page
- `style.css` - site styling
- `script.js` - active navigation and footer year
- `CNAME` - custom domain for GitHub Pages

PDFs can be hosted directly in this repository and linked from the HTML pages. This is better than Dropbox for stable public website documents because the links are versioned with the site.

## Local Preview

```powershell
cd "C:\Users\sarth\Dropbox\sjoshi-website"
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

In GitHub, go to `Settings` -> `Pages` and publish from:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The custom domain is set by `CNAME` to `sarthakjoshi.net`.

## Custom Domain

In GitHub Pages settings, set the custom domain to:

- `sarthakjoshi.net`

Cloudflare should keep the GitHub Pages DNS records:

- `A` records for `sarthakjoshi.net` pointing to GitHub Pages
- `CNAME` record for `www` pointing to `sarjoshi.github.io`
