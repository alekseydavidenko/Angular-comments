"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./comments/index");
exports.routes = [
    {
        path: "",
        redirectTo: "comment",
        pathMatch: "full"
    },
    {
        path: "comment",
        component: index_1.HostCommentComponent
    }
];
//# sourceMappingURL=app.routes.js.map