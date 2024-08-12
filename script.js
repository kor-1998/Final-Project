var typed = new Typed(".text", {
    strings: ["Japanese","a College student", "a Web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*skill*/
document.addEventListener("DOMContentLoaded", () => {
    const target1 = document.getElementById("skill-container-left")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("skill-visible-left")
            } else {
                entry.target.classList.remove("skill-visible-left")
            }
        });
    }, {threshold: 0.1})

    observer.observe(target1)
})

document.addEventListener("DOMContentLoaded", () => {
    const target2 = document.getElementById("skill-container-right")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("skill-visible-right")
            } else {
                entry.target.classList.remove("skill-visible-right")
            }
        });
    }, {threshold: 0.1})

    observer.observe(target2)
})

/*about*/
document.addEventListener("DOMContentLoaded", () => {
    const target2 = document.getElementById("about-bottom")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("about-visible-bottom")
            } else {
                entry.target.classList.remove("about-visible-bottom")
            }
        });
    }, {threshold: 0.1})

    observer.observe(target2)
})

/*project*/
document.addEventListener("DOMContentLoaded", () => {
    const target2 = document.getElementById("project-bottom")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("project-visible-bottom")
            } else {
                entry.target.classList.remove("project-visible-bottom")
            }
        });
    }, {threshold: 0.1})

    observer.observe(target2)
})

/*contact*/
document.addEventListener("DOMContentLoaded", () => {
    const target2 = document.getElementById("contact-bottom")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("contact-visible-bottom")
            } else {
                entry.target.classList.remove("contact-visible-bottom")
            }
        });
    }, {threshold: 0.1})

    observer.observe(target2)
})