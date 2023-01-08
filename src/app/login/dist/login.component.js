"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService, notificationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.subscriptions = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.isUserLoggedIn()) {
            if (this.authenticationService.isUserLoggedIn()) {
                this.router.navigateByUrl('/user/management');
            }
            else {
                this.router.navigateByUrl('/login');
            }
        }
    };
    LoginComponent.prototype.onLogin = function (user) {
        var _this = this;
        this.showLoading = true;
        console.log(user);
        this.subscriptions.push(this.authenticationService.login(user).subscribe(function (response) {
            var token = response.headers.get('Jwt_Token');
            _this.authenticationService.saveToken(token);
            _this.authenticationService.addUserToLocalCache(response.body);
            _this.router.navigateByUrl('/user');
        }));
    };
    LoginComponent.prototype.sendErrorNotification = function (notificationType, message) {
        if (message) {
            this.notificationService.notify(notificationType, message);
        }
        else {
            this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
