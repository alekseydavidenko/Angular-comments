import { Component, OnInit, DoCheck } from '@angular/core';
import { Comment, CommentService } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: "list-comment",
    templateUrl: "list-comment.commponent.html",
    styleUrls: ["list-comment.commponent.css"]
}) export class ListCommentComponent implements OnInit{

    comments: Comment[];
    errorMessage: string;

    constructor(
        private commentService: CommentService
    ){}

    ngOnInit(){
        this.getComments();
    };
    public refresh(){
        this.getComments();
    }

    private getComments() {
        this.commentService.getComments()
            .subscribe(
                comments => this.comments = comments,
                error => this.errorMessage = error
            );
    };
};