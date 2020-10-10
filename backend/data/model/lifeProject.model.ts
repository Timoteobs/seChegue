import { Model } from "sequelize/types";

export default class LifeProject extends Model {
    id!: number;
    wishes: string[];
    personalTraits: string[]; //qualidades,defeitos,qualidade que gostaria de ter
    checklistDay: string;
    bio: string;
    detailTargets: string[];
    actionPlan: string[];

    constructor() {
        super();
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

    setDetailTargets(detailTargets) {
        this.detailTargets = detailTargets;
    }

    setActionPlan(actionPlan) {
        this.actionPlan = actionPlan;
    }

    ToModify() {
        return this.toJSON();
    }
}