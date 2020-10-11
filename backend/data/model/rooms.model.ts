import { Model, Op } from "sequelize/types";
import Attributes from "../attributes";

export default class Rooms extends Model {

  id!: number;
  name: string;
  type: string[];
  members: string[];
  publications: string[];
  comments: string[];

  constructor(json?: any) {
    super();
    this.id = Attributes.ReturnIfValid(json.id);
    this.name = Attributes.ReturnIfValid(json.name);
    this.type = Attributes.ReturnIfValid(json.type);
    this.members = Attributes.ReturnIfValid(json.members);
    this.publications = Attributes.ReturnIfValid(json.publications);
    this.comments = Attributes.ReturnIfValid(json.comments);
  }

  ToModify() {
    return this.toJSON();
  }

  static create(rooms: typeof Rooms, arg1: { transaction: any; }) {
    throw new Error('Method not implemented.');
  }
  static findOne(arg0: { where: { email: { [Op.eq]: string; }; }; }) {
    throw new Error('Method not implemented.');
  }
  static findAll(arg0: { where: { name: { [Op.like]: string; }; }; }) {
    throw new Error('Method not implemented.');
  }

}