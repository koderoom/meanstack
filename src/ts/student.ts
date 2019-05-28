export default class Student {
    public id: string;
    public name: string;

    public constructor(id:string, name: string) {
        this.id = id;
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

// export default Student;