const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.bg');
let load = 0;

let int = setInterval(blurry, 50);

function blurry() {
    load++;
    if(load > 99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}