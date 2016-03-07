System.register(['.././app.alumnoComponent', '../alumno'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_alumnoComponent_1, alumno_1;
    return {
        setters:[
            function (app_alumnoComponent_1_1) {
                app_alumnoComponent_1 = app_alumnoComponent_1_1;
            },
            function (alumno_1_1) {
                alumno_1 = alumno_1_1;
            }],
        execute: function() {
            describe('Pruebas alumno Component.', function () {
                it('Prueba 1. Se comprueban nombre e id del alumno', function () {
                    var alumno = new app_alumnoComponent_1.AlumnoComponent();
                    expect(alumno.titulo).toBe('Calificaciones de los ');
                });
                it('Prueba 2. Se comprueban alumnos de component', function () {
                    var alumno = new app_alumnoComponent_1.AlumnoComponent();
                    alumno.alumnos = [
                        new alumno_1.Alumno(11, "Angelica Milpa", 70.55),
                        new alumno_1.Alumno(12, "Ernesto Real", 99.45)
                    ];
                    expect(alumno.alumnos[0].nombre).toBe('Angelica Aztec');
                });
                it('Prueba 3. Se comprueban alumno this', function () {
                    var alumno = new app_alumnoComponent_1.AlumnoComponent();
                    alumno.alumno = null;
                    expect(alumno.alumno).toBeNull();
                    alumno.onSelect(new alumno_1.Alumno(15, 'Mario Gonzalez', 77.5));
                    expect(alumno.alumno.nombre).toBe('Mario Gonzale');
                });
            });
        }
    }
});
//# sourceMappingURL=alumnoComponent.spec.js.map