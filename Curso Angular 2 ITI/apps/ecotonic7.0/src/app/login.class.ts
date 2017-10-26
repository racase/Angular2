export class Login {
    username: string;
    password: string;
    remember: boolean;

    constructor() {
        this.username = "";
        this.password = "";
        this.remember = true;
    }
}
