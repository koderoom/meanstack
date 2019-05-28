import Student from "./student";

// import which is not default
import {} from './student';

class Main {
    static main() {
        console.log("Hello ES6");

        let std = new Student(1, 'paritosh');
        let name = std.getName();

        console.log(name);
    }
}

Main.main();