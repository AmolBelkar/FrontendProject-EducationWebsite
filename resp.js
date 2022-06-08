burger = doucment.querySelector('.burger');
navbar = doucment.querySelector('.navbar');
navList = doucment.querySelector('.nav-list');
rightNav = doucment.querySelector('.right-nav');


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})