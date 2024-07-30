import './index.css';
import Bee from'./images/Blue-carpenter-bee.webp';
import Frog from './images/Blue-Poison-Dart-Frogs.webp';
import Wind from './images/By-the-wind-sailor.webp';
import Wierd from './images/GettyImages-986491702-6ef1687.webp';
import Newt from './images/GettyImages-1020248264-c58d21f.webp';
import Bunting from './images/Indigo-bunting.webp';


function Div1 () {
    const container = document.querySelector('.carousel')
    const div1 = document.createElement('div');
    const p = document.createElement('p');

    const Bee1 = new Image();
    Bee1.src = Bee;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div1.appendChild(Bee1);
    div1.appendChild(p);

    container.appendChild(div1);
}

function Div2 () {
    const container = document.querySelector('.carousel')
    const div2 = document.createElement('div');
    const p = document.createElement('p');

    const Frog1 = new Image();
    Frog1.src = Frog;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div2.appendChild(Frog1);
    div2.appendChild(p);

    container.appendChild(div2);
}

function Div3 () {
    const container = document.querySelector('.carousel')
    const div3 = document.createElement('div');
    const p = document.createElement('p');

    const Wind1 = new Image();
    Wind1.src = Wind;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div3.appendChild(Wind1);
    div3.appendChild(p);

    container.appendChild(div3);
}

function Div4 () {
    const container = document.querySelector('.carousel')
    const div4 = document.createElement('div');
    const p = document.createElement('p');

    const Wierd1 = new Image();
    Wierd1.src = Wierd;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div4.appendChild(Wierd1);
    div4.appendChild(p);

    container.appendChild(div4);
}

function Div5 () {
    const container = document.querySelector('.carousel')
    const div5 = document.createElement('div');
    const p = document.createElement('p');

    const Newt1 = new Image();
    Newt1.src = Newt;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div5.appendChild(Newt1);
    div5.appendChild(p);

    container.appendChild(div5);
}

function Div6 () {
    const container = document.querySelector('.carousel')
    const div6 = document.createElement('div');
    const p = document.createElement('p');

    const Bunting1 = new Image();
    Bunting1.src = Bunting;

    p.innerText = "An Image Of A Blue Carpenter Bee";

    div6.appendChild(Bunting1);
    div6.appendChild(p);

    container.appendChild(div6);
}

function BackgroundLoad () {
    Div1();
    Div2();
    Div3();
    Div4();
    Div5();
    Div6();
}


window.addEventListener('load',BackgroundLoad());

function AddEvent () {
    const container = document.querySelector('.container');
    const carousel = document.querySelector('.carousel')
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click',() => {
        container.scrollLeft += 705;
    })

    prev.addEventListener('click',() => {
        container.scrollLeft -= 705;
    })
}

AddEvent();

console.log("New Project");