const reviews = [
    {
        id: 1,
        name: "Parvati Awrul",
        job: "web developer",
        img: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-129005.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais",
        text: "A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server",
    },
    {
        id: 2,
        name: "Himanshi Borkar",
        job: "frontend developer",
        img: "https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg",
        text: "Full-stack developers design and create websites and applications for various platforms. A full-stack developer's job description might include the following: Develop and maintain web services and interfaces. Contribute to front-end and back-end development processes",
    },
    {
        id: 3,
        name: "Manisha Hirve",
        job: "Doctor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XO9eBkfVCP3NzHyeuMbaOSxRvMuhRWkrQXwWYj0ejClgIr_uIiGA2xRsKT5vEoI227E&usqp=CAU",
        text: "Doctors are considered the most important and responsible people in society. They are the ones who support when someone is struggling with their health. Doctors are the ones to have a profound knowledge of all kinds of diseases, their symptoms, and their treatments. They work day and night selflessly for society’s good health.",
    },
    {
        id: 4,
        name: "Komal Rangari",
        job: "Collector",
        img: "https://t4.ftcdn.net/jpg/06/68/56/85/360_F_668568591_pOlIooh4p3yawsRtcp5wWaz6rA1ZIOpR.jpg",
        text: "The collector is the highest authority of revenue administration. Responsible for collecting land revenue, government taxes, fees, and all dues recoverable as arrears of land revenue. Responsible for land acquisition, revenue recovery, land reforms, civil supplies, and other land related matters",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});