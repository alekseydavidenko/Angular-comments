import { Data } from "@angular/router/src/config";

export class Comment {
    id: string;
    userName: string;
    comment: string;
    date: Date;

    constructor(id, userName, comment, date) {
        this.id = id;
        this.userName = userName;
        this.comment = comment;
        this.date = date;
    }
}