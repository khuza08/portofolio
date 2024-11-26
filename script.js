document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery-item, #gallery");

    const handleScroll = () => {
        const galleryPosition = gallery.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        // Tambahkan animasi fade-in dan fade-out
        if (galleryPosition < screenPosition && galleryPosition > -gallery.offsetHeight) {
            gallery.classList.add("active");
            gallery.classList.remove("hidden");
        } else {
            gallery.classList.remove("active");
            gallery.classList.add("hidden");
        }
    };

    window.addEventListener("scroll", handleScroll);
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutMeSection = document.getElementById("aboutme");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutMeSection.classList.add("visible");
          } else {
            aboutMeSection.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
  
    observer.observe(aboutMeSection);
  });
  
