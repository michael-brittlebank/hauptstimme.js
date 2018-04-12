'use strict';

const expect = require('chai').expect;
const ChordsData = require('../../../dist/src/data/chords.data').ChordsData;


describe('#ChordsData.getAvailableChords', function() {
    it('should return the full array of chords available to search', function() {
        const result = ChordsData.getAvailableChords();
        expect(result).to.be.an('array');
    });
});