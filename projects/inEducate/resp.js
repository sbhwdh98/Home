navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
burger = document.querySelector('.burger');
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('height-resp');
    navlist.classList.toggle('visibility-resp');
    rightNav.classList.toggle('visibility-resp');
})