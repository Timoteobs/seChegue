<<<<<<< HEAD
import { Model } from "sequelize/types";
import Attributes from "../attributes";

export default class ConnectionList extends Model {

=======
import { Op } from "sequelize/types";

export default class ConnectionList {
    static findOne: any;
    static findAll(arg0: { where: { name: { [Op.like]: string; }; }; }) {
      throw new Error('Method not implemented.');
    }
>>>>>>> e406a1d2460c898ad0f335f646865f1e61f88e07
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