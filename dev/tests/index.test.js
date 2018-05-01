'use strict';

const expect = require('chai').expect;
const HauptstimmeJs = require('../../dist/src/hauptstimme').HauptstimmeJs;
const NoteConstant = require('../../dist/constants/note.constant').NoteConstant;

describe('#HauptstimmeJs.getAvailableInstruments', function() {
    it('should return an array of instruments', function() {
        HauptstimmeJs.getAvailableInstruments()
            .then((response) => {
                expect(response).to.be.an('array');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#HauptstimmeJs.getAvailableScales', function() {
    it('should return an array of scales', function() {
        HauptstimmeJs.getAvailableScales()
            .then((response) => {
                expect(response).to.be.an('array');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#HauptstimmeJs.getAvailableChords', function() {
    it('should return an array of chords', function() {
        HauptstimmeJs.getAvailableChords()
            .then((response) => {
                expect(response).to.be.an('array');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#HauptstimmeJs.getAvailableInstruments', function() {
    it('should return an array of search', function() {
        HauptstimmeJs.search({rootNote: 0, notes: [4, 5,]})
            .then((response) => {
                expect(response).to.be.an('object');
            })
            .catch((error) => {
                console.warn(error);
            });
    });
});

describe('#HauptstimmeJs.getFormattedNoteString', function() {
    it('should return a formatted string for ambiguous note values', function() {
        expect(HauptstimmeJs.getFormattedNoteString(NoteConstant.GA, [NoteConstant.A, NoteConstant.G])).to.equal('G♯');
    });
});