const page = document.body.dataset.page;

for (const link of document.querySelectorAll("[data-nav]")) {
  if (link.dataset.nav === page) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
}

const menuToggle = document.querySelector(".mobile-menu-toggle");
const topHeader = document.querySelector(".top-header");
if (menuToggle && topHeader) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topHeader.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
