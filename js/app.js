/* This function set the cookie to name selection and value black and then redirect the user to the selection.html page */
function addBlackSneaker(details) {
    Cookies.set(`selection`, `black`);
    window.location.href = `selection.html`;
}
/* This variable gets the button that add the black sneaker and then call the function addBlackSneaker after the button being clicked */
let add_black_sneaker = document.getElementById(`add_black_sneaker`);
add_black_sneaker.addEventListener(`click`, addBlackSneaker);

/* This function set the cookie to name selection and value orange and then redirect the user to the selection.html page */
function addOrangeSneaker(details) {
    Cookies.set(`selection`, `orange`);
    window.location.href = `selection.html`;
}
/* This variable gets the button that add the orange sneaker and then call the function addOrangeSneaker after the button being clicked */
let add_orange_sneaker = document.getElementById(`add_orange_sneaker`);
add_orange_sneaker.addEventListener(`click`, addOrangeSneaker);

/* This function set the cookie to name selection and value blue and then redirect the user to the selection.html page */
function addBlueSneaker(details) {
    Cookies.set(`selection`, `blue`);
    window.location.href = `selection.html`;
}
/* This variable gets the button that add the blue sneaker and then call the function addBlueSneaker after the button being clicked */
let add_blue_sneaker = document.getElementById(`add_blue_sneaker`);
add_blue_sneaker.addEventListener(`click`, addBlueSneaker);