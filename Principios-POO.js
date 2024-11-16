//Abstraccion
class Coche
{
    constructor(marca, modelo, año)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
  
    detalles()
    {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}
  
const miCoche = new Coche('Toyota', 'Corolla', 2022);
miCoche.detalles();

//Encapsulamiento
class CuentaBancaria
{
    #saldo = 0;
  
    depositar(cantidad)
    {
        if(cantidad > 0)
        {
            this.#saldo += cantidad;
            console.log(`Depositaste $${cantidad}. Tu nuevo saldo es $${this.#saldo}.`);
        }
        else
        {
            console.log('Cantidad inválida.');
        }
    }
  
    retirar(cantidad)
    {
        if(cantidad > 0 && cantidad <= this.#saldo)
        {
            this.#saldo -= cantidad;
            console.log(`Retiraste $${cantidad}. Tu nuevo saldo es $${this.#saldo}.`);
        }
        else
        {
            console.log('Cantidad inválida o insuficiente.');
        }
    }
  
    verSaldo()
    {
        console.log(`Tu saldo es $${this.#saldo}.`);
    }
}
  
const cuenta = new CuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(50);
cuenta.verSaldo();

//Herencia
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

//Polimorfismo
class Ave
{
    hacerSonido()
    {
        console.log('Sonido de ave');
    }
}
  
class Pato extends Ave
{
    hacerSonido()
    {
        console.log('Cuac Cuac');
    }
}
  
class Paloma extends Ave
{
    hacerSonido()
    {
        console.log('Coo Coo');
    }
}

const animales = [new Pato(), new Paloma()];
animales.forEach(animal => animal.hacerSonido());