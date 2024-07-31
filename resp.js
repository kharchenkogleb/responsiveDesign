const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navul = document.querySelector('.nav-ul')

burger.addEventListener('click', ()=>{
    navul.classList.toggle('opacity-class');
    navbar.classList.toggle('burger-nav');
});