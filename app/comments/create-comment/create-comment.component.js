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
var forms_1 = require("@angular/forms");
var index_1 = require("../../shared/index");
var CreateCommentComponent = /** @class */ (function () {
    function CreateCommentComponent(commentService, fb) {
        this.commentService = commentService;
        this.fb = fb;
        this.comment = new index_1.Comment(null, null, null, null);
        this.formErrors = {
            "name": "",
            "message": ""
        };
        this.validationMessages = {
            "name": {
                "required": "Назовите себя"
            },
            "message": {
                "required": "Добавте свое сообщение"
            }
        };
    }
    CreateCommentComponent.prototype.ngOnInit = function () {
        this.BuildForm();
    };
    CreateCommentComponent.prototype.BuildForm = function () {
        var _this = this;
        this.createCommentForm = this.fb.group({
            "name": [this.comment.userName, [forms_1.Validators.required]],
            "message": [this.comment.comment, [forms_1.Validators.required]]
        });
        this.createCommentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    CreateCommentComponent.prototype.onValueChanged = function (data) {
        if (!this.createCommentForm)
            return;
        var form = this.createCommentForm;
        for (var item in this.formErrors) {
            this.formErrors[item] = "";
            var control = form.get(item);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[item];
                for (var key in control.errors) {
                    this.formErrors[item] += message[key] + " ";
                }
            }
        }
    };
    CreateCommentComponent.prototype.createComment = function (createCommentForm) {
        var _this = this;
        this.comment.userName = createCommentForm.value.name;
        this.comment.comment = createCommentForm.value.message;
        this.comment.date = new Date();
        this.commentService.addComment(this.comment)
            .subscribe(function () {
            _this.createCommentForm = _this.fb.group({
                name: ["", forms_1.Validators.required],
                message: ["", forms_1.Validators.required]
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateCommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "create-comment",
            templateUrl: "create-comment.component.html",
            styleUrls: ["create-comment.component.css"]
        }),
        __metadata("design:paramtypes", [index_1.CommentService,
            forms_1.FormBuilder])
    ], CreateCommentComponent);
    return CreateCommentComponent;
}());
exports.CreateCommentComponent = CreateCommentComponent;
//# sourceMappingURL=create-comment.component.js.map