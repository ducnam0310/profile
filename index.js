
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
    { name: "C# NET", percent: "75%" },
    { name: "ASP.NET MVC", percent: "75%" },
    { name: "SQL", percent: "40%" },
    { name: "Entity Framework", percent: "70%" },
    { name: "HTML, CSS, JavaScript", percent: "60%" },
    { name: "JQuery", percent: "70%" },
    { name: "VueJS", percent: "45%" },
    { name: "Git", percent: "60%" },
]

mySkills.forEach(skill => { 
    document.querySelector(".skills").innerHTML += `
        <div class="skill-item padd-15">
            <h5>${skill.name}</h5>
            <div class="progress">
                <div class="progress-in" style="width: ${skill.percent};"></div>
            </div>
        </div>
    `;
});

// Experiances
const myExperiances = [
    { title: "Master in Computer Science", description: "", period: "2018 - 2020" }
];

myExperiances.forEach(experiance => {
    document.querySelector(".experience .timeline").innerHTML += `
        <div class="timeline-item">
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
                <i class="fa fa-calendar"></i> ${experiance.period}
            </h3>
            <h4 class="timeline-title">${experiance.title}</h4>
            <p class="timeline-text">${experiance.description}</p>
        </div>
    `;
});