/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 150,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work_section, .contact__input',{interval: 200}); 


(function (global) {

var ws = {};

var workHtml = "snippets/maincontent.html";
var project1Html = "snippets/project1.html";
var project2Html = "snippets/project2.html";
var project3Html = "snippets/project3.html";

var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};

var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/loadingya.gif></div>";
    insertHtml(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#work");
    $ajaxUtils.sendGetRequest(
        workHtml,
        function (responseText) {
            document.querySelector("#work")
             .innerHTML = responseText;
        },
        false
    );
});

ws.loadProject1 = function () {
    showLoading("#work");
    $ajaxUtils.sendGetRequest(
        project1Html,
        function (responseText) {
            document.querySelector("#work")
            .innerHTML = responseText;
        },
        false
        );
};
ws.loadProject2 = function () {
    showLoading("#work");
    $ajaxUtils.sendGetRequest(
        project2Html,
        function (responseText) {
            document.querySelector("#work")
            .innerHTML = responseText;
        },
        false
        );
};
ws.loadProject3 = function () {
    showLoading("#work");
    $ajaxUtils.sendGetRequest(
        project3Html,
        function (responseText) {
            document.querySelector("#work")
            .innerHTML = responseText;
        },
        false
        );
};


global.$ws = ws;

})(window);