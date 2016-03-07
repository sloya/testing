import {Alumno} from '../alumno';
//Todas las pruebas se agregan dentro del metodo describe.
describe('Evalua clase alumno.ts parte I.', function() {
  var alumnoGeneral: Alumno; //tambien se pueden crear variables globales que se ocupen en todas las pruebas

  //Cada prueba se pone en un metodo it.
  it('Prueba 1.1 Se comprueban calificaciones negativas.', function() {
    var alumno = new Alumno(18, "Angel Jimenez", 0);
    alumno.setCalificacion('-12.5');
    expect(alumno.getCalificacion()).toBe(0);
  });

  it('Prueba 1.2 Se comprueban calificaciones superiores al 100.00.', function() {
    var alumno =   new Alumno(17, "Poncho Hernandez", 100.00);
    alumno.setCalificacion('100.20');
    expect(alumno.getCalificacion()).toEqual(100);
  });

  it('Prueba 1.3 Se comprueban calificaciones con decimales.', function() {
    var alumnoGeneral =   new Alumno(20, "Poncho Hernandez", 0);
    alumnoGeneral.setCalificacion('85.43');
    expect(alumnoGeneral.getCalificacion()).toEqual(85.43);
  });

  it('Prueba 1.4 Se comprueban nombre e id del alumno', function(){
    var alumno = new Alumno(34, 'Juan Contreras', 0);

    //Se pueden poner multiples expects dentro de un metodo it.
    expect(alumno.nombre).toBe('Juan Contreras');
    expect(alumno.id).toEqual(34);
  });

});

//Es posible poner mas de un describe para agrupar pruebas relacionadas y mejorar la claridad de las pruebas
describe('Evalua clase alumno.ts parte II. ', function() {

it('Prueba 2.1 Se checa el nombre del alumno', function(){
  var alumno = new Alumno(45, 'John Cooper', 56.44);
  expect(alumno.nombre).toMatch('Co'); //toMatch verifica si el string esta contenido o no
  expect(alumno.nombre).toMatch(/Co/);//Hace lo mismo
});

it('Prueba 2.2 Se checa un valor boolean', function(){
  var A : boolean = true;
  var B : boolean = true;
  expect(A).toBe(B); //Se utiliza toBe para verificar un valor boleano

  var B = false;
  expect(A).not.toBe(B); //Se utiliza not para verificar el inverso de la expresion
});

it('Prueba 2.3 Se checa la estructura igual entre alumnos', function(){
  var alumno1 = new Alumno(45, 'Juan', 25);
  var alumno2 = new Alumno(45, 'Juan', 25);
  var alumno3 = new Alumno(45, 'Juan', 23)
  expect(alumno1).toEqual(alumno2); //Esta prueba pasa por que tienen la misma estructura interna, aunque no son el mismo objeto
  expect(alumno1).toEqual(alumno3); //Esta prueba no pasa porque no tienen la misma estructura interna
});

it('Prueba 2.3 Se checa si tienen la misma referencia', function(){
  var alumno1 = new Alumno(55, 'Poncho', 70);
  var alumno2 = new Alumno(55, 'Poncho', 70);
  var alumno3 = alumno1;
  expect(alumno1).toBe(alumno2); //Esta prueba no pasa porque no son el mismo objeto o no tienen la misma referencia
  expect(alumno1).toBe(alumno3); //Esta prueba si pasa porque si son el mismo objeto o tienen la misma referencia
});

it('Prueba 2.4 Se checa si la variable esta sin definir', function(){
  var alumno : Alumno;
  expect(alumno).toBeDefined(); //Esta prueba lanza error porque alumno no esta definido
  expect(alumno).toBeUndefined(); //Esta prueba pasa porque no debe estar definida la variable
});

it('Prueba 2.5 Se checa si la variable es truthy', function(){
  var dato: string;

  //Truthy evalua si una variable esta definida, no es null y tampoco es un string vacio
  //Falsy es lo opuesto a Truthy

  expect(dato).toBeTruthy(); //No pasa, la variable es undefined
  expect(dato).toBeFalsy(); //Si pasa, la variable es undefined

  dato = null;

  expect(dato).toBeTruthy(); //No pasa, la variable es null
  expect(dato).toBeFalsy(); //Si pasa, la variable es null

  dato = "";

  expect(dato).toBeTruthy(); //No pasa, la variable es un empty string
  expect(dato).toBeFalsy(); //Si pasa, la variable es un empty string

  dato = "hola";
  expect(dato).toBeTruthy(); //Si pasa, la variable no es empty string y esta definida
  expect(dato).toBeFalsy(); //No pasa, la variable no es empty string y esta definida

});

it('Prueba 2.6 Se checa si la variable numerica es truthy', function(){
  var numero : number;
  expect(numero).toBeTruthy(); //No pasa, la variable es undefined
  expect(numero).toBeFalsy(); //Si pasa, la variable es undefined
  numero = 23;
  expect(numero).toBeTruthy(); //Si pasa, la variable tiene valor
  expect(numero).toBeFalsy(); //No pasa, la variable si tiene valor
});

it('Prueba 2.7 Se checa si la variable es truthy', function(){
  var alumno: Alumno;

  expect(alumno).toBeTruthy(); //No pasa, es undefined
  expect(alumno).toBeFalsy(); //Si pasa, es undefined

  alumno = new Alumno(12, 'Pedro', 66.6);

  expect(alumno).toBeTruthy(); // Si pasa, la variable esta definida
  expect(alumno).toBeFalsy(); //No pasa, la variable esta definida

});

it('Prueba 2.8 Se checa si la variable es null', function(){
  var alumno: Alumno = null;

  expect(alumno).toBeNull(); //Si pasa, la variable es null
  expect(alumno).not.toBeNull(); //No pasa, la variable es null

  alumno = new Alumno(44, "Enrique", 78);
  expect(alumno).toBeNull(); //No pasa, la variable esta definida
  expect(alumno).not.toBeNull(); //No pasa, la variable no es null
});

it('Prueba 2.9 Se checa si el array contiene', function(){
  var a = ["foo", "bar", "baz"];

  expect(a).toContain("bar"); //Si pasa, el array si lo contiene
  expect(a).not.toContain("vas"); //Si pasa, el array no contiene el elemento

});

});

describe('Evalua clase alumno.ts parte III', function(){
var alumnoGeneral : Alumno;

beforeEach(function(){ //beforeEach se ejecuta antes de cada uno de los metodos it

});
afterEach(function(){ //afterEach se ejecuta despues de cada uno de los metodos it
//  alumnoGeneral = undefined;
});

beforeAll(function(){ //beforeAll se ejecuta antes de TODOS los metodos it
  alumnoGeneral = new Alumno(12, "General", 44.5);
});

afterAll(function(){  //afterALl se ejecuta despues de TODOS los metodos it

});

it('Prueba 3.0 Se checa Before All', function(){

  expect(alumnoGeneral.nombre).toBe('Genera');

});

  it('Prueba 3.1 Se checa si es mayor, menor o cercano', function(){
    var pi = 3.14155926;

    expect(pi).toBeLessThan(3.2); //Si pasa, es menor que 3.2
    expect(pi).toBeGreaterThan(2.3); //Si pasa, es mayor que 2.3
    expect(pi).toBeCloseTo(3.14,2); //Si pasa, el numero es igual hasta los 2 decimales
    expect(pi).toBeCloseTo(3.14,3); //No pasa, el numero no es igual hasta los 3 decimales
  });
});


describe('Evalua clase alumno.ts parte IV', function(){

  describe('Seccion A', function(){ //Es posible anidar un describe dentro de otro

    it('Se anida un describe', function(){
      var x: number = 3;
      expect(x).toBe(2);
    });
  });

describe('Evalua clase alumno.ts parte V', function(){

  //Para definir una prueba como pendiente se cambia el metodo it por xit
  xit('Prueba 5.1', function(){ //Esta prueba deberia fallar, pero se ha definido como pendiente
    var y: number = 4;
    expect(y).toBe(5);
  });

  it('Prueba 5.2 que todavia no esta terminada'); //Se puede usar it sin cuerpo para dejar la prueba como pendiente

 it('Prueba 5.3', function(){ //Se puede hacer pendiente una prueba agregando dentro el metodo pending()
   var z: number = 4;
   expect(z).toBe(5);
   pending('Esta prueba esta pendiente'); //Agregando pending queda pendiente, este mensaje aparece en Spec List
 });

});

});
