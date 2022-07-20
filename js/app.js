/* This function set the cookie to name selection and value black and then redirect the user to the selection.html page */
function addBlackSneaker(details) {
    let sneaker = {
        title: `black_sneaker`,
        price: 159.9,
        img_url: `https://images.pexels.com/photos/6050918/pexels-photo-6050918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        description: `Travis Scott—hip-hop artist, record-label founder and Houston, Texas native—continues to remix the AJ1 Low, bringing a coveted look back to the streets. Staying true to Scott's love of earth tones and a worn-in look, this version incorporates an aged effect on the midsole with matching laces and tumbled-leather overlays. Premium nubuck leather and Cactus Jack branding on the tongue, left heel and sockliners will keep heads turning. And for those who do a double-take, the Swoosh is indeed backwards—now a signature touch on Scott's designs.`
    }
    let selection_json = JSON.stringify(sneaker);
    Cookies.set(`selection`, selection_json);
    window.location.href = `selection.html`;
}

/* This variable gets the button that add the black sneaker and then call the function addBlackSneaker after the button being clicked */
let add_black_sneaker = document.getElementById(`add_black_sneaker`);
add_black_sneaker.addEventListener(`click`, addBlackSneaker);

/* This function set the cookie to name selection and value orange and then redirect the user to the selection.html page */
function addOrangeSneaker(details) {
    let sneaker = {
        title: `orange_sneaker`,
        price: 149.9,
        img_url: `https://images.pexels.com/photos/6050922/pexels-photo-6050922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        description: `Got your fave colour yet? No worries. The Colour of the Month series lets you feed your need while celebrating a little-known piece of Nike history—the original Colour of the Month series, back in 1984, may have saved the AF-1 from extinction. That's right, a reissue was uncertain in the shoe's beginning, but sports shops in Baltimore saw them selling like hot cakes and knew the AF-1 would become synonymous with street fashion and culture. So, they asked for custom colourways to sell from their stores ... and the rest is history. From pristine materials to this crisp Triple White colourway and even a shoe-cleaning toothbrush, this edition delivers a lesson in coveted off-court style. Every time you rock 'em, make sure you think of the visionary shopkeepers in Baltimore that made it all happen.`
    }
    let selection_json = JSON.stringify(sneaker);
    Cookies.set(`selection`, selection_json);
    window.location.href = `selection.html`;
}
/* This variable gets the button that add the orange sneaker and then call the function addOrangeSneaker after the button being clicked */
let add_orange_sneaker = document.getElementById(`add_orange_sneaker`);
add_orange_sneaker.addEventListener(`click`, addOrangeSneaker);

/* This function set the cookie to name selection and value blue and then redirect the user to the selection.html page */
function addBlueSneaker(details) {
    let sneaker = {
        title: `blue_sneaker`,
        price: 139.9,
        img_url: `https://images.pexels.com/photos/6050924/pexels-photo-6050924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        description: `Bring the bold to your route with Hola Lou's simple, yet abstract take on memories, feelings and music draping our most tested shoe. She brings her minimal approach to our Artist in Residence (A.I.R.) series, giving a unique look to this soft and stable ride. This design is about the art of the run, with colourful shapes printed over a smooth, stretchy material that adds some extra glide to your stride.`
    }
    let selection_json = JSON.stringify(sneaker);
    Cookies.set(`selection`, selection_json);
    window.location.href = `selection.html`;
}
/* This variable gets the button that add the blue sneaker and then call the function addBlueSneaker after the button being clicked */
let add_blue_sneaker = document.getElementById(`add_blue_sneaker`);
add_blue_sneaker.addEventListener(`click`, addBlueSneaker);