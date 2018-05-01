'use strict';

const expect = require('chai').expect;
const NoteConstant = require('../../../dist/constants/note.constant').NoteConstant;
const UtilService = require('../../../dist/src/services/util.service').UtilService;

describe('#UtilService.getLengthOfEnum', function() {
    it('should return an number length of enum', function() {
        const result = UtilService.getLengthOfEnum(NoteConstant);
        expect(result).to.equal(12);
    });
});

describe('#UtilService.getFormattedNoteString', function() {
    it('should return a formatted string from an enum', function() {
        const result = UtilService.getFormattedNoteString(NoteConstant.GA);
        expect(result).to.equal('A♭');
    });
});

describe('#UtilService.getEnumFromStringKey', function() {
    it('should return an enum value from a stringified index', function() {
        const result = UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[3]);
        expect(result).to.equal(NoteConstant.C);
    });
});

describe('#UtilService.addHalfStepsToNote', function() {
    it('should return an adjusted note constant after adding half steps', function() {
        const result = UtilService.addHalfStepsToNote(NoteConstant.A, 12);
        expect(result).to.equal(NoteConstant.A);
    });
});

describe('#UtilService.subtractHalfStepsFromNote', function() {
    it('should return an adjusted note constant after adding half steps', function() {
        const result = UtilService.subtractHalfStepsFromNote(NoteConstant.DE, 4);
        expect(result).to.equal(NoteConstant.B);
    });
});