'use strict';

const expect = require('chai').expect;
const HauptstimmeJs = require('../../dist/src/hauptstimme').HauptstimmeJs;

describe('#HauptstimmeJs.getAvailableInstruments', function() {
    it('should return an array of instruments', function() {
        const result = HauptstimmeJs.getAvailableInstruments();
        expect(result).to.be.an('array');
    });
});