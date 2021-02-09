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

start.addEventListener("click", (event) => {
    choose.style.display = "block";
    start.style.display = "none";
})

choose.addEventListener("click", (event) => {
    petImg.style.display = "block";
    choose.style.display = "none";
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
})

submit.addEventListener("click", () =>{
    placeholder.style.display = "block";
    placeholder.style.color = "goldenrod";
    placeholder.textContent = input.value;
})
// let petImg = document.getElementById("petImg").src = "./img/" + diceRoll + ".png";
// diceNum = document.querySelector("#diceImg");
// diceNum.style.display = "block"; 