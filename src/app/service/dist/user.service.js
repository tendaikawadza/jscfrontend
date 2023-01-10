"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.host + "/user/list");
    };
    UserService.prototype.addUser = function (formData) {
        return this.http.post(this.host + "/user/add", formData);
    };
    UserService.prototype.updateProfileImage = function (formData) {
        return this.http.post(this.host + "/user/updateProfileImage", formData, { reportProgress: true,
            observe: 'events'
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http["delete"](this.host + "/user/delete/" + userId);
    };
    UserService.prototype.addUsersToLocalCache = function (users) {
        localStorage.setItem('users', JSON.stringify(users));
    };
    UserService.prototype.resetPassword = function (email) {
        return this.http.get(this.host + "/user/resetpassword/" + email);
    };
    UserService.prototype.getUsersFromLocalCache = function () {
        if (localStorage.getItem('users')) {
            return JSON.parse(localStorage.getItem('users') || "false");
        }
        return [];
    };
    UserService.prototype.createUserFormDate = function (loggedInUsername, user, profileImage) {
        var formData = new FormData();
        formData.append('currentUsername', loggedInUsername);
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('username', user.username);
        formData.append('email', user.email);
        formData.append('role', user.role);
        formData.append('profileImage', profileImage);
        formData.append('isActive', JSON.stringify(user.active));
        formData.append('isNonLocked', JSON.stringify(user.notLocked));
        return formData;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=user.service.js.map
