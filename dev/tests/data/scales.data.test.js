'use strict';

const expect = require('chai').expect;
const ScalesData = require('../../../dist/src/data/scales.data').ScalesData;


describe('#ScalesData.getAvailableScales', function() {
    it('should return the full array of scales available to search', function() {
        const result = ScalesData.getAvailableScales();
        expect(result).to.be.an('array');
    });
});