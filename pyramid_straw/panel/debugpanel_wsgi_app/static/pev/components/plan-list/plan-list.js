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
var plan_service_1 = require('../../services/plan-service');
var plan_new_1 = require('../plan-new/plan-new');
var pipes_1 = require('../../pipes');
var PlanList = (function () {
    function PlanList(_planService) {
        this._planService = _planService;
        this.openDialog = false;
    }
    PlanList.prototype.ngOnInit = function () {
        this.plans = this._planService.getPlans();
    };
    PlanList.prototype.requestDelete = function (plan) {
        this.openDialog = true;
        this.planToDelete = plan;
    };
    PlanList.prototype.deletePlan = function (plan) {
        this.openDialog = false;
        console.log(this.planToDelete);
        this._planService.deletePlan(this.planToDelete);
        this.plans = this._planService.getPlans();
    };
    PlanList.prototype.cancelDelete = function () {
        this.openDialog = false;
    };
    PlanList.prototype.deleteAllPlans = function () {
        this._planService.deleteAllPlans();
    };
    PlanList = __decorate([
        core_1.Component({
            selector: 'plan-list',
            template: "\n      <div class=\"page\">\n         <div class=\"hero-container\" *ngIf=\"plans.length === 0\">\n            Welcome to PEV! Please <a [routerLink]=\"['/PlanNew']\">submit</a> a plan for visualization\n         </div>\n\n        <table class=\"table pad-bottom\">\n          <tr *ngFor=\"#plan of plans\">\n            <!-- this is a hack that should be converted to a proper dialog once that is available in angular 2-->\n            <div *ngIf=\"openDialog\">\n                <div class=\"modal-backdrop\"></div>\n                <div class=\"modal\">\n                   <div class=\"modal-dialog\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-body\">You're about to delete plan \"{{planToDelete.name}}\". Are you sure?</div>\n                        <div class=\"modal-footer\">\n                           <button class=\"btn btn-primary\" (click)=\"deletePlan()\">Yes</button>\n                           <button class=\"btn btn-default\" (click)=\"cancelDelete()\">No</button>\n                        </div>\n                    </div>\n                   </div>\n                </div>\n            </div>\n\n            <td width=\"30%\"><a [routerLink]=\"['/PlanView', {id: plan.id}]\">{{plan.name}}</a></td>\n            <td>created on {{plan.createdOn | momentDate }}</td>\n            <td class=\"align-right\"><button class=\"btn btn-danger\" (click)=\"requestDelete(plan)\">\n              <i class=\"fa fa-trash\"></i>delete</button>\n           </td>\n          </tr>\n        </table>\n      </div>\n    ",
            providers: [plan_service_1.PlanService],
            directives: [router_1.ROUTER_DIRECTIVES, plan_new_1.PlanNew],
            pipes: [pipes_1.MomentDatePipe]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlanList);
    return PlanList;
})();
exports.PlanList = PlanList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxhbi1saXN0L3BsYW4tbGlzdC50cyJdLCJuYW1lcyI6WyJQbGFuTGlzdCIsIlBsYW5MaXN0LmNvbnN0cnVjdG9yIiwiUGxhbkxpc3QubmdPbkluaXQiLCJQbGFuTGlzdC5yZXF1ZXN0RGVsZXRlIiwiUGxhbkxpc3QuZGVsZXRlUGxhbiIsIlBsYW5MaXN0LmNhbmNlbERlbGV0ZSIsIlBsYW5MaXN0LmRlbGV0ZUFsbFBsYW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFHbEQsNkJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFDeEQseUJBQXNCLHNCQUFzQixDQUFDLENBQUE7QUFFN0Msc0JBQTZCLGFBQWEsQ0FBQyxDQUFBO0FBRTNDO0lBK0NJQSxrQkFBb0JBLFlBQXlCQTtRQUF6QkMsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBSDdDQSxlQUFVQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUdxQkEsQ0FBQ0E7SUFFbERELDJCQUFRQSxHQUFSQTtRQUNJRSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFFREYsZ0NBQWFBLEdBQWJBLFVBQWNBLElBQUlBO1FBQ2RHLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFFREgsNkJBQVVBLEdBQVZBLFVBQVdBLElBQUlBO1FBQ1hJLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3hCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUMvQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUVESiwrQkFBWUEsR0FBWkE7UUFDSUssSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBRURMLGlDQUFjQSxHQUFkQTtRQUNJTSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUF2RUxOO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEsOGlEQWdDVEE7WUFDREEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVdBLENBQUNBO1lBQ3hCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLGtCQUFPQSxDQUFDQTtZQUN4Q0EsS0FBS0EsRUFBRUEsQ0FBQ0Esc0JBQWNBLENBQUNBO1NBQzFCQSxDQUFDQTs7aUJBa0NEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQXhFQSxBQXdFQ0EsSUFBQTtBQWpDWSxnQkFBUSxXQWlDcEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BsYW4tbGlzdC9wbGFuLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SVBsYW59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBsYW4nO1xuaW1wb3J0IHtQbGFuU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGxhbi1zZXJ2aWNlJztcbmltcG9ydCB7UGxhbk5ld30gZnJvbSAnLi4vcGxhbi1uZXcvcGxhbi1uZXcnO1xuXG5pbXBvcnQge01vbWVudERhdGVQaXBlfSBmcm9tICcuLi8uLi9waXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGxhbi1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWNvbnRhaW5lclwiICpuZ0lmPVwicGxhbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIFBFViEgUGxlYXNlIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL1BsYW5OZXcnXVwiPnN1Ym1pdDwvYT4gYSBwbGFuIGZvciB2aXN1YWxpemF0aW9uXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBwYWQtYm90dG9tXCI+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cIiNwbGFuIG9mIHBsYW5zXCI+XG4gICAgICAgICAgICA8IS0tIHRoaXMgaXMgYSBoYWNrIHRoYXQgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBhIHByb3BlciBkaWFsb2cgb25jZSB0aGF0IGlzIGF2YWlsYWJsZSBpbiBhbmd1bGFyIDItLT5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvcGVuRGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPllvdSdyZSBhYm91dCB0byBkZWxldGUgcGxhbiBcInt7cGxhblRvRGVsZXRlLm5hbWV9fVwiLiBBcmUgeW91IHN1cmU/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImRlbGV0ZVBsYW4oKVwiPlllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJjYW5jZWxEZWxldGUoKVwiPk5vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiMzAlXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvUGxhblZpZXcnLCB7aWQ6IHBsYW4uaWR9XVwiPnt7cGxhbi5uYW1lfX08L2E+PC90ZD5cbiAgICAgICAgICAgIDx0ZD5jcmVhdGVkIG9uIHt7cGxhbi5jcmVhdGVkT24gfCBtb21lbnREYXRlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLXJpZ2h0XCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cInJlcXVlc3REZWxldGUocGxhbilcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtQbGFuU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBQbGFuTmV3XSxcbiAgICBwaXBlczogW01vbWVudERhdGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQbGFuTGlzdCB7XG4gICAgcGxhbnM6IEFycmF5PElQbGFuPjtcbiAgICBuZXdQbGFuTmFtZTogc3RyaW5nO1xuICAgIG5ld1BsYW5Db250ZW50OiBhbnk7XG4gICAgbmV3UGxhbklkOiBzdHJpbmc7XG4gICAgb3BlbkRpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHBsYW5Ub0RlbGV0ZTogSVBsYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGFuU2VydmljZTogUGxhblNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGxhbnMgPSB0aGlzLl9wbGFuU2VydmljZS5nZXRQbGFucygpO1xuICAgIH1cblxuICAgIHJlcXVlc3REZWxldGUocGxhbikge1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYW5Ub0RlbGV0ZSA9IHBsYW47XG4gICAgfVxuXG4gICAgZGVsZXRlUGxhbihwbGFuKSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW5Ub0RlbGV0ZSk7XG4gICAgICAgIHRoaXMuX3BsYW5TZXJ2aWNlLmRlbGV0ZVBsYW4odGhpcy5wbGFuVG9EZWxldGUpO1xuICAgICAgICB0aGlzLnBsYW5zID0gdGhpcy5fcGxhblNlcnZpY2UuZ2V0UGxhbnMoKTtcbiAgICB9XG5cbiAgICBjYW5jZWxEZWxldGUoKSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRlbGV0ZUFsbFBsYW5zKCkge1xuICAgICAgICB0aGlzLl9wbGFuU2VydmljZS5kZWxldGVBbGxQbGFucygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==