class Student {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

class StarStudent {}

class SleepingStudent{}

export default Student;
export {StarStudent, SleepingStudent};




