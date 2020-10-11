import { Model } from "sequelize/types";
import Attributes from "../attributes";

export default class ConnectionList extends Model {

    connection: string[];
    disconnect: string[];

    constructor(json?: any) {
        super();
        this.connection = Attributes.ReturnIfValid(json.connection);
        this.disconnect = Attributes.ReturnIfValid(json.disconnect);
    }

    ToModify(): any {
        return this.toJSON();
    }
}