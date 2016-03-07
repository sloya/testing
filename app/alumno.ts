 export class Alumno {
  constructor(id: number, nombre: string, calificacion : number){
    this.id = id;
    this.nombre = nombre;
    this.calificacion = calificacion;
  }
public id: number;
public nombre: string;
private calificacion: number;

public getCalificacion(): number{
  return this.calificacion; //obtiene la calificacion como number
}

public setCalificacion(calificacion: string) {
  this.calificacion = +calificacion; //setea la calificacion con un string, el signo + convierte de string a number
}


}
