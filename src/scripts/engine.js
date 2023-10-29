// const pokemons = [
//     "🦉",
//     "🦉",
//     "🐼",
//     "🐼",
//     "🦁",
//     "🦁",
//     "🐶",
//     "🐶",
//     "🐷",
//     "🐷",
//     "🐮",
//     "🐮",
//     "🐻",
//     "🐻",
//     "🦊",
//     "🦊",
// ];

const pokemons = [
    "charmander.png",
    "charmander.png",
    "hitmonlee.png",
    "hitmonlee.png",
    "pikachu.png",
    "pikachu.png",
    "cubone.png",
    "cubone.png",
    "cyndaquil.png",
    "cyndaquil.png",
    "squirtle.png",
    "squirtle.png",
    "gengar.png",
    "gengar.png",
    "psyduck.png",
    "psyduck.png",
    "bulbasaur.png",
    "bulbasaur.png",
    "pidgeot.png",
    "pidgeot.png",
    "snorlax.png",
    "snorlax.png",
    "eevee.png",
    "eevee.png",
];

let openCards = [];

let shufflePokemons = pokemons.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < pokemons.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = `./src/images/pokemons/${shufflePokemons[i]}`;
    box.appendChild(img);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);




    // box.innerHTML = shufflePokemons[i];
    // box.onclick = handleClick;
    // document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
};

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === pokemons.length) {
        showAlert();
    }
};

function showAlert() {
    var alert = document.getElementById("alert-time");
    alert.style.display = "block";
}

function closeAlert() {
    var alert = document.getElementById("alert-time");
    alert.style.display = "none";
}
