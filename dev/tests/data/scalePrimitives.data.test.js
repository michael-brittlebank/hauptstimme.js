'use strict';

const expect = require('chai').expect;
const ScalePrimitivesData = require('../../../dist/src/data/scalePrimitives.data').ScalePrimitivesData;


describe('#ScalePrimitivesData.compileScalePrimitivesIntoScales', function() {
    it('should return an array of compiled scales', function() {
        const result = ScalePrimitivesData.compileScalePrimitivesIntoScales();
        expect(result).to.be.an('array');
    });
});