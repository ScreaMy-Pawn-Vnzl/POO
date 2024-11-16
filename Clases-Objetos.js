// Definición de la clase Persona
class Persona
{
    // Atributo privado
    #identificacion;
  
    // Constructor: inicializa los atributos de la clase
    constructor(nombre, edad, identificacion)
    {
        this.nombre = nombre; // Atributo publico
        this.edad = edad; // Atributo publico
        this.#identificacion = identificacion; // Atributo privado
    }
  
    // Metodo publico
    saludar()
    {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  
    // Metodo publico para mostrar la identificacion
    mostrarIdentificacion()
    {
        console.log(`Mi identificacion es ${this.#identificacion}.`);
    }
  
    // Metodo privado (solo accesible dentro de la clase)
    #metodoPrivado()
    {
        console.log('Este es un metodo privado.');
    }
  
    // Método publico que llama al metodo privado
    usarMetodoPrivado()
    {
        this.#metodoPrivado();
    }
}
  
// Creacion de un objeto de la clase Persona
const persona1 = new Persona('Juan', 30, '123456');
  
// Uso de los metodos publicos
persona1.saludar();
persona1.mostrarIdentificacion();
  
// Intentar acceder a un atributo privado directamente (causara un error)
// console.log(persona1.#identificacion); // Error: Propiedad privada
  
// Intentar acceder a un metodo privado directamente (causara un error)
// persona1.#metodoPrivado(); // Error: Metodo privado
  
// Uso de un metodo publico que internamente llama a un metodo privado
persona1.usarMetodoPrivado();