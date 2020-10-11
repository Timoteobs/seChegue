import { Model } from "sequelize/types";

export default class User extends Model {
    ToModify(): any {
      throw new Error("Method not implemented.");
    }
    id!: number;
    name: string;
    userName: string;
    email: string;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
    bio: string;
    img: any[];

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