
const Hamburger = document.querySelector('.Hamburger')
const links=document.querySelector('.links');
Hamburger.addEventListener(('click'),()=>{
    Hamburger.classList.toggle('active')
    links.classList.toggle('mobile-menu')
})