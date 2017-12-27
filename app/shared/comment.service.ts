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

    public getComments(): Observable<Comment[]> {
        let comments = this.http.get(this.url)
            .map(this.extractComments)
            .catch(this.handleError);
        return comments;
    };

    public addComment(comment: Comment): Observable<Comment> {
        return this.http.post(this.url, comment)
            .catch(this.handleError);
    };
    private extractComments(response: Response){
        let result = response.json();
        let comments: Comment[] = [];

        for (let i = 0, len = result.length; i < len; i += 1) {
            comments.push(new Comment(
                result[i].id, 
                result[i].userName, 
                result[i].comment, 
                result[i].date
            ));            
        };
        return comments.reverse();
    };
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
    };
};

