const { getFormattedLetterFromNote,
 getLetterFromNote,
 modulo,
 adjustNoteBySteps} = require('../../src/services/util.service');
const {noteConstant, letterConstant, flatEntity, sharpEntity} = require('../../src/constants')

describe('./src/services/util.service', () => {
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

 describe('#getLetterFromNote', () => {
  it('translates numerical value into letter key', () => {
   expect(getLetterFromNote(noteConstant.A)).toEqual(letterConstant.A);
  });

  it('translates numerical value into letter key', () => {
   expect(getLetterFromNote(noteConstant.DE)).toEqual(letterConstant.DE);
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

 describe('#adjustNoteBySteps', () => {
  it('adds whole step to note', () => {
   expect(adjustNoteBySteps(noteConstant.AB, 2)).toEqual(noteConstant.C);
  });
  it('adds half step to note and modulos over the end of the note array', () => {
   expect(adjustNoteBySteps(noteConstant.GA, 1)).toEqual(noteConstant.A);
  });
  it('subtracts whole step from note', () => {
   expect(adjustNoteBySteps(noteConstant.D, -2)).toEqual(noteConstant.C);
  });
  it('subtracts half step from note and modulos over the end of the note array', () => {
   expect(adjustNoteBySteps(noteConstant.A, -1)).toEqual(noteConstant.GA);
  });
 })
});
