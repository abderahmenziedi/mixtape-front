export class CreateUserRequest {
    constructor(
      public email: string,
      public password: string,
      public rePassword: string,
      public fullName: string
    ) {}
  }
  