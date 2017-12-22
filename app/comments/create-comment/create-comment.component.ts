import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Comment, CommentService } from "../../shared/index";


@Component({
    moduleId: module.id,
    selector: "create-comment",
    templateUrl: "create-comment.component.html",
    styleUrls: ["create-comment.component.css"]
}) export class CreateCommentComponent implements OnInit {
    createCommentForm: FormGroup;
    errorMessage: string;
    comment: Comment = new Comment(null, null, null, null);

    formErrors = {
        "name": "",
        "message": ""
    };
    validationMessages = {
        "name": {
            "required": "Назовите себя"
        },
        "message": {
            "required": "Добавте свое сообщение"
        } 
    };
    
    constructor(
        private commentService: CommentService,
        private fb: FormBuilder
    ) {}

    ngOnInit(){
        this.BuildForm();
    }
    BuildForm(){
        this.createCommentForm = this.fb.group({
            "name": [this.comment.userName, [Validators.required]],
            "message": [this.comment.comment, [Validators.required]]
        });

        this.createCommentForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }
    onValueChanged(data?: any){
        if(!this.createCommentForm) return;

        let form = this.createCommentForm;

        for (let item in this.formErrors){
            this.formErrors[item] = "";

            let control = form.get(item);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[item];

                for (let key in control.errors) {
                    this.formErrors[item] += message[key] + " ";
                }
            }
        }
    }



    createComment(){

    }
}