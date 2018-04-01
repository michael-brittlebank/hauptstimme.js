"use strict";
exports.__esModule = true;
var instruments_data_1 = require("./data/instruments.data");
var instrumentType_constant_1 = require("../constants/instrumentType.constant");
var HauptstimmeJs = /** @class */ (function () {
    function HauptstimmeJs() {
    }
    /**
     * This class provides a entry point for helper functions used in the module
     */
    HauptstimmeJs.getAvailableInstruments = function () {
        return instruments_data_1.InstrumentsData.getAvailableInstruments();
    };
    HauptstimmeJs.demo = function () {
        var old = {};
        var newValues = [];
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        for (var key in old) {
            // check also if property is not inherited from prototype
            if (old.hasOwnProperty(key)) {
                newValues.push({
                    name: capitalizeFirstLetter(key),
                    rootNotes: old[key],
                    type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
                });
            }
        }
        return JSON.stringify(newValues);
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
