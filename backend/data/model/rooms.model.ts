export default class Rooms {
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