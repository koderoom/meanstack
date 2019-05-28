"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = __importDefault(require("./student"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        console.log("Hello ES6");
        var std = new student_1.default(1, 'paritosh');
        var name = std.getName();
        console.log(name);
    };
    return Main;
}());
Main.main();
//# sourceMappingURL=main.js.map