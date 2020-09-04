import UserModel from '../interfaces/UserModel';

export default class User implements UserModel {
    constructor(
        private fullName: string,
        private email: string,
        private age: number
    ) {}

    getFullName() {
        return this.fullName;
    }

    setFullName(val: string) {
        this.fullName = val;
    }

    getEmail() {
        return this.email;
    }

    setEmail(val: string) {
        this.email = val;
    }

    getAge() {
        return this.age;
    }

    setAge(val: number) {
        this.age = val;
    }

    user() {
        return {
            fullName: this.getFullName(),
            email: this.getEmail(),
            age: this.getAge()
        }
    }
}