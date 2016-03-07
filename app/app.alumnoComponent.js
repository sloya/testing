System.register(['angular2/core', './alumno'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, alumno_1;
    var AlumnoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alumno_1_1) {
                alumno_1 = alumno_1_1;
            }],
        execute: function() {
            AlumnoComponent = (function () {
                function AlumnoComponent() {
                    //la variable titulo no importa mucho
                    this.titulo = 'Calificaciones de los alumnos';
                    //Se crean algunos alumnos solamente como ejemplo
                    this.alumnos = [
                        new alumno_1.Alumno(11, "Angelica Azteca", 70.55),
                        new alumno_1.Alumno(12, "Ernesto Milpa", 99.45),
                        new alumno_1.Alumno(13, "Ermenegildo Sanchez", 60.00),
                        new alumno_1.Alumno(14, "Maria Pozos", 50.29),
                        new alumno_1.Alumno(15, "Jose Carlos Guadalupe", 100.00),
                        new alumno_1.Alumno(16, "Julia Rodriguez", 85.30)
                    ];
                    //La variable alumno lleva al alumno actualmente seleccionado en la lista de alumnos
                    this.alumno = this.alumnos[0];
                }
                //Cuando se elige otro alumno de la lista se cambia el alumno actualmente seleccionado
                AlumnoComponent.prototype.onSelect = function (alumno) {
                    this.alumno = alumno;
                };
                AlumnoComponent = __decorate([
                    core_1.Component({
                        selector: 'alumno',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Lista de Alumnos</h2>\n    <ul>\n      <li *ngFor=\"#alumno of alumnos\" (click)=\"onSelect(alumno)\">\n          <span>{{alumno.id}}</span> {{alumno.nombre}}\n      </li>\n    </ul>\n      <div *ngIf=\"alumno\">\n      <h2>Detalles {{alumno.nombre}} </h2>\n      <div><label>Id: </label>{{alumno.id}}</div>\n      <div><label>Calificacion: </label>{{alumno.getCalificacion()}}</div>\n      <div>\n        <label>Nombre: </label>\n        <input [(ngModel)]=\"alumno.nombre\" placeholder=\"nombre\">\n      </div>\n    </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlumnoComponent);
                return AlumnoComponent;
            }());
            exports_1("AlumnoComponent", AlumnoComponent);
        }
    }
});
//# sourceMappingURL=app.alumnoComponent.js.map