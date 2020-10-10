export default class User {
    id!: number;
    name: string;
    userName: string;
    wishes: string[];
    bio: string;
    img: any[];
    connections: string[];
    disconnect: string[];

    constructor() {}
    setName(name) {
        this.name = name;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    setWishes(wishes) {
        this.wishes = wishes;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setImg(img){
        this.img = img;
    }

    setConnections(connections) {
        this.connections = connections;
    }

    setDisconnect(disconnect){
        this.disconnect = disconnect;
    }
}