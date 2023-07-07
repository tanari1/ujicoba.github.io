//Toggle class active
const navNav = document.querySelector('.nav-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick=()=>{
    navNav.classList.toggle('active');
};

//klik diluar slide bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navNav.contains(e.target)){
        navNav.classList.remove('active');
    }
})