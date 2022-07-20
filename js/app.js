function addBlackSneaker(details) {
    Cookies.set(`selection`, `black`);
    window.location.href = `selection.html`;
}
let add_black_sneaker = document.getElementById(`add_black_sneaker`);
add_black_sneaker.addEventListener(`click`, addBlackSneaker);

function addOrangeSneaker(details) {
    Cookies.set(`selection`, `orange`);
    window.location.href = `selection.html`;
}
let add_orange_sneaker = document.getElementById(`add_orange_sneaker`);
add_orange_sneaker.addEventListener(`click`, addOrangeSneaker);

function addBlueSneaker(details) {
    Cookies.set(`selection`, `blue`);
    window.location.href = `selection.html`;
}
let add_blue_sneaker = document.getElementById(`add_blue_sneaker`);
add_blue_sneaker.addEventListener(`click`, addBlueSneaker);