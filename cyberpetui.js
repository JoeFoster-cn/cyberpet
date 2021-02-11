//html progress bars?
let pet;
//variables - use let instead?
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const choose = document.querySelector("#choose");
const dogImg = document.querySelector("#dogImg");
const catImg = document.querySelector("#catImg");
const rabImg = document.querySelector("#rabImg");
const petImg = document.querySelector(".petImg");
const dogImg2 = document.querySelector("#dogImg2")
const catImg2 = document.querySelector("#catImg2")
const rabbitImg2 = document.querySelector("#rabImg2")
const petImg2 = document.querySelector(".petImg2");
const dogText = document.querySelector("#selectDog");
const catText = document.querySelector("#selectCat");
const rabText = document.querySelector("#selectRab");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const placeholder = document.getElementById("placeholder");
const info = document.querySelector(".info");
const dogButtons = document.querySelector(".dogButtons");
const catButtons = document.querySelector(".catButtons");
const rabButtons = document.querySelector(".rabButtons");
const animalButtons = document.querySelector(".petButtons");
const feed = document.querySelector("#feed");
const drink = document.querySelector("#drink");
const play = document.querySelector("#play");
const progress = document.querySelector(".progress");


restart.addEventListener("click", (event) => {
    location.reload();
})

choose.addEventListener("click", (event) => {
    petImg.style.display = "block";
    choose.style.display = "none";
    restart.style.display = "none";
})

dogImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "none";
    rabbitImg2.style.display = "none";
    dogImg2.style.display = "block";
    selectDog.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Dog ("Poppy");
})

catImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "block";
    rabbitImg2.style.display = "none";
    dogImg2.style.display = "none";
    selectCat.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Cat ("Prince");
})

rabImg.addEventListener("click", (event) => {
    petImg.style.display = "none";
    petImg2.style.display = "block";
    catImg2.style.display = "none";
    rabbitImg2.style.display = "block";
    dogImg2.style.display = "none";
    selectRab.style.display = "block";
    input.style.display = "block";
    submit.style.display = "block";
    info.style.display = "block"
    pet = new Rabbit ("Hoppy");
})

submit.addEventListener("click", () => {
    placeholder.style.display = "block";
    placeholder.textContent = input.value;
    submit.style.display = "none";
    input.style.display = "none";
    selectRab.style.display = "none";
    selectCat.style.display = "none";
    selectDog.style.display = "none";
    animalButtons.style.display = "block";
    restart.style.display = "block";
    progress.style.display = "block";
})

feed.addEventListener("click", => {
    pet.feed();
})

drink.addEventListener("click", => {
    pet.drink();
})

play.addEventListener("click", => {
    pet.play();
})






// const petButtonFn = () => {
//     play.addEventListener("click", => {pet.play()})
//     feed.addEventListener ("click", => {pet.feed()})
//     drink.addEventListener ("click", => {pet.drink()})
// }

