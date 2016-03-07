System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alumno;
    return {
        setters:[],
        execute: function() {
            Alumno = (function () {
                function Alumno(id, nombre, calificacion) {
                    this.id = id;
                    this.nombre = nombre;
                    this.calificacion = calificacion;
                }
                Alumno.prototype.getCalificacion = function () {
                    return this.calificacion; //obtiene la calificacion como number
                };
                Alumno.prototype.setCalificacion = function (calificacion) {
                    this.calificacion = +calificacion; //setea la calificacion con un string, el signo + convierte de string a number
                };
                return Alumno;
            }());
            exports_1("Alumno", Alumno);
        }
    }
});
//# sourceMappingURL=alumno.js.map