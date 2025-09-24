document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("links-template");
    const placeholder = document.getElementById("links-placeholder");
    const exploreBtn = document.querySelector(".explore");
    let sectionLoaded = false;

    function loadSection() {
        if (!sectionLoaded) {
            const clone = template.content.cloneNode(true);
            placeholder.replaceWith(clone);
            sectionLoaded = true;

            setTimeout(() => {
                document.querySelector(".section-links").classList.add("animate");
            }, 50);
        }
    }

    exploreBtn.addEventListener("click", () => {
        loadSection();
        setTimeout(() => {
            document.getElementById("links").scrollIntoView({ behavior: "smooth" });
        }, 100);
    });

    window.addEventListener("scroll", () => {
        if (sectionLoaded) return;
        const rect = placeholder.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            loadSection();
        }
    });
});
