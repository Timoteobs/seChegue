import { Model } from "sequelize/types";

export default class User extends Model {
    id!: number;
    name: string;
    userName: string;
<<<<<<< HEAD
    email: string;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
    bio: string;
    img: any[];
=======
>>>>>>> cf7dc232384244cd1afbad04084cb364f4157bdb

    constructor() {
        super();
    }

    setName(name) {
        this.name = name;
    }

    setUserName(userName) {
        this.userName = userName;
    }

<<<<<<< HEAD
    setEmail(email) {
        this.email = email;
    }

    setWishes(wishes) {
        this.wishes = wishes;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setImg(img) {
        this.img = img;
=======
    ToModify() {
        return this.toJSON();
>>>>>>> cf7dc232384244cd1afbad04084cb364f4157bdb
    }
}