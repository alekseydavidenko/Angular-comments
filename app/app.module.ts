import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { CommentModule } from "./comments/comment-module";

@NgModule({
    imports: [
        BrowserModule,
        CommentModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }