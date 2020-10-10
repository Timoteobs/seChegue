export default class ConnectionList {
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