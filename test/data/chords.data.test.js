const {chordPrimitives, compileChordPrimitivesIntoChords} = require('../../src/data/chords.data');
const {chordOrScaleTypeConstant, letterConstant, sharpEntity, noteConstant, flatEntity} = require('../../src/constants')
const {compileScalePrimitivesIntoScales} = require('../../src/data/scales.data')

describe('./src/data/chords.data', () => {
 describe('#should check all data is in valid format', () => {
  test.each(chordPrimitives)(
    'should match chord primitive data types when %s',
    (chords) => {
     expect(chords).toEqual({
      name: expect.any(String),
      intervals: expect.any(Array),
      type: expect.any(String),
     })
    });
 });

 describe('#compileChordPrimitivesIntoChords', () => {
  const scales = compileScalePrimitivesIntoScales();
  let chords = compileChordPrimitivesIntoChords(scales);
  let chord;

  describe(('A Major Chord'), () => {
   beforeEach(() => {
    chord = chords[0]
   })
   it('should return elements with a type property', () => {
    expect(chord).toHaveProperty('type', chordOrScaleTypeConstant.MAJOR);
   });

   it('should return elements with a name property', () => {
    expect(chord).toHaveProperty('name', `${letterConstant.A} ${chordPrimitives[0].name}`);
   });

   it('should return elements with a description property', () => {
    const aMajorChordLetters = [letterConstant.A, `${letterConstant.C}${sharpEntity}`, letterConstant.E]
    expect(chord).toHaveProperty('description', aMajorChordLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const aMajorChordNotes = [noteConstant.A,noteConstant.CD, noteConstant.E]
    expect(chord).toHaveProperty('notes', aMajorChordNotes);
   });
  });

  describe(('G Minor Chord'), () => {
   const name = `${letterConstant.G} Minor`

   beforeEach(() => {
    chord = chords.find((chord) => chord.name === name)
   })
   it('should return elements with a type property', () => {
    expect(chord).toHaveProperty('type', chordOrScaleTypeConstant.MINOR);
   });

   it('should return elements with a name property', () => {
    expect(chord).toHaveProperty('name', name);
   });

   it('should return elements with a description property', () => {
    const gMinorChordLetters = [letterConstant.G, `${letterConstant.B}${flatEntity}`, letterConstant.D]
    expect(chord).toHaveProperty('description', gMinorChordLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const gMinorChordNotes = [noteConstant.G, noteConstant.AB, noteConstant.D]
    expect(chord).toHaveProperty('notes', gMinorChordNotes);
   });
  });

  describe((`A${flatEntity} Sharp Eleven Chord`), () => {
   beforeEach(() => {
    chord = chords[chords.length-1]
   })
   it('should return elements with a type property', () => {
    expect(chord).toHaveProperty('type', chordOrScaleTypeConstant.MISCELLANEOUS);
   });

   it('should return elements with a name property', () => {
    expect(chord).toHaveProperty('name', `${letterConstant.A}${flatEntity} ${chordPrimitives[chordPrimitives.length-1].name}`);
   });

   it('should return elements with a description property', () => {
    const aFlatSharpElevenChordLetters = [`${letterConstant.A}${flatEntity}`, `${letterConstant.E}${flatEntity}`, letterConstant.D,]
    expect(chord).toHaveProperty('description', aFlatSharpElevenChordLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const aFlatSharpElevenChordNotes = [noteConstant.GA, noteConstant.DE, noteConstant.D]
    expect(chord).toHaveProperty('notes', aFlatSharpElevenChordNotes);
   });
  });
 });
});