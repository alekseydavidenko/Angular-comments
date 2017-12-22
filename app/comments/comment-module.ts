import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { 
    HostCommentComponent, 
    ListCommentComponent, 
    CreateCommentComponent 
} from "./index";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        HostCommentComponent, 
        ListCommentComponent, 
        CreateCommentComponent
    ]
}) export class CommentModule {

}