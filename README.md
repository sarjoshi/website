# Sarthak Joshi Website

Static website for [sarthakjoshi.net](https://sarthakjoshi.net), hosted from GitHub Pages.

## Files

- `index.html` - home page
- `research.html` - research page
- `teaching.html` - teaching page
- `cv.html` - CV page
- `style.css` - site styling
- `script.js` - active navigation and footer year
- `CNAME` - custom domain setting for GitHub Pages

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

## DNS

At your domain registrar, point the apex domain to GitHub Pages with `A` records. You can also point `www` to `sarjoshi.github.io` with a `CNAME` record.

After DNS is set, enable `Enforce HTTPS` in GitHub Pages.
