import { Model } from "sequelize/types";

export default class User extends Model {
    ToModify(): any {
      throw new Error("Method not implemented.");
    }
    id!: number;
    name: string;
    userName: string;
    email: string;

    constructor() {
        super();
    }

    setName(name) {
        this.name = name;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    setEmail(email) {
        this.email = email;
    }
}