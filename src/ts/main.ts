import Student from './student';

class Main {
    static main(): void {
        console.log("Hello Type Script");

        
        let student: Student;
        student = new Student('1', 'cdac');
        
        let name = student.getName();

        console.log(name);
    }
}

Main.main();