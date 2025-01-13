window.revelar = ScrollReveal({
    reset: false
});

revelar.reveal("#header", {
    duration: 2200,
    delay: 200,
    distance: "50px",
    origin: "top"
});

// -------------------------------------------

revelar.reveal("#photoPrincipal", {
    duration: 1000,
    delay: 200,
    distance: "50px",
    origin: "left"
});

revelar.reveal("#sobreMim h2, h3", {
    duration: 1050,
    delay: 230,
    distance: "20px",
    origin: "bottom"
});

revelar.reveal("#sobreMim h1", {
    duration: 1100,
    delay: 200,
    distance: "20px",
    origin: "bottom"
});

revelar.reveal("#sobreMim p", {
    duration: 1200,
    delay: 200,
    distance: "20px",
    origin: "bottom"
});

revelar.reveal("#sobreMim .button", {
    duration: 1300,
    delay: 200,
    distance: "20px",
    origin: "bottom"
});

// -------------------------------------------

revelar.reveal("#servicos h2, h4", {
    duration: 1000,
    delay: 200,
    distance: "20px",
    origin: "top"
});

const boxServP = document.querySelectorAll(".cardServicos");
const baseServP = {
    duration: 2000,
    distance: "50px",
    origin: "top"
};

boxServP.forEach((servp, index) =>{
    revelar.reveal(servp,{
        ...baseServP,
        delay: 500 + (index * 200)
    })
});

const boxServS = document.querySelectorAll(".cardSecundario");
const baseServS = {
    duration: 2100,
    distance: "50px",
    origin: "top"
};

boxServS.forEach((servs, index) =>{
    revelar.reveal(servs,{
        ...baseServS,
        delay: 200 + (index * 200)
    })
});

// -------------------------------------------

revelar.reveal("#introExperiencia", {
    duration: 1000,
    delay: 200,
    distance: "50px",
    origin: "top"
});

const boxExp = document.querySelectorAll(".cardExperiencias");
const baseExp = {
    duration: 2000,
    distance: "50px",
    origin: "top"
};

boxExp.forEach((exp, index) =>{
    revelar.reveal(exp,{
        ...baseExp,
        delay: 300 + (index * 500)
    })
});

// -------------------------------------------
 
revelar.reveal("#introProjetos", {
    duration: 1000,
    delay: 400,
    distance: "50px",
    origin: "top"
});

revelar.reveal(".imgSeta", {
    duration: 1000,
    delay: 200,
    distance: "50px",
    origin: "top"
});

const boxProj = document.querySelectorAll(".cardProjetos");
const baseProj = {
    duration: 2000,
    distance: "50px",
    origin: "top"
};

boxProj.forEach((proj, index) =>{
    revelar.reveal(proj,{
        ...baseProj,
        delay: 500 + (index * 200)
    })
}) 

// -------------------------------------------

revelar.reveal("#introHabilidades", {
    duration: 1000,
    delay: 300,
    distance: "50px",
    origin: "top"
});

const boxHabil = document.querySelectorAll(".cardHabilidades");
const baseHabil = {
    duration: 1000,
    distance: "50px",
    origin: "top"
};

boxHabil.forEach((habil, index) =>{
    revelar.reveal(habil,{
        ...baseHabil,
        delay: 300 + (index * 200)
    })
}) 

// -------------------------------------------

revelar.reveal("#contato", {
    duration: 1000,
    delay: 300,
    distance: "50px",
    origin: "bottom"
});

// -------------------------------------------

revelar.reveal("footer .navbar", {
    duration: 1000,
    delay: 500,
    distance: "50px",
    origin: "top"
});

revelar.reveal("#copyr #logo", {
    duration: 1000,
    delay: 600,
    distance: "50px",
    origin: "left"
});

revelar.reveal("#socialMedia", {
    duration: 1000,
    delay: 700,
    distance: "50px",
    origin: "top"
});

revelar.reveal("#copyr p", {
    duration: 1000,
    delay: 600,
    distance: "50px",
    origin: "right"
});

// -------------------------------------------

const up = document.querySelector(".buttonUp");

window.addEventListener('scroll', () =>{
   if(window.scrollY > 400)
    {
        up.classList.add('active');
    } 
    else 
    {
        up.classList.remove('active');
    }
});