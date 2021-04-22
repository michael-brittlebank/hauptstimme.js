const {compileChordPrimitivesIntoChords} = require('../../src/data/chords.data');
const {compileScalePrimitivesIntoScales} = require('../../src/data/scales.data')
const {chordOrScaleTypeConstant, letterConstant, noteConstant} = require('../../src/constants')
const {getChordsAndScalesByNotes} = require('../../src/services/search.service');

describe('./src/service/search.service', () => {

 describe('#getChordsAndScalesByNotes', () => {
  const scales = compileScalePrimitivesIntoScales();
  const chords = compileChordPrimitivesIntoChords({scales});
  let result;
  let searchRequest = {}
  let rootNote;

  describe(('Only results with root note of G'), () => {
   beforeEach(() => {
    rootNote = noteConstant.G;
    searchRequest = {
     rootNote,
     notes: []
    }
    getChordsAndScalesByNotes({searchRequest, scales, chords})
      .then((response) => {
       result = response
      });
   })

   describe(('chords'), () => {
    it('should return elements with a chords property', () => {
     expect(result).toHaveProperty('chords');
    });

    it('should return elements with a specific length', () => {
     expect(result.chords.length).toEqual(51);
    });

    it('should return full chord objects', () => {
     const chord = chords.find((chord) => {
      return chord.notes[0] === rootNote && chord.name.toLowerCase().indexOf('major') !== -1;
     });
     expect(result.chords[0]).toEqual(chord);
    });
   })

   describe(('scales'), () => {
    it('should return elements with a scales property', () => {
     expect(result).toHaveProperty('scales');
    });

    it('should return elements with a specific length', () => {
     expect(result.scales.length).toEqual(26);
    });

    it('should return full scale objects', () => {
     const scale = scales.find((scale) => {
      return scale.notes[0] === rootNote && scale.name.toLowerCase().indexOf('ionian') !== -1;
     });
     expect(result.scales[0]).toEqual(scale);
    });
   })
  });

  describe(('Only results with notes of C, E, D, F, G, A, B'), () => {
   beforeEach(() => {
    rootNote = noteConstant.C
    searchRequest = {
     rootNote,
     notes: [noteConstant.C, noteConstant.D, noteConstant.E, noteConstant.F, noteConstant.G, noteConstant.A, noteConstant.B]
    }
    getChordsAndScalesByNotes({searchRequest, scales, chords})
      .then((response) => {
       result = response
      });
   })

   describe(('chords'), () => {
    it('should return elements with a chords property', () => {
     expect(result).toHaveProperty('chords');
    });

    it('should return elements with a specific length', () => {
     expect(result.chords.length).toEqual(1);
    });

    it('should return full chord objects', () => {
     const chord = chords.find((chord) => {
      return chord.notes[0] === rootNote && chord.name.toLowerCase().indexOf('major thirteenth') !== -1;
     });
     expect(result.chords[0]).toEqual(chord);
    });
   })

   describe(('scales'), () => {
    it('should return elements with a scales property', () => {
     expect(result).toHaveProperty('scales');
    });

    it('should return elements with a specific length', () => {
     expect(result.scales.length).toEqual(1);
    });

    it('should return full scale objects', () => {
     const scale = scales.find((scale) => {
      return scale.notes[0] === rootNote && scale.name.toLowerCase().indexOf('ionian') !== -1;
     });
     expect(result.scales[0]).toEqual(scale);
    });
   })
  });
 });
});