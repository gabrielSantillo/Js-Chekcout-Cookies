/* This function redirect the user to the index.html */
function backToSneakersOptions(details) {
    window.location.href = `index.html`
}
/* This variable gets the back button then call the function backToSneakerOption after being clicked */
let button_back = document.getElementById(`button_back`);
button_back.addEventListener(`click`, backToSneakersOptions);

/* This variable gets the JSON of the selection */
let chosen_sneaker_json = Cookies.get(`selection`);
/* This variable receives the object that was saved as JSON */
let chosen_sneaker = JSON.parse(chosen_sneaker_json);

/* This if statment compares the value chosen by the user. If was the black shoe, will add the image on the page, as its price and its description */
if (chosen_sneaker[`title`] === `black_sneaker`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="${chosen_sneaker[`img_url`]}" alt="" id="selection_${chosen_sneaker[`title`]}"><br><h2 id="h2_price">$${chosen_sneaker[`price`]}</h2><p id="description">${chosen_sneaker[`description`]}</p>`);
} 
/* If was the orange shoe, will add the image on the page, as its price and its description */
else if (chosen_sneaker[`title`] === `orange_sneaker`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="${chosen_sneaker[`img_url`]}" alt="" id="selection_${chosen_sneaker[`title`]}"><br><h2 id="h2_price">$${chosen_sneaker[`price`]}</h2><p id="description">${chosen_sneaker[`description`]}</p>`);
} 
/* If was the blue shoe, will add the image on the page, as its price and its description */
else if (chosen_sneaker[`title`] === `blue_sneaker`) {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<br><img src="${chosen_sneaker[`img_url`]}" alt="" id="selection_${chosen_sneaker[`title`]}"><br><h2 id="h2_price">$${chosen_sneaker[`price`]}</h2><p id="description">${chosen_sneaker[`description`]}</p>`);
} 
/* And if the value is undefined, will add a message telling the user to go back to the options page */
else {
    document.getElementById(`button_back`).insertAdjacentHTML(`afterEnd`, `<h1>Go back to the Sneakers Options and chose your sneaker.</h1>`)
}

/* This block of code make the main displays grid just to make the items look better */
let main = document.querySelector(`main`);
main[`style`][`display`] = `grid`

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

 /* This block of code style the chosen option by the user on the page */
let image = document.getElementById(`selection_${chosen_sneaker[`title`]}`);
image[`style`][`width`] = `350px`;
image[`style`][`height`] = `350px`;
image[`style`][`objectFit`] = `cover`;
image[`style`][`boxShadow`] = `20px 20px 40px rgb(228, 228, 228)`;
image[`style`][`marginTop`] = `20px`;
image[`style`][`justifySelf`] = `center`;

/* This block of code style the price of the chosen sneaker */
let price = document.getElementById(`h2_price`);
price[`style`][`color`] = `gray`
price[`style`][`justifySelf`] = `center`;

/* This block of code style the description of the chosen sneaker */
let description = document.getElementById(`description`);
description[`style`][`width`] = `30%`;
description[`style`][`justifySelf`] = `center`;