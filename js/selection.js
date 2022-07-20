/* This function redirect the user to the index.html */
function backToSneakersOptions(details) {
    window.location.href = `index.html`
}
/* This variable gets the back button then call the function backToSneakerOption after being clicked */
let button_back = document.getElementById(`button_back`);
button_back.addEventListener(`click`, backToSneakersOptions);

/* This variable gets the value chosen by the user */
let chosen_sneaker = Cookies.get(`selection`);

/* This if statment compares the value chosen by the user. If was the black shoe, will add the image on the page */
if (chosen_sneaker === `black`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050918/pexels-photo-6050918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)
} 
/* If was the orange shoe, will add the image on the page */
else if (chosen_sneaker === `orange`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050922/pexels-photo-6050922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)
} 
/* If was the blue shoe, will add the image on the page */
else if (chosen_sneaker === `blue`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="https://images.pexels.com/photos/6050924/pexels-photo-6050924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id="selection_${chosen_sneaker}">`)  
} 
/* And if the value is undefined, will add a message telling the user to go back to the options page */
else {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<h1>Go back to the Sneakers Options and chose your sneaker.</h1>`)
}

/* This block of code style the back button on the page */
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

 /* This block of code style the chosen option by the user on the page */
let image = document.getElementById(`selection_${chosen_sneaker}`);
image[`style`][`width`] = `350px`;
image[`style`][`height`] = `350px`;
image[`style`][`objectFit`] = `cover`;
image[`style`][`boxShadow`] = `20px 20px 40px rgb(228, 228, 228)`;
image[`style`][`marginLeft`] = `36.5vw`;
image[`style`][`marginTop`] = `20px`;