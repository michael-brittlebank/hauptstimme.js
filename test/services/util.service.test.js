const { getLengthOfEnum,
 getFormattedLetterFromNote,
 getEnumFromStringKey,
 modulo,
 addHalfStepsToNote,
 subtractHalfStepsFromNote} = require('../../src/services/util.service');
const {noteConstant, letterConstant, flatEntity, sharpEntity} = require('../../src/constants')

describe('./src/services/util.service', () => {
 describe('#getLengthOfEnum', () => {
  it('gets length of enum', () => {
   expect(getLengthOfEnum(noteConstant)).toEqual(12);
  });
 })

 describe('#getFormattedLetterFromNote', () => {
  it('gets correct sharp/flat when AB - no note array', () => {
   expect(getFormattedLetterFromNote(noteConstant.AB)).toEqual(`${letterConstant.B}${flatEntity}`);
  });

  it('gets correct sharp/flat when AB - when array has A', () => {
   expect(getFormattedLetterFromNote(noteConstant.AB, [noteConstant.A])).toEqual(`${letterConstant.B}${flatEntity}`);
  });

  it('gets correct sharp/flat when AB - when array has B', () => {
   expect(getFormattedLetterFromNote(noteConstant.AB, [noteConstant.B])).toEqual(`${letterConstant.A}${sharpEntity}`);
  });
 })

 describe('#getEnumFromStringKey', () => {
  it('translates numerical value into letter key', () => {
   expect(getEnumFromStringKey(noteConstant, noteConstant.A)).toEqual(letterConstant.A);
  });
 })

 describe('#modulo', () => {
  it('correctly modulos over remainder', () => {
   expect(modulo(12, 3)).toEqual(0);
  });

  it('correctly modulos over remainder', () => {
   expect(modulo(12, 5)).toEqual(2);
  });

  it('correctly modulos over remainder', () => {
   expect(modulo(12, 7)).toEqual(5);
  });
 })

 describe('#addHalfStepsToNote', () => {
  it('adds whole step to note', () => {
   const noteKey = addHalfStepsToNote(noteConstant.AB, 2)
   expect(noteConstant[noteKey]).toEqual(noteConstant.C);
  });
  it('adds half step to note and modulos over the end of the note array', () => {
   const noteKey = addHalfStepsToNote(noteConstant.GA, 1)
   expect(noteConstant[noteKey]).toEqual(noteConstant.A);
  });
 })

 describe('#subtractHalfStepsFromNote', () => {
  it('subtracts whole step from note', () => {
   const noteKey = subtractHalfStepsFromNote(noteConstant.D, 2)
   expect(noteConstant[noteKey]).toEqual(noteConstant.C);
  });
  it('subtracts half step from note and modulos over the end of the note array', () => {
   const noteKey = subtractHalfStepsFromNote(noteConstant.A, 1)
   expect(noteConstant[noteKey]).toEqual(noteConstant.GA);
  });
 })
});
