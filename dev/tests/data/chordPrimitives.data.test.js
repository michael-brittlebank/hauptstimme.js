'use strict';

const expect = require('chai').expect;
const ChordPrimitivesData = require('../../../dist/src/data/chordPrimitives.data').ChordPrimitivesData;
const ScalePrimitivesData = require('../../../dist/src/data/scalePrimitives.data').ScalePrimitivesData;

describe('#ChordPrimitivesData.compileChordPrimitivesIntoChords', function() {
    it('should return an array of compiled chords', function() {
        const result = ChordPrimitivesData.compileChordPrimitivesIntoChords(ScalePrimitivesData.compileScalePrimitivesIntoScales());
        expect(result).to.be.an('array');
    });
});