# sarthakjoshi.net

Personal academic website, hosted on GitHub Pages.

## How to update

1. Edit any `.html` file directly on GitHub (or locally and push).
2. Changes go live within ~1 minute.

## File structure

```
index.html      ← Home page
research.html   ← Research papers
teaching.html   ← Teaching info
cv.html         ← CV download page
style.css       ← All styling (shared across pages)
photo.jpg       ← Your headshot (add this!)
Sarthak_CV.pdf  ← Your CV PDF (add this!)
CNAME           ← Tells GitHub to serve on sarthakjoshi.net
```

## Adding a new paper

Open `research.html` and copy-paste this block under the appropriate section:

```html
<div class="paper">
  <h3>Your Paper Title</h3>
  <div class="paper-coauthors">with <a href="https://coauthor-site.com">Coauthor Name</a></div>
  <div class="paper-links">
    <a href="https://link-to-pdf.pdf">Working Paper [PDF]</a>
    <a href="https://registry-link">AEA Registry</a>
  </div>
  <p class="paper-status">Revision requested at Journal Name</p>
  <p class="paper-abstract">
    Your abstract text here.
  </p>
</div>
```

## Setup (one-time)

See the deployment instructions provided separately.
