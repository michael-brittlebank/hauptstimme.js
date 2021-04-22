const {noteConstant, chordOrScaleTypeConstant, instrumentTypeConstant} = require('../src/constants');

describe('./src/constants', () => {
 describe('#should be able to import constants', () => {
  it('check noteConstant enum', () => {
   expect(noteConstant.CD).toEqual(4);
  });

  it('check ChordOrScaleTypeConstant enum', () => {
   expect(chordOrScaleTypeConstant.MAJOR).toEqual('MAJOR');
  });

  it('check noteConstant enum', () => {
   expect(instrumentTypeConstant.KEYED_INSTRUMENT).toEqual('KEYED_INSTRUMENT');
  });
 })
});
