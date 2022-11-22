
new Typed(".typing", {
    strings: ["Bug Creator", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

const navItems = document.querySelectorAll(".nav li");
navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        document.querySelector(".nav li a.active").classList.remove("active");
        navItem.querySelector("a").classList.toggle("active");
    });
});

// Skills
const mySkills = [
    { name: "C# NET", percent: "60%" },
    { name: "SQL", percent: "40%" },
    { name: "HTML, CSS", percent: "50%" },
    { name: "JQuery", percent: "70%" },
    { name: "VueJS", percent: "45%" },
    { name: "ReactJS", percent: "40%" },
]

mySkills.forEach(skill => { 
    document.querySelector(".skills").innerHTML += `
        <div class="skill-item padd-15">
            <h5>${skill.name}</h5>
            <div class="progress">
                <div class="progress-in" style="width: ${skill.percent};"></div>
                <div class="skill-percent">${skill.percent}</div>
            </div>
        </div>
    `;
});