import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { 
    HostCommentComponent, 
    ListCommentComponent, 
    CreateCommentComponent 
} from "./index";

@NgModule({
    imports: [CommonModule],
    declarations: [
        HostCommentComponent, 
        ListCommentComponent, 
        CreateCommentComponent
    ]
}) export class CommentModule {

}