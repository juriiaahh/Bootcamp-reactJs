//Polymorphism = perubahan bentuk 

class People{
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hello my name is ${this.name}`
    }
}

class Person extends People {
    constructor(name){
        super(name)
    }
    // greet(){
    //     return `Hallo saya ${this.name}`
    // }
}

const juju = new Person('juju');
console.log(juju.greet());

