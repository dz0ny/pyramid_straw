var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var plan_view_1 = require('../plan-view/plan-view');
var plan_list_1 = require('../plan-list/plan-list');
var plan_new_1 = require('../plan-new/plan-new');
var about_1 = require('../about/about');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n      <nav>\n         <div class=\"nav-container\">\n            <a class=\"about\"[routerLink]=\"['About']\">about</a>\n            <a class=\"btn btn-primary btn-lg pull-right\" [routerLink]=\"['PlanNew']\">new plan</a>\n            <a [routerLink]=\"['PlanList']\">plans</a>\n         </div>\n      </nav>\n\n      <router-outlet></router-outlet>\n\n      <footer><strong>pev</strong> is made by\n         <a href=\"http://tatiyants.com/\">Alex Tatiyants</a>\n         <a href=\"https://twitter.com/AlexTatiyants\"><i class=\"fa fa-twitter\"></i></a>\n         <a href=\"https://github.com/AlexTatiyants\"><i class=\"fa fa-github\"></i></a>\n      </footer>\n    ",
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ['/PlanList'] },
            { path: '/plans', component: plan_list_1.PlanList, name: 'PlanList' },
            { path: '/plans/new', component: plan_new_1.PlanNew, name: 'PlanNew' },
            { path: '/plans/:id', component: plan_view_1.PlanView, name: 'PlanView' },
            { path: '/about', component: about_1.About, name: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUUvRCwwQkFBdUIsd0JBQXdCLENBQUMsQ0FBQTtBQUNoRCwwQkFBdUIsd0JBQXdCLENBQUMsQ0FBQTtBQUNoRCx5QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3QyxzQkFBb0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyQztJQUFBQTtJQStCbUJDLENBQUNBO0lBL0JwQkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLDhwQkFnQlRBO1lBQ0RBLGFBQWFBLEVBQUVBLHdCQUFpQkEsQ0FBQ0EsSUFBSUE7WUFDckNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDbENBLENBQUNBO1FBRURBLG9CQUFXQSxDQUFDQTtZQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQTtZQUN4Q0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQVFBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBO1lBQ3pEQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxrQkFBT0EsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUE7WUFDM0RBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQTtZQUM3REEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBQ0E7U0FDckRBLENBQUNBOztZQUVrQkE7SUFBREEsVUFBQ0E7QUFBREEsQ0EvQm5CLEFBK0JvQkEsSUFBQTtBQUFQLFdBQUcsTUFBSSxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtQbGFuVmlld30gZnJvbSAnLi4vcGxhbi12aWV3L3BsYW4tdmlldyc7XG5pbXBvcnQge1BsYW5MaXN0fSBmcm9tICcuLi9wbGFuLWxpc3QvcGxhbi1saXN0JztcbmltcG9ydCB7UGxhbk5ld30gZnJvbSAnLi4vcGxhbi1uZXcvcGxhbi1uZXcnO1xuaW1wb3J0IHtBYm91dH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxuYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJhYm91dFwiW3JvdXRlckxpbmtdPVwiWydBYm91dCddXCI+YWJvdXQ8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgcHVsbC1yaWdodFwiIFtyb3V0ZXJMaW5rXT1cIlsnUGxhbk5ldyddXCI+bmV3IHBsYW48L2E+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1BsYW5MaXN0J11cIj5wbGFuczwvYT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblxuICAgICAgPGZvb3Rlcj48c3Ryb25nPnBldjwvc3Ryb25nPiBpcyBtYWRlIGJ5XG4gICAgICAgICA8YSBocmVmPVwiaHR0cDovL3RhdGl5YW50cy5jb20vXCI+QWxleCBUYXRpeWFudHM8L2E+XG4gICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9BbGV4VGF0aXlhbnRzXCI+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT5cbiAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQWxleFRhdGl5YW50c1wiPjxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCByZWRpcmVjdFRvOiBbJy9QbGFuTGlzdCddIH0sXG4gICAgeyBwYXRoOiAnL3BsYW5zJywgY29tcG9uZW50OiBQbGFuTGlzdCwgbmFtZTogJ1BsYW5MaXN0JyB9LFxuICAgIHsgcGF0aDogJy9wbGFucy9uZXcnLCBjb21wb25lbnQ6IFBsYW5OZXcsIG5hbWU6ICdQbGFuTmV3JyB9LFxuICAgIHsgcGF0aDogJy9wbGFucy86aWQnLCBjb21wb25lbnQ6IFBsYW5WaWV3LCBuYW1lOiAnUGxhblZpZXcnIH0sXG4gICAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgbmFtZTogJ0Fib3V0J31cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHAgeyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=