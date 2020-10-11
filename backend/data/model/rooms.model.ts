import { Op } from "sequelize/types";

export default class Rooms {
    static create(rooms: typeof Rooms, arg1: { transaction: any; }) {
      throw new Error('Method not implemented.');
    }
    static findOne(arg0: { where: { email: { [Op.eq]: string; }; }; }) {
      throw new Error('Method not implemented.');
    }
    static findAll(arg0: { where: { name: { [Op.like]: string; }; }; }) {
      throw new Error('Method not implemented.');
    }
    id!: number;
    name: string;
    type: string[];
    members:string[];
    publications: string[];
    comments: string[];


    constructor() {}
    setName(name) {
        this.name = name;
    }

    setType(type) {
        this.type = type;
    }

    setMembers(members) {
        this.members = members;
    }

    setPublications(publications) {
        this.publications = publications;
    }

    setComments(comments) {
        this.comments = comments;
    }
}