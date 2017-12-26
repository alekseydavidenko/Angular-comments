import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Comment } from './comment';

import { Observable } from "rxjs/Observable";

@Injectable()
export class CommentService {
    private url: string = "http://localhost:2403/comments";

    constructor(
        private http: Http
    ){}

    public addComment(comment: Comment): Observable<Comment> {
        return this.http.post(this.url, comment)
            .catch(this.handleError);
    }

    private handleError (error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorDate = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorDate}`;
        } else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);

        return Observable.throw(message);
    }
}

