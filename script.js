const fly = document.querySelector('.flex');

let mouse = {
    x: undefined,
    y: undefined
};

let posX = innerWidth/2 - fly.offsetWidth/2;
let posY = innerHeight/2 - fly.offsetHeight/2;
fly.style.left = posX+'px';
fly.style.top = posY+'px';

let center = 0;
let mousePos = 0;

window.addEventListener('mousemove', function (event) {
    // console.log(event)
    mouse.x = event.x + document.documentElement.scrollLeft;
    mouse.y = event.y + document.documentElement.scrollTop;

    let x1 = fly.offsetLeft;
    let x2 = fly.offsetLeft + fly.offsetWidth + 20;
    let y1 = fly.offsetTop;
    let y2 = fly.offsetTop + fly.offsetHeight + 20;

    if (mouse.x > x1 && mouse.x < x2 && mouse.y > y1 && mouse.y < y2) {

        center = (x2 - x1) / 2;
        mousePos = mouse.x - x1;

        if (mousePos < center) {
            posX += 20;
        } else {
            posX -=20;
        }

        center = (y2 - y1) / 2;
        mousePos = mouse.y - y1;
        if (mousePos < center) {
            posY +=20;
        } else {
            posY -=20;
        }
    }

    if (posX < 0) {
	posX = 0;
    }

    else if (posY < 0) {
	posY = 0;
    }
    fly.style.left = posX+'px';
    fly.style.top = posY+'px';
});
