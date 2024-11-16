// Definicion de la clase Animal
class Animal
{
    constructor(nombre)
    {
        this.nombre = nombre;
    }
  
    hacerSonido()
    {
        console.log('Sonido de animal');
    }
  
    describir()
    {
        console.log(`Este es ${this.nombre}`);
    }
}
  
// Definicion de la subclase Perro que hereda de Animal
class Perro extends Animal
{
    constructor(nombre, raza)
    {
        super(nombre);
        this.raza = raza;
    }
  
    hacerSonido()
    {
        console.log('Guau! Guau!');
    }
  
    describir()
    {
        super.describir();
        console.log(`Es un perro de la raza ${this.raza}`);
    }
}
  
// Definición de la subclase Gato que hereda de Animal
class Gato extends Animal
{
    constructor(nombre, color)
    {
        super(nombre);
        this.color = color;
    }
  
    hacerSonido()
    {
        console.log('Miau! Miau!');
    }
  
    describir()
    {
        super.describir();
        console.log(`Es un gato de color ${this.color}`);
    }
}
  
// Creacion de instancias de Perro y Gato
const miPerro = new Perro('Firulais', 'Labrador');
const miGato = new Gato('Mishifu', 'Blanco');
  
// Uso de los metodos
miPerro.hacerSonido();
miPerro.describir();
  
miGato.hacerSonido();
miGato.describir();
  
// Ejemplo de polimorfismo
const animales = [miPerro, miGato];
  
animales.forEach(animal => {
    animal.hacerSonido();
    animal.describir();
});  