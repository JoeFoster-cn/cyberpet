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
    constructor(name, walk = 50){
        super(name);
        this._walk = walk;
    }
    get needsWalk(){
        return !this._happiness
    }
    get needsBath(){
        return !this._walk
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