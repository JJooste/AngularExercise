export class Authentication {
    public data: Token;
    public message: string;
    public success: boolean;
}

export class Token {
    public token: string;
    public userName: string;
}

export class Register {
    public userName: string;
    public password: string;
    public confirmPassword: string;
}

export class Login {
    public userName: string;
    public password: string;
}

export class User {
    public userName: string;
}
