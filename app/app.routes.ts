import { Routes } from "@angular/router";
import { HostCommentComponent } from "./comments/index";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "comment",
        pathMatch: "full"
    },
    {
        path: "comment",
        component: HostCommentComponent
    }
];