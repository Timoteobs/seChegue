import { Op } from "sequelize/types";

export default class ConnectionList {
    static findOne: any;
    static findAll(arg0: { where: { name: { [Op.like]: string; }; }; }) {
      throw new Error('Method not implemented.');
    }
    connection: string[];
    disconnect: string[];
    

    constructor() {}
    setConnection(connection) {
        this.connection = connection;
    }

    setDisconnect(disconnect) {
        this.disconnect = disconnect;
    }
}