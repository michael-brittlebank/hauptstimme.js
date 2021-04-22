const {scalePrimitives, compileScalePrimitivesIntoScales} = require('../../src/data/scales.data');
const {chordOrScaleTypeConstant, letterConstant, sharpEntity, noteConstant, flatEntity} = require('../../src/constants')

describe('./src/data/scales.data', () => {
 describe('#should check all data is in valid format', () => {
  test.each(scalePrimitives)(
    'should match scale primitive data types when %s',
    (instrument) => {
     expect(instrument).toEqual({
      name: expect.any(String),
      steps: expect.any(Array),
      type: expect.any(String),
     })
    });
 })

 describe('#compileScalePrimitivesIntoScales', () => {
  let scales;
  let scale

  beforeEach(() => {
   scales = compileScalePrimitivesIntoScales();
   const testme = 8
  })

  describe(('A Major Scale'), () => {
   beforeEach(() => {
    scale = scales[0]
   })
   it('should return elements with a type property', () => {
    expect(scale).toHaveProperty('type', chordOrScaleTypeConstant.MAIN);
   });

   it('should return elements with a name property', () => {
    expect(scale).toHaveProperty('name', `${letterConstant.A} ${scalePrimitives[0].name}`);
   });

   it('should return elements with a description property', () => {
    const aMajorScaleLetters = [letterConstant.A, letterConstant.B, `${letterConstant.C}${sharpEntity}`, letterConstant.D,
     letterConstant.E, `${letterConstant.F}${sharpEntity}`, `${letterConstant.G}${sharpEntity}`]
    expect(scale).toHaveProperty('description', aMajorScaleLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const aMajorScaleNotes = [noteConstant.A, noteConstant.B, noteConstant.CD, noteConstant.D,
     noteConstant.E, noteConstant.FG, noteConstant.GA]
    expect(scale).toHaveProperty('notes', aMajorScaleNotes);
   });
  });

  describe(('F Minor Scale'), () => {
   const name = `${letterConstant.F} Minor Aeolian`
   beforeEach(() => {
    scale = scales.find((scale) => scale.name === name)
   })
   it('should return elements with a type property', () => {
    expect(scale).toHaveProperty('type', chordOrScaleTypeConstant.MAIN);
   });

   it('should return elements with a name property', () => {
    expect(scale).toHaveProperty('name', name);
   });

   it('should return elements with a description property', () => {
    const aMajorScaleLetters = [letterConstant.F, letterConstant.G, `${letterConstant.A}${flatEntity}`,
     `${letterConstant.B}${flatEntity}`, letterConstant.C, `${letterConstant.D}${flatEntity}`, `${letterConstant.E}${flatEntity}`]
    expect(scale).toHaveProperty('description', aMajorScaleLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const aMajorScaleNotes = [noteConstant.F, noteConstant.G, noteConstant.GA, noteConstant.AB,
     noteConstant.C, noteConstant.CD, noteConstant.DE]
    expect(scale).toHaveProperty('notes', aMajorScaleNotes);
   });
  });

  describe((`A${flatEntity} Yo Scale`), () => {
   beforeEach(() => {
    scale = scales[scales.length-1]
   })
   it('should return elements with a type property', () => {
    expect(scale).toHaveProperty('type', chordOrScaleTypeConstant.MISCELLANEOUS);
   });

   it('should return elements with a name property', () => {
    expect(scale).toHaveProperty('name', `${letterConstant.A}${flatEntity} ${scalePrimitives[scalePrimitives.length-1].name}`);
   });

   it('should return elements with a description property', () => {
    const aFlatYoScaleLetters = [`${letterConstant.A}${flatEntity}`, `${letterConstant.B}${flatEntity}`, `${letterConstant.C}${sharpEntity}`, `${letterConstant.E}${flatEntity}`, letterConstant.F]
    expect(scale).toHaveProperty('description', aFlatYoScaleLetters.join(', '));
   });

   it('should return elements with a notes property', () => {
    const aFlatYoScaleNotes = [noteConstant.GA, noteConstant.AB, noteConstant.CD, noteConstant.DE,noteConstant.F]
    expect(scale).toHaveProperty('notes', aFlatYoScaleNotes);
   });
  });
 });
});
