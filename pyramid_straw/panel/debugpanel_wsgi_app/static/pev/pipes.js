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
var MomentDatePipe = (function () {
    function MomentDatePipe() {
    }
    MomentDatePipe.prototype.transform = function (value, args) {
        return moment(value).format('LLL');
    };
    MomentDatePipe = __decorate([
        core_1.Pipe({ name: 'momentDate' }), 
        __metadata('design:paramtypes', [])
    ], MomentDatePipe);
    return MomentDatePipe;
})();
exports.MomentDatePipe = MomentDatePipe;
var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        var duration = '';
        if (value < 1) {
            duration = '<1';
        }
        else if (value > 1 && value < 1000) {
            duration = _.round(value, 2).toString();
        }
        else if (value >= 1000 && value < 60000) {
            duration = _.round(value / 1000, 2).toString();
        }
        else if (value >= 60000) {
            duration = _.round(value / 60000, 2).toString();
        }
        return duration;
    };
    DurationPipe = __decorate([
        core_1.Pipe({ name: 'duration' }), 
        __metadata('design:paramtypes', [])
    ], DurationPipe);
    return DurationPipe;
})();
exports.DurationPipe = DurationPipe;
var DurationUnitPipe = (function () {
    function DurationUnitPipe() {
    }
    DurationUnitPipe.prototype.transform = function (value) {
        var unit = '';
        if (value < 1) {
            unit = 'ms';
        }
        else if (value > 1 && value < 1000) {
            unit = 'ms';
        }
        else if (value >= 1000 && value < 60000) {
            unit = 's';
        }
        else if (value >= 60000) {
            unit = 'min';
        }
        return unit;
    };
    DurationUnitPipe = __decorate([
        core_1.Pipe({ name: 'durationUnit' }), 
        __metadata('design:paramtypes', [])
    ], DurationUnitPipe);
    return DurationUnitPipe;
})();
exports.DurationUnitPipe = DurationUnitPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzLnRzIl0sIm5hbWVzIjpbIk1vbWVudERhdGVQaXBlIiwiTW9tZW50RGF0ZVBpcGUuY29uc3RydWN0b3IiLCJNb21lbnREYXRlUGlwZS50cmFuc2Zvcm0iLCJEdXJhdGlvblBpcGUiLCJEdXJhdGlvblBpcGUuY29uc3RydWN0b3IiLCJEdXJhdGlvblBpcGUudHJhbnNmb3JtIiwiRHVyYXRpb25Vbml0UGlwZSIsIkR1cmF0aW9uVW5pdFBpcGUuY29uc3RydWN0b3IiLCJEdXJhdGlvblVuaXRQaXBlLnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBR25DO0lBQUFBO0lBS0FDLENBQUNBO0lBSEdELGtDQUFTQSxHQUFUQSxVQUFVQSxLQUFhQSxFQUFFQSxJQUFjQTtRQUNuQ0UsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBSkxGO1FBQUNBLFdBQUlBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLENBQUNBOzt1QkFLNUJBO0lBQURBLHFCQUFDQTtBQUFEQSxDQUxBLEFBS0NBLElBQUE7QUFKWSxzQkFBYyxpQkFJMUIsQ0FBQTtBQUVEO0lBQUFHO0lBZ0JBQyxDQUFDQTtJQWRHRCxnQ0FBU0EsR0FBVEEsVUFBVUEsS0FBYUE7UUFDbkJFLElBQUlBLFFBQVFBLEdBQVdBLEVBQUVBLENBQUNBO1FBRTFCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1FBQzVDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxJQUFJQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4Q0EsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDbkRBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hCQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUNwREEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBZkxGO1FBQUNBLFdBQUlBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLENBQUNBOztxQkFnQjFCQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFmWSxvQkFBWSxlQWV4QixDQUFBO0FBRUQ7SUFBQUc7SUFnQkFDLENBQUNBO0lBZEdELG9DQUFTQSxHQUFUQSxVQUFVQSxLQUFhQTtRQUNuQkUsSUFBSUEsSUFBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFFdEJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ1pBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLElBQUlBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4QkEsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQWZMRjtRQUFDQSxXQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxjQUFjQSxFQUFFQSxDQUFDQTs7eUJBZ0I5QkE7SUFBREEsdUJBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0FBZlksd0JBQWdCLG1CQWU1QixDQUFBIiwiZmlsZSI6InBpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJtb21lbnQuZC50c1wiIC8+XG5cbkBQaXBlKHsgbmFtZTogJ21vbWVudERhdGUnIH0pXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZVBpcGUge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSk6IGFueSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTExMJyk7XG4gICAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICdkdXJhdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpcGUge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uOiBzdHJpbmcgPSAnJztcblxuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9ICc8MSc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAxICYmIHZhbHVlIDwgMTAwMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSBfLnJvdW5kKHZhbHVlLCAyKS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IDEwMDAgJiYgdmFsdWUgPCA2MDAwMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSBfLnJvdW5kKHZhbHVlIC8gMTAwMCwgMikudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+PSA2MDAwMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSBfLnJvdW5kKHZhbHVlIC8gNjAwMDAsIDIpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAnZHVyYXRpb25Vbml0JyB9KVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uVW5pdFBpcGUge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHZhciB1bml0OiBzdHJpbmcgPSAnJztcblxuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICB1bml0ID0gJ21zJztcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEgJiYgdmFsdWUgPCAxMDAwKSB7XG4gICAgICAgICAgICB1bml0ID0gJ21zJztcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAxMDAwICYmIHZhbHVlIDwgNjAwMDApIHtcbiAgICAgICAgICAgIHVuaXQgPSAncyc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gNjAwMDApIHtcbiAgICAgICAgICAgIHVuaXQgPSAnbWluJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pdDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=