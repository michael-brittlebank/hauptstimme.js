'use strict';

const expect = require('chai').expect;
const ChordPrimitivesData = require('../../../dist/src/data/chordPrimitives.data').ChordPrimitivesData;


describe('#ChordPrimitivesData.compileChordPrimitivesIntoChords', function() {
    it('should return an array of compiled chords', function() {
        const result = ChordPrimitivesData.compileChordPrimitivesIntoChords();
        expect(result).to.be.an('array');
    });
});