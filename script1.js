// ===============================
// RONIT.HTML JAVASCRIPT
// ===============================

// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});


// SMOOTH SCROLL

document.querySelectorAll('nav a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ACTIVE NAVIGATION

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// HERO ANIMATION

window.addEventListener("load",()=>{

    const hero=document.querySelector(".stock-banner");

    if(hero){

        hero.style.opacity="0";

        hero.style.transform="translateY(50px)";

        setTimeout(()=>{

            hero.style.transition="1s";

            hero.style.opacity="1";

            hero.style.transform="translateY(0px)";

        },400);

    }

});


// COUNTER ANIMATION

const counters=document.querySelectorAll(".kpi-card h1");

const speed=150;

counters.forEach(counter=>{

    const update=()=>{

        const target=parseInt(counter.innerText);

        if(isNaN(target)) return;

        const count=parseInt(counter.dataset.count)||0;

        const increment=Math.ceil(target/speed);

        if(count<target){

            counter.dataset.count=count+increment;

            counter.innerText=count+increment;

            setTimeout(update,15);

        }else{

            counter.innerText=target;

        }

    }

    update();

});


// CHART.JS

const canvas=document.getElementById("careerChart");

if(canvas){

const ctx=canvas.getContext("2d");

new Chart(ctx,{

type:"line",

data:{

labels:[

"School",

"B.Tech",

"Internship",

"MetricStream",

"PwC",

"MBA"

],

datasets:[{

label:"Career Growth",

data:[10,35,55,72,88,100],

borderColor:"#00e5ff",

backgroundColor:"rgba(0,229,255,.2)",

fill:true,

tension:.4,

borderWidth:4,

pointRadius:6,

pointBackgroundColor:"#00e5ff"

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{

color:"white"

},

grid:{

color:"rgba(255,255,255,.1)"

}

},

y:{

ticks:{

color:"white"

},

grid:{

color:"rgba(255,255,255,.1)"

}

}

}

}

});

}


// SCROLL REVEAL

const revealItems=document.querySelectorAll(

".market-stats .card,.kpi-card,.overview-text,.overview-chart"

);

function reveal(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0px)";

        }

    });

}

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


// CARD HOVER EFFECT

const cards=document.querySelectorAll(".card,.kpi-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


// FLOATING IMAGE

const image=document.querySelector(".stock-banner img");

if(image){

let angle=0;

setInterval(()=>{

    angle+=0.03;

    image.style.transform=`translateY(${Math.sin(angle)*10}px)`;

},20);

}