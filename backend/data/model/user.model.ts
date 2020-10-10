import { Model } from "sequelize/types";

export default class User extends Model {
    id!: number;
    name: string;
    userName: string;
    wishes: string[];
    bio: string;
    img: any[];

    constructor() {
        super();
    }

    ToModify() {
        return this.toJSON();
    }


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

    setImg(img) {
        this.img = img;
    }
}