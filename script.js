const page = document.body.dataset.page;

for (const link of document.querySelectorAll("[data-nav]")) {
  if (link.dataset.nav === page) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
