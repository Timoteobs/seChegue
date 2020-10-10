import { Model } from "sequelize/types";

export default class User extends Model {
    id!: number;
    name: string;
    userName: string;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
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

    setPersonalTraits(personalTraits) {
        this.personalTraits = personalTraits;
    }

    setChecklistDay(checklistDay) {
        this.checklistDay = checklistDay;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setImg(img) {
        this.img = img;
    }
}