var HighlightType = (function () {
    function HighlightType() {
    }
    HighlightType.NONE = 'none';
    HighlightType.DURATION = 'duration';
    HighlightType.ROWS = 'rows';
    HighlightType.COST = 'cost';
    return HighlightType;
})();
exports.HighlightType = HighlightType;
(function (EstimateDirection) {
    EstimateDirection[EstimateDirection["over"] = 0] = "over";
    EstimateDirection[EstimateDirection["under"] = 1] = "under";
})(exports.EstimateDirection || (exports.EstimateDirection = {}));
var EstimateDirection = exports.EstimateDirection;
var ViewMode = (function () {
    function ViewMode() {
    }
    ViewMode.FULL = 'full';
    ViewMode.COMPACT = 'compact';
    ViewMode.DOT = 'dot';
    return ViewMode;
})();
exports.ViewMode = ViewMode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudW1zLnRzIl0sIm5hbWVzIjpbIkhpZ2hsaWdodFR5cGUiLCJIaWdobGlnaHRUeXBlLmNvbnN0cnVjdG9yIiwiRXN0aW1hdGVEaXJlY3Rpb24iLCJWaWV3TW9kZSIsIlZpZXdNb2RlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUFBQTtJQUtBQyxDQUFDQTtJQUpVRCxrQkFBSUEsR0FBV0EsTUFBTUEsQ0FBQ0E7SUFDdEJBLHNCQUFRQSxHQUFXQSxVQUFVQSxDQUFDQTtJQUM5QkEsa0JBQUlBLEdBQVdBLE1BQU1BLENBQUNBO0lBQ3RCQSxrQkFBSUEsR0FBV0EsTUFBTUEsQ0FBQ0E7SUFDakNBLG9CQUFDQTtBQUFEQSxDQUxBLEFBS0NBLElBQUE7QUFMWSxxQkFBYSxnQkFLekIsQ0FBQTtBQUVELFdBQVksaUJBQWlCO0lBQ3pCRSx5REFBSUEsQ0FBQUE7SUFDSkEsMkRBQUtBLENBQUFBO0FBQ1RBLENBQUNBLEVBSFcseUJBQWlCLEtBQWpCLHlCQUFpQixRQUc1QjtBQUhELElBQVksaUJBQWlCLEdBQWpCLHlCQUdYLENBQUE7QUFFRDtJQUFBQztJQUlBQyxDQUFDQTtJQUhVRCxhQUFJQSxHQUFXQSxNQUFNQSxDQUFDQTtJQUN0QkEsZ0JBQU9BLEdBQVdBLFNBQVNBLENBQUNBO0lBQzVCQSxZQUFHQSxHQUFXQSxLQUFLQSxDQUFDQTtJQUMvQkEsZUFBQ0E7QUFBREEsQ0FKQSxBQUlDQSxJQUFBO0FBSlksZ0JBQVEsV0FJcEIsQ0FBQSIsImZpbGUiOiJlbnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIaWdobGlnaHRUeXBlIHtcbiAgICBzdGF0aWMgTk9ORTogc3RyaW5nID0gJ25vbmUnO1xuICAgIHN0YXRpYyBEVVJBVElPTjogc3RyaW5nID0gJ2R1cmF0aW9uJztcbiAgICBzdGF0aWMgUk9XUzogc3RyaW5nID0gJ3Jvd3MnO1xuICAgIHN0YXRpYyBDT1NUOiBzdHJpbmcgPSAnY29zdCc7XG59XG5cbmV4cG9ydCBlbnVtIEVzdGltYXRlRGlyZWN0aW9uIHtcbiAgICBvdmVyLFxuICAgIHVuZGVyXG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZSB7XG4gICAgc3RhdGljIEZVTEw6IHN0cmluZyA9ICdmdWxsJztcbiAgICBzdGF0aWMgQ09NUEFDVDogc3RyaW5nID0gJ2NvbXBhY3QnO1xuICAgIHN0YXRpYyBET1Q6IHN0cmluZyA9ICdkb3QnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9