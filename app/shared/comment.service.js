"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var comment_1 = require("./comment");
var Observable_1 = require("rxjs/Observable");
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.url = "http://localhost:2403/comments";
    }
    CommentService.prototype.getComments = function () {
        var comments = this.http.get(this.url)
            .map(this.extractComments)
            .catch(this.handleError);
        return comments;
    };
    ;
    CommentService.prototype.addComment = function (comment) {
        return this.http.post(this.url, comment)
            .catch(this.handleError);
    };
    ;
    CommentService.prototype.extractComments = function (response) {
        var result = response.json();
        var comments = [];
        for (var i = 0, len = result.length; i < len; i += 1) {
            comments.push(new comment_1.Comment(result[i].id, result[i].userName, result[i].comment, result[i].date));
        }
        ;
        return comments.reverse();
    };
    ;
    CommentService.prototype.handleError = function (error, cought) {
        var message = "";
        if (error instanceof http_1.Response) {
            var errorDate = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorDate;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable_1.Observable.throw(message);
    };
    ;
    CommentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
;
//# sourceMappingURL=comment.service.js.map