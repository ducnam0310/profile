
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
    { name: "HTML, CSS, JS", percent: "60%" },
    { name: "JQuery", percent: "70%" },
    { name: "VueJS", percent: "45%" },
    { name: "Git", percent: "60%" },
    { name: "Cypress (UI test)", percent: "30%" },
    { name: "Unit tests", percent: "70%" },
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
    {
        number: 1,
        title: "University projects",
        description: `
        - Construction and development the program analyzes the faulty cakes using C#
        winform. <br />
        - Construction and development wedding services website using ASP .Net, SQL
        Server, HTML, CSS. <br />
        - Construction and development Point of student website using ASP MVC,
        AngularJS, SQL Server
        `,
        period: "2014 - 2018"
    }, 
    {
        number: 2,
        title: "Fsoft Fresher Academy",
        description: `
        Construction and development staff and department management website
        using: <br />
        - ASP MVC <br />
        - Entity Framework code first <br />
        - Bootstrap <br />
        - JS <br />
        - SQL Server <br />
        `,
        period: "5/2018 - 8/2018"
    },
    {
        number: 3,
        title: "Bkav",
        description: `
        <b>Support customers using the software</b><br />
        Support customers using the antivirus software and fix the computer issues
        `,
        period: "5/2018 - 1/2020"
    },
    {
        number: 4,
        title: "FPT Software",
        description: `
        <b>.NET developer</b><br />
        - Development modules for Enterprise management according to ERP model website<br />
        - Using: C#, Angular 4, SQL Anywhere
        `,
        period: "08/2018 - 03/2019"
    },
    {
        number: 5,
        title: "FPT Software",
        description: `
        <b>SharePoint developer</b><br />
        Migrate Lotus Notes system to SharePoint using InfoPath 2013 and SharePoint Designer 2013
        `,
        period: "03/2019 > 10/2019"
    },
    {
        number: 6,
        title: "FPT Software",
        description: `
        <b>.NET developer</b><br />
        - Develop new features to manage the sport areas in Japan. Using: Net Core, VueJS, PostGre Sql
        `,
        period: "10/2019 - 12/2020"
    },
    {
        number: 7,
        title: "Trail CRM",
        description: `
        <b>.NET developer</b><br />
        - Develop new features and improve old functions of our product that for our customers to manage their clients in New Zealand. <br />
        - Using: ASP.NET, JQuery, Sql Server, ReactJS
        `,
        period: "12/2020 - Now"
    },
];

myExperiances.sort(experiance => -experiance.number).forEach(experiance => {
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


// Hide elements
const hiddenElements = ["services", "portfolio"];

hiddenElements.forEach(elm => {
    // Hide menu items
    document.querySelectorAll(`.nav a`).forEach(navItem => {
        if (navItem.getAttribute("href").includes(elm)) {
            navItem.classList.add("hidden");
        }
    });

    // Hide contents
    document.querySelectorAll("section").forEach(section => {
        if (section.id === elm) {
            section.classList.add("hidden");
        }
    });
});