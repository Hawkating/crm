export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    city: string;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.city = obj ? obj.city : '';
    }
}