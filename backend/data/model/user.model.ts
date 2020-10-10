export default class User {
    id!: number;
    name: string;
    userName: string;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
    bio: string;
    img: any[];

    constructor() { }
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