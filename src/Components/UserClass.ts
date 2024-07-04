export interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  export class UserClass {
    private user: IUser;
  
    constructor(id: number, name: string, email: string, age: number) {
      this.user = { id, name, email, age };
    }
  
    getUserDetails(): IUser {
      console.log(this.user);
      return this.user;
    }
  
    greetUser(userName: string): string {
      console.log(`Hello, ${userName}!`);
      return `Hello, ${userName}!`;
    }
  }
  