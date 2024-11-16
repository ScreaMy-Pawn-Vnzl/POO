//Patrón Singleton
class Singleton
{
    constructor()
    {
        if(Singleton.instance)
        {
            return Singleton.instance;
        }
        this.data = "Datos únicos";
        Singleton.instance = this;
        return this;
    }
  
    getData()
    {
        return this.data;
    }
}
  
const instancia1 = new Singleton();
const instancia2 = new Singleton();
  
console.log(instancia1 === instancia2);
console.log(instancia1.getData());

//Patrón de Fábrica
class Coche
{
    constructor(marca, modelo)
    {
        this.marca = marca;
        this.modelo = modelo;
    }
  
    detalles()
    {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
}
  
class CocheFactory
{
    static crearCoche(tipo)
    {
      switch (tipo)
      {
        case 'deportivo':
          return new Coche('Ferrari', 'F8');
        case 'sedan':
          return new Coche('Toyota', 'Corolla');
        case 'suv':
          return new Coche('Ford', 'Explorer');
        default:
          throw new Error('Tipo de coche no reconocido');
      }
    }
}
  
const deportivo = CocheFactory.crearCoche('deportivo');
const sedan = CocheFactory.crearCoche('sedan');
const suv = CocheFactory.crearCoche('suv');
  
deportivo.detalles();
sedan.detalles();
suv.detalles();