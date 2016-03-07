import {Component} from 'angular2/core';
import {Alumno} from './alumno'

@Component({
    selector: 'alumno',
    template: `
    <h1>{{title}}</h1>
    <h2>Lista de Alumnos</h2>
    <ul>
      <li *ngFor="#alumno of alumnos" (click)="onSelect(alumno)">
          <span>{{alumno.id}}</span> {{alumno.nombre}}
      </li>
    </ul>
      <div *ngIf="alumno">
      <h2>Detalles {{alumno.nombre}} </h2>
      <div><label>Id: </label>{{alumno.id}}</div>
      <div><label>Calificacion: </label>{{alumno.getCalificacion()}}</div>
      <div>
        <label>Nombre: </label>
        <input [(ngModel)]="alumno.nombre" placeholder="nombre">
      </div>
    </div>

    `
})
export class AlumnoComponent{

  //la variable titulo no importa mucho
  public titulo = 'Calificaciones de los alumnos';
  //Se crean algunos alumnos solamente como ejemplo
  public alumnos = [
    new Alumno(11, "Angelica Azteca", 70.55),
    new Alumno(12, "Ernesto Milpa", 99.45),
    new Alumno(13, "Ermenegildo Sanchez", 60.00 ),
    new Alumno(14, "Maria Pozos", 50.29),
    new Alumno(15, "Jose Carlos Guadalupe", 100.00),
    new Alumno(16, "Julia Rodriguez", 85.30)

  ];
  //La variable alumno lleva al alumno actualmente seleccionado en la lista de alumnos
  alumno = this.alumnos[0];
  //Cuando se elige otro alumno de la lista se cambia el alumno actualmente seleccionado
  onSelect(alumno: Alumno){
    this.alumno = alumno;
  }
}
