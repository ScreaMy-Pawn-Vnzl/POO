class Animal
{
    constructor(nombre, tipo)
    {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    describir()
    {
      console.log(`${this.nombre} es un ${this.tipo}`);
    }
}
  
class Perro extends Animal
{
    constructor(nombre, raza)
    {
      super(nombre, 'perro');
      this.raza = raza;
    }
  
    ladrar()
    {
      console.log('Guau! Guau!');
    }
}
  
const miPerro = new Perro('Firulais', 'Labrador');
miPerro.describir();
miPerro.ladrar();




//Antes de ES6
function Persona(nombre, edad)
{
    this.nombre = nombre;
    this.edad = edad;
}
  
Persona.prototype.saludar = function()
{
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
}

//Después de ES6
class Persona
{
    constructor(nombre, edad)
    {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar()
    {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}