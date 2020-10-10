import { Model } from "sequelize/types";

export default class User extends Model {
    id!: number;
    name: string;
    userName: string;

    constructor() {
        super();
    }

    setName(name) {
        this.name = name;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    ToModify() {
        return this.toJSON();
    }
}