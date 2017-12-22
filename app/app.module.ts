import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { CommentModule } from "./comments/comment-module";
import { CommentService } from './shared/comment.service';

@NgModule({
    imports: [
        BrowserModule,
        CommentModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent],
    providers: [CommentService],
    bootstrap: [AppComponent]
})
export class AppModule { }