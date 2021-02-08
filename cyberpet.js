class Animal {
    constructor(name){
        this._name = name;
        this._happiness = 40;
        this._hunger = 100;
        this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get play(){
        return this._play;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        return this._hunger--;
    }
    drink(){
        return this._thirst--; 
    }
    play(){
        return this._happiness++; 
    }
    noplay(){
        return (`${this.name} is bored!`);
    }
    wantDrink(){
        return (`${this.name} wants a drink!`);
    }
    wantFood(){
        return (`${this.name} wants feeding!`);
    }

}


class Dog extends Animal {
    constructor(name, walk, bath){
        super(name);
        this._walk = walk;
        this._bath = bath;
    }
    get walk(){
        if (this.happiness == false);
        return `${this.name} needs a walk!`;
    }
    get bath(){
        if (this.walk == true);
        return `${this.name} needs a bath!`;
    }

    
}

class Cat extends Animal {
    constructor(name, needsBrush, needsCuddle){
        super(name);
        this._needsBrush = needsBrush;
        this._needsCuddle = needsCuddle;
    }
    get needsBrush(){
        return this._needsBrush;
    }
    get needsCuddle(){
        return this._needsCuddle;
    }
}

class Rabbit extends Animal {
    constructor(name, needsClean, needsRun){
        super(name);
        this._needsClean = needsClean;
        this._needsRun = needsRun;
    }
    get needsClean(){
        return this._needsClean;
    }
    get needsRun(){
        return this._needsRun;
    }
}

const poppy = new Dog(
    "Poppy",
    true,
    false,
);

poppy.happiness = 50;
poppy.hunger = 20;
poppy.thirst = 20;

poppy.play();
poppy.eat();
poppy.drink();
poppy.play();
poppy.play();
poppy.eat();
poppy.drink();
poppy.drink();

console.table(poppy); //stats
console.log(poppy.noplay());




//variables
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const choose = document.querySelector("#choose");
const dogImg = document.querySelector("#dogImg");
const catImg = document.querySelector("#catImg");
const rabImg = document.querySelector("#rabImg");
const petImg = document.querySelector(".petImg");

start.addEventListener("click", (event) => {
    choose.style.display = "block";
    start.style.display = "none";
})

choose.addEventListener("click", (event) => {
    petImg.style.display = "block";
    choose.style.display = "none";
})

// let petImg = document.getElementById("petImg").src = "./img/" + diceRoll + ".png";
// diceNum = document.querySelector("#diceImg");
// diceNum.style.display = "block"; 