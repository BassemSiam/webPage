let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let landskape = document.querySelector('.landskape');

onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2 + 'px';
    landskape.style.fontSize = value + 'px';
    if (scrollY >= 88) {
        landskape.style.fontSize = '88px';
        landskape.style.position = 'fixed';
        if (scrollY >= 406) {
            landskape.style.display = 'none'
        } else {

            landskape.style.display = 'flex'
        }

        if (scrollY >= 148) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#2c021f, #150127)'

        }
    }

}