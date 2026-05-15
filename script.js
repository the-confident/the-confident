console.log(
  "%cthe%cConfident - Built by the people who build LocalGov Drupal%c.",
  "color: #fff; background: #123456; line-height: 2; font-size: 1.2rem; padding-block: 1rem; padding-inline-start: 1rem; display: inline; font-style: italic;",
  "color: #fff; background: #123456; line-height: 2; font-size: 1.2rem; padding-block: 1rem; display: inline;",
  "color: #eb0032; background: #123456; line-height: 2; font-size: 1.2rem; padding-block: 1rem; padding-inline-end: 1rem; display: inline;",
);

// --- nav active state on scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".header__nav a");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === "/#" + id),
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
sections.forEach((section) => obs.observe(section));
