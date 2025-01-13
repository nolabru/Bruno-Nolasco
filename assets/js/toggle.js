const toggle = document.getElementById('toggle');
const navBar = document.getElementById('header');

toggle.addEventListener('click', () =>{
    navBar.classList.toggle('active');
});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 50)
     {
         navBar.classList.add('reveal');
     } 
     else 
     {
         navBar.classList.remove('reveal');
     }
 });

const links = document.querySelectorAll('.navbar a')

function closeMenus(){
    navBar.classList.remove('active');
}

links.forEach(link =>{
    link.addEventListener('click', closeMenus)
})