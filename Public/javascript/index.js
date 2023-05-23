let overseer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
        }
    });
});


let hideScrollElements = document.querySelectorAll(".hide");

hideScrollElements.forEach((el) => overseer.observe(el));

