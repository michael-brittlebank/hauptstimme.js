'use strict';

const expect = require('chai').expect;
const InstrumentsData = require('../../../dist/src/data/instruments.data').InstrumentsData;


describe('#InstrumentsData.getAvailableInstruments', function() {
    it('should return the full array of instruments available to search', function() {
        const result = InstrumentsData.getAvailableInstruments();
        expect(result).to.be.an('array');
    });
});