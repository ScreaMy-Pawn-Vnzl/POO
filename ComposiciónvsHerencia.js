//Herencia
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
}

// Subclase Perro que hereda de Animal
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
}
  
// Subclase Gato que hereda de Animal
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
}
  
// Instancias de Perro y Gato
const miPerro = new Perro('Firulais', 'Labrador');
const miGato = new Gato('Mishifu', 'Blanco');
  
miPerro.hacerSonido();
miGato.hacerSonido();

//Composición
class HacerSonido
{
    constructor(sonido)
    {
        this.sonido = sonido;
    }
  
    emitirSonido()
    {
        console.log(this.sonido);
    }
}
  
// Clase Perro que usa composición
class Perro
{
    constructor(nombre, raza)
    {
        this.nombre = nombre;
        this.raza = raza;
        this.sonido = new HacerSonido('Guau! Guau!');
    }
  
    hacerSonido()
    {
        this.sonido.emitirSonido();
    }
}
  
// Clase Gato que usa composición
class Gato
{
    constructor(nombre, color)
    {
        this.nombre = nombre;
        this.color = color;
        this.sonido = new HacerSonido('Miau! Miau!');
    }
  
    hacerSonido()
    {
        this.sonido.emitirSonido();
    }
}
  
// Instancias de Perro y Gato
const miPerroComp = new Perro('Firulais', 'Labrador');
const miGatoComp = new Gato('Mishifu', 'Blanco');
  
miPerroComp.hacerSonido();
miGatoComp.hacerSonido();


//Analisis
//Herencia:
// La subclase (Gato, Perro) adopta características y procedimientos de la superclase (Animal).
// Más apropiada cuando existe una relación evidente de jerarquía.

//Composición:
// Objetos (Perro, Gato) poseen fragmentos de otros objetos (HacerSonido).
// Más adaptable y reutilizable, dado que se puede fusionar diversas conductas sin la necesidad de establecer una jerarquía estricta.