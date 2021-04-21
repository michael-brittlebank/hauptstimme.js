const constants = require('../src/constants');

describe('./src/constants', () => {
 describe('#should be able to import constants', () => {
  it('check noteConstant enum', () => {
   const noteConstant = constants.NoteConstant;
   expect(noteConstant.CD).toEqual(4);
  });

  it('check ChordOrScaleTypeConstant enum', () => {
   const chordOrScaleTypeConstant = constants.ChordOrScaleTypeConstant;
   expect(chordOrScaleTypeConstant.MAJOR).toEqual('MAJOR');
  });

  it('check noteConstant enum', () => {
   const instrumentTypeConstant = constants.InstrumentTypeConstant;
   expect(instrumentTypeConstant.KEYED_INSTRUMENT).toEqual('KEYED_INSTRUMENT');
  });
 })
});
