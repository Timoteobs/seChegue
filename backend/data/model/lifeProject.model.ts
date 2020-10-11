import { Model } from "sequelize/types";
import Attributes from "../attributes";

export default class LifeProject extends Model {
    id!: number;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
    bio: string;
    detailTargets: string[];
    actionPlan: string[];

    constructor(json?: any) {
        super();
        this.id = Attributes.ReturnIfValid(json.id);
        this.wishes = Attributes.ReturnIfValid(json.wishes);
        this.personalTraits = Attributes.ReturnIfValid(json.personalTraits);
        this.checklistDay = Attributes.ReturnIfValid(json.checklistDay);
        this.bio = Attributes.ReturnIfValid(json.bio);
        this.detailTargets = Attributes.ReturnIfValid(json.detailTargets);
        this.actionPlan = Attributes.ReturnIfValid(json.actionPlan);
    }

    ToModify() {
        return this.toJSON();
    }
}