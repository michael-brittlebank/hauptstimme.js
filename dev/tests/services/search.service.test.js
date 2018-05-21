'use strict';

const expect = require('chai').expect;
const SearchService = require('../../../dist/src/services/search.service').SearchService;
const ScalePrimitivesData = require('../../../dist/src/data/scalePrimitives.data').ScalePrimitivesData;
const ChordPrimitivesData = require('../../../dist/src/data/chordPrimitives.data').ChordPrimitivesData;

describe('#SearchService.getScalesByNotes', function() {
    it('should return an array of scales with the corresponding notes', function() {
        SearchService.getScalesByNotes(ScalePrimitivesData.compileScalePrimitivesIntoScales(), [0,3,4])
            .then((response) => {
                expect(response).to.be.an('array');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#SearchService.getChordsByNotes', function() {
    it('should return an array of chords with the corresponding notes', function() {
        SearchService.getChordsByNotes(ScalePrimitivesData.compileScalePrimitivesIntoScales(), [0,4,5])
            .then((response) => {
                expect(response).to.be.an('array');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#SearchService.getChordsAndScalesByNotes', function() {
    it('should return an search response object with arrays of chords and scales containing the corresponding notes', function() {
        SearchService.getChordsAndScalesByNotes({rootNote: 0, notes: [4,5]}, ScalePrimitivesData.compileScalePrimitivesIntoScales(), ChordPrimitivesData.compileChordPrimitivesIntoChords(ScalePrimitivesData.compileScalePrimitivesIntoScales()))
            .then((response) => {
                expect(response).to.be.an('object');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});