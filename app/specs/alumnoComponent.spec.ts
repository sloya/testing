import {AlumnoComponent} from '.././app.alumnoComponent'
import {Alumno} from '../alumno';

describe('Pruebas alumno Component.', function(){

  it('Prueba 1. Se comprueban nombre e id del alumno', function(){
    var alumno : AlumnoComponent = new AlumnoComponent();
    expect(alumno.titulo).toBe('Calificaciones de los ');
  });

  it('Prueba 2. Se comprueban alumnos de component', function(){
    var alumno : AlumnoComponent = new AlumnoComponent();

    alumno.alumnos = [
      new Alumno(11, "Angelica Milpa", 70.55),
      new Alumno(12, "Ernesto Real", 99.45)
    ];

    expect(alumno.alumnos[0].nombre).toBe('Angelica Aztec');
  });

  it('Prueba 3. Se comprueban alumno this', function(){
    var alumno : AlumnoComponent = new AlumnoComponent();
    alumno.alumno = null;
    expect(alumno.alumno).toBeNull();

    alumno.onSelect(new Alumno(15, 'Mario Gonzalez', 77.5));
    expect(alumno.alumno.nombre).toBe('Mario Gonzale');
  });

});
