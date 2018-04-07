'use strict';

const expect = require('chai').expect;
const NoteConstant = require('../../../dist/constants/note.constant').NoteConstant;
const UtilService = require('../../../dist/src/services/util.service').UtilService;

describe('#UtilService.getLengthOfEnum', function() {
    it('should return an number length of enum', function() {
        const result = UtilService.getLengthOfEnum(NoteConstant);
        expect(result).to.be.an('number');
    });
});