console.log("%cthe Confident - The leading consultants for all things Drupal, LocalGov Drupal, and design systems.","color: #fff; background: #123456; line-height: 2; font-size: 1.2rem; padding: 1rem; display: block;");

  // --- nav active state on scroll
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll("nav.top .links a");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });