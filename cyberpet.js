class Pet {
    constructor(name){
        this.name = name;
        this.happiness = 0;
        this.hunger = 0;
        this.thirst = 0;
    }

    play() {
        console.log(this)
        if (this.happiness === 0) {
            console.log(`${this.name}, is bored! ${this.name} wants to play`);
            this.happiness++;
        } else
            console.log(`${this.name}, is happy!`);
    }
    
    feed() {
        console.log(this)
        if (this.hunger === 0) {
            console.log(`${this.name} is hungry ${this.name} needs to eat!`);
            this.hunger++;
        } else  
            console.log(`${this.name} is full!`);
    }
    
    drink() {
        console.log(this)
        if (this.thirst === 0) {
            console.log(`${this.name} is thirsty ${this.name} needs a drink!`);
            this.thirst++;
        } else
            console.log(`${this.name} is full!`);
    }
}
    // get name(){
    //     return this._name;
    // }
    // get play(){
    //     return this._play;
    // }
    // get hunger(){
    //     return this._hunger;
    // }
    // get thirst(){
    //     return this._thirst;
    // }
    // eat(){
    //     return this._hunger--;
    // }
    // drink(){
    //     return this._thirst--; 
    // }
    // play(){
    //     return this._happiness++; 
    // }
    // noplay(){
    //     return (`${this.name} is bored!`);
    // }
    // wantDrink(){
    //     return (`${this.name} wants a drink!`);
    // }
    // wantFood(){
    //     return (`${this.name} wants feeding!`);
    // }


class Dog extends Pet {
    constructor(name, walk = 50){
        super(name);
        this.walk = walk;
    }
    get needsWalk(){
        return !this.happiness
    }
    get needsBath(){
        return !this.walk
    }
}

class Cat extends Pet {
    constructor(name, needsBrush, needsCuddle){
        super(name);
        this.needsBrush = needsBrush;
        this.needsCuddle = needsCuddle;
    }
    get needsBrush(){
        return this.needsBrush;
    }
    get needsCuddle(){
        return this.needsCuddle;
    }
}

class Rabbit extends Pet {
    constructor(name, needsClean, needsRun){
        super(name);
        this.needsClean = needsClean;
        this.needsRun = needsRun;
    }
    get needsClean(){
        return this.needsClean;
    }
    get needsRun(){
        return this.needsRun;
    }
}
 
