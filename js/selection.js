function backToSneakersOptions(details) {
    window.location.href = `index.html`
}
let button_back = document.getElementById(`button_back`);
button_back.addEventListener(`click`, backToSneakersOptions);


let chosen_sneaker = Cookies.get(`selection`);

if (chosen_sneaker === `black`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050918/pexels-photo-6050918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)
} 
else if (chosen_sneaker === `orange`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050922/pexels-photo-6050922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)
} 
else if (chosen_sneaker === `blue`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050924/pexels-photo-6050924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)  
} 
else {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<h1>Go back to the Sneakers Options and chose your sneaker.</h1>`)
}

 button_back[`style`][`backgroundImage`] = `linear-gradient(45deg, #f84a4a, #f18181)`;
 button_back[`style`][`width`] = `250px`;
 button_back[`style`][`height`] = `50px`;
 button_back[`style`][`fontSize`] = `16px`;
 button_back[`style`][`color`] = `white`;
 button_back[`style`][`border`] = `none`;
 button_back[`style`][`borderRadius`] = `10px`;
 button_back[`style`][`cursor`] = `pointer`;
 button_back[`style`][`justify-self`] = `center`;
 button_back[`style`][`marginLeft`] = `40vw`;

let image = document.getElementById(`selection_${chosen_sneaker}`);
image[`style`][`width`] = `350px`;
image[`style`][`height`] = `350px`;
image[`style`][`objectFit`] = `cover`;
image[`style`][`boxShadow`] = `20px 20px 40px rgb(228, 228, 228)`;
image[`style`][`marginLeft`] = `36.5vw`;
image[`style`][`marginTop`] = `20px`;