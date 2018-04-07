"use strict";
exports.__esModule = true;
var LayoutService = /** @class */ (function () {
    function LayoutService() {
    }
    LayoutService.getDefaultLayoutSettings = function () {
        return {
            ascendingStringOrder: true,
            containerPrefix: 'hauptstimme-',
            containerClass: 'hauptstimme-instrument',
            enableMultiColour: true,
            showSearchButton: true,
            showInstrumentTitle: true
        };
    };
    return LayoutService;
}());
exports.LayoutService = LayoutService;
