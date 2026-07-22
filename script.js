// ===============================
// CONFIGURAÇÕES
// ===============================

const checkout = "https://pay.kiwify.com.br/LU6x4fj";


// ===============================
// TODOS OS BOTÕES DE COMPRA
// ===============================

document.querySelectorAll("a").forEach(link => {

    if (
        link.classList.contains("btn-primary") ||
        link.classList.contains("btn-buy") ||
        link.classList.contains("btn-footer") ||
        link.classList.contains("btn-nav")
    ) {

        link.href = checkout;
        link.target = "_blank";

    }

});


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".card,.item,.testimonial,.faq-item")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// FAQ
// ===============================

document.querySelectorAll(".faq-item").forEach(item=>{

const p=item.querySelector("p");

p.style.display="none";

item.style.cursor="pointer";

item.addEventListener("click",()=>{

if(p.style.display==="block"){

p.style.display="none";

}else{

p.style.display="block";

}

});

});


// ===============================
// BOTÃO FLUTUANTE
// ===============================

const floating=document.createElement("a");

floating.href=checkout;

floating.target="_blank";

floating.innerHTML="🛒 Comprar";

floating.className="floating-buy";

document.body.appendChild(floating);


// ===============================
// ESTILO BOTÃO FLUTUANTE
// ===============================

const style=document.createElement("style");

style.innerHTML=`

.floating-buy{

position:fixed;

right:20px;

bottom:20px;

background:#22c55e;

color:#fff;

padding:18px 28px;

border-radius:50px;

font-weight:bold;

text-decoration:none;

box-shadow:0 10px 30px rgba(0,0,0,.25);

z-index:9999;

transition:.3s;

animation:pulse 2s infinite;

}

.floating-buy:hover{

transform:scale(1.08);

background:#16a34a;

}

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s;

}

.show{

opacity:1;

transform:translateY(0);

}

@keyframes pulse{

0%{

transform:scale(1);

}

50%{

transform:scale(1.08);

}

100%{

transform:scale(1);

}

}

`;

document.head.appendChild(style);


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ===============================
// NAVBAR
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="none";

}

});



// ===============================
// CONSOLE
// ===============================

console.log("Landing Page carregada com sucesso!");