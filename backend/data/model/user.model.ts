import { Model, DataTypes } from "sequelize/types";
import Attributes from "../attributes";
import { Sequelize } from 'sequelize';

let _instance: Sequelize;

export default class User extends Model {

    id!: number;
    name: string;
    userName: string;
    email: string;

    constructor(json?: any) {
        super();
        this.id = Attributes.ReturnIfValid(json.id);
        this.name = Attributes.ReturnIfValid(json.name);
        this.userName = Attributes.ReturnIfValid(json.userName);
        this.email = Attributes.ReturnIfValid(json.email);
    }

    ToModify(): any {
        return this.toJSON();
    }
}
