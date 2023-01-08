"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var notificaton_type_enum_1 = require("../enum/notificaton-type.enum");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.titleSubject = new rxjs_1.BehaviorSubject('Users');
        this.titleAction$ = this.titleSubject.asObservable();
        this.subscriptions = [];
    }
    UserComponent.prototype.changeTitle = function (title) {
        this.titleSubject.next(title);
    };
    UserComponent.prototype.getUsers = function (showNotification) {
        var _this = this;
        this.refreshing = true;
        this.subscriptions.push(this.userService.getUsers().subscribe(function (response) {
            _this.userService.addUsersToLocalCache(response);
            _this.users = response;
            _this.refreshing = false;
            if (showNotification) {
                _this.sendNotification(notificaton_type_enum_1.NotificationType.SUCCESS, '${response.legnth}user (s) loaded successfully');
            }
        }, function (errorResponse) {
            _this.sendNotification(notificaton_type_enum_1.NotificationType.ERROR, errorResponse.message);
        }));
    };
    UserComponent.prototype.onSelectUser = function (selectedUser) {
        var _a;
        this.selectedUser = selectedUser;
        (_a = document.getElementById('openUserInfor')) === null || _a === void 0 ? void 0 : _a.click;
    };
    UserComponent.prototype.onProfileImageChange = function (event) {
    };
    UserComponent.prototype.sendNotification = function (notificationType, message) {
        if (message) {
            this.notificationService.notify(notificationType, message);
        }
        else {
            this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
        }
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=user.component.js.map
