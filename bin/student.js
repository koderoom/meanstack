"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    return Student;
}());
var StarStudent = /** @class */ (function () {
    function StarStudent() {
    }
    return StarStudent;
}());
exports.StarStudent = StarStudent;
var SleepingStudent = /** @class */ (function () {
    function SleepingStudent() {
    }
    return SleepingStudent;
}());
exports.SleepingStudent = SleepingStudent;
exports.default = Student;
//# sourceMappingURL=student.js.map