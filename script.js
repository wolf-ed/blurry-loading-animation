const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let load = 0;
const blurring = () => {
    load++;
    if(load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = ((100 - load) / 100)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

let int = setInterval(blurring, 30)


/* Alternative way:
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
loadText.style.opacity = scale(load, 0, 100, 1, 0)
*/