'use strict';

import { HauptstimmeJs } from '../src/hauptstimme';

const expect = require('chai').expect;

describe('#HauptstimmeJs.getAvailableInstruments', function() {
    it('should return an array of instruments', function() {
        const result = HauptstimmeJs.getAvailableInstruments();
        expect(result).to.be.greaterThan(0);
    });
});