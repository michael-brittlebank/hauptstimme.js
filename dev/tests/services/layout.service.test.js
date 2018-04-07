'use strict';

const expect = require('chai').expect;
const LayoutService = require('../../../dist/src/services/layout.service').LayoutService;


describe('#LayoutService.getDefaultLayoutSettings', function() {
    it('should return an array of scales with the corresponding notes', function() {
        const result = LayoutService.getDefaultLayoutSettings();
        expect(result).to.be.an('object');
    });
});