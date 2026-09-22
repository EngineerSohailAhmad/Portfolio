// ==========================================
// Typing Animation
// ==========================================

const typingElement = document.getElementById("typing");

const words = [
    "Software Engineering Student",
    "Frontend Web Developer",
    "C++ Programmer",
    "Java Programmer",
    "Python Programmer",
    "HTML Technology",
    "CSS Technology",
    "JavaScript Technology",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
        currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    }

    else {

        typingElement.textContent =
        currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();

// ==========================================
// Dark Mode
// ==========================================

const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkButton.innerHTML="☀";

    }

    else{

        darkButton.innerHTML="🌙";

    }

});

// ==========================================
// Scroll To Top Button
// ==========================================

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// Contact Form Validation
// ==========================================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(event){

event.preventDefault();

const inputs=this.querySelectorAll("input, textarea");

let isValid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

isValid=false;

input.style.border="2px solid red";

}

else{

input.style.border="1px solid #ccc";

}

});

if(isValid){

alert("Thank you! Your message has been sent successfully.");

this.reset();

}

});

}

// ==========================================
// Fade In Animation on Scroll
// ==========================================

const fadeElements=document.querySelectorAll(
".card, .timeline-item, .about-info div, .skill"
);

function revealElements(){

const trigger=window.innerHeight*0.85;

fadeElements.forEach(element=>{

const top=element.getBoundingClientRect().top;

if(top<trigger){

element.classList.add("show");

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();

// ==========================================
// Active Navigation Link
// ==========================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.offsetHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

// ==========================================
// Navbar Shadow on Scroll
// ==========================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="none";

}

});

// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load",()=>{

console.log("Portfolio Loaded Successfully!");

});

// ==========================================
// Footer Year
// ==========================================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=
`© ${new Date().getFullYear()} Sohail Ahmad. All Rights Reserved.`;

}