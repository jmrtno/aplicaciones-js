// class Animal {
//     static despedirse() {
//         return 'Adios';
//     }

//     #miSecreto = 'me gusta Internet Explorer'

//     #decirSecreto() {
//         return this.#miSecreto;
//     }

//     constructor(n = 'Lucas') {
//         this.nombre = n;
//     }

//     hablar(){
//         return 'Cuak';
//     }

//     quienSoy() {
//         return `Hola soy ${this.nombre}`
//     }

//     decirSacrilegio(){
//         return this.#decirSecreto();
//     }

// }


// const pato = new Animal();
// console.log(pato.quienSoy());
// console.log(pato.hablar());


// const donald = new Animal('Donald')
// console.log(donald.quienSoy());
// console.log(Animal.despedirse());

// const patitoFeo = new Animal();
// console.log(`Hola soy Patito Feo y ${patitoFeo.decirSacrilegio()}`);



// class Clase {

//     role = 'Teacher';

//     constructor() {
//         this.name = 'Javi';
//         console.log(`Constructor: ${this.name}`);
//     }

//     metodo() {
//         console.log(`Método: ${this.name}`);
//     }
// }

// const c = new Clase();

// console.log(c.name);
// c.metodo();
// console.log(c.role);

// let n = 'perro';

// class Animal2 {
    
//     constructor(n){
//         this.nombre = n;
//     }

//     hablar() {
//         return 'guau-guau';
//     }

//     quienSoy() {
//         return `Hola me llamo ${this.nombre} y hago ${this.hablar()} porque soy un ${n}`
//     }
// }

// const perro = new Animal2('Coco');
// console.log(perro.quienSoy());


let n = 'rata'

class Animal3 {
    
    constructor(n){
        this._nombre = n;
    }

    get nombre() {
        return `Sr. ${this._nombre}`
    }

    set nombre(n){
        this._nombre = n.trim();
    }

    hablar() {
        return 'squeze-squeze';
    }

    quienSoy() {
        return `Hola me llamo ${this.nombre} y hago ${this.hablar()} porque soy una ${n}`
    }
}

const rata = new Animal3('Armin');
console.log(rata.quienSoy());

rata.nombre = 'Negrito'
console.log(rata.quienSoy());