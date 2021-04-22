const { modulo, getFormattedLetterFromNote, adjustNoteBySteps } = require('../services/util.service');
const { chordOrScaleTypeConstant, noteLength } = require('../constants');

/**
 * @returns list of compiled chords
 */
const compileChordPrimitivesIntoChords = (scales = []) => {
 let chords = [];
 let chordNotes;
 let assembledChords = [];
 let rootNote;
 let chordNote;
 let rootScale;
 let rootScaleLength;
 let chordDescription;
 let scaleIndex;
 let noteModifier;
 let isOptionalNote;
 let noteDescription;
 let modifiedChordNote;
 let parsedInterval;
 // loop through each possible root note
 for(let i = 0; i < noteLength; i++) {
  rootNote = i;
  // use major scale as basis for selecting notes
  rootScale = scales.find((scale) => {
   return scale.notes[0] === rootNote && scale.name.toLowerCase().indexOf('ionian') !== -1;
  });
  rootScaleLength = rootScale.notes.length;
  // compile each scale for the given root note
  assembledChords = chordPrimitives.map((chordPrimitive) => {
   chordNotes = [];
   chordDescription = [];
   chordPrimitive.intervals.forEach((interval) => {
    // convert interval to note array index
    isOptionalNote = false;
    noteModifier = 0;
    parsedInterval = interval
    // calculate modifier steps
    const isModifiedInterval = typeof interval === "string";
    if (isModifiedInterval) {
     if (interval.indexOf('b') !== -1) {
      if (interval.indexOf('bb') !== -1) {
       // double flat step
       noteModifier = -2
       parsedInterval = interval.substr(interval.indexOf('b')+2, interval.length)
      } else {
       // single flat step
       noteModifier = -1
       parsedInterval = interval.substr(interval.indexOf('b')+1, interval.length)
      }
     } else if (interval.indexOf('#') !== -1) {
      // single sharp step
      noteModifier = 1
      parsedInterval = interval.substr(interval.indexOf('#')+1, interval.length)
     } else if (interval.indexOf('(') !== -1) {
      // optional step
      isOptionalNote = true
      parsedInterval = interval.substring(interval.indexOf('(')+1, interval.indexOf(')'))
     }
    }
    parsedInterval = parseInt(parsedInterval, 10);
    scaleIndex = modulo(parsedInterval - 1, rootScaleLength) // convert from 1 indexed interval to 0 indexed note array
    chordNote = rootScale.notes[scaleIndex] // get note from root scale
    modifiedChordNote = adjustNoteBySteps(chordNote, noteModifier); // modify note +/- due to sharps or flats
    noteDescription = getFormattedLetterFromNote(modifiedChordNote, chordNotes);
    if (isOptionalNote) {
     noteDescription = `(${noteDescription})`;
    }
    chordDescription.push(noteDescription);
    chordNotes.push(modifiedChordNote);
   });
   return {
    name: `${getFormattedLetterFromNote(rootNote)} ${chordPrimitive.name}`,
    notes: chordNotes,
    type: chordPrimitive.type,
    description: chordDescription.join(', '),
   };
  });
  chords = [...chords, ...assembledChords];
 }
 return chords;
}

/**
 * @returns list of chord primitives
 */
const chordPrimitives = [
 {
  name: 'Major',
  intervals:  [1, 3, 5],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Sixth',
  intervals:  [1, 3, 5, 6],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Six Nine',
  intervals:  [1, 3, 5, 6, 9],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Added Ninth',
  intervals:  [1, 3, 5, 9],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Seventh',
  intervals:  [1, 3, 5, 7],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Seventh Flat Five',
  intervals:  [1, 3, 'b5', 7],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Seventh Sharp Five',
  intervals:  [1, 3, '#5', 7],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Ninth',
  intervals:  [1, 3, 5, 7, 9],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Eleventh',
  intervals:  [1, 3, 5, 7, '(9)', 11],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Thirteenth',
  intervals:  [1, 3, 5, 7, '(9)', '(11)', 13],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Seven Sharp Eleventh',
  intervals:  [1, 3, 5, 7, '#11'],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Major Flat Five',
  intervals:  [1, 3, 'b5'],
  type: chordOrScaleTypeConstant.MAJOR
 },
 {
  name: 'Minor',
  intervals:  [1, 'b3', 5],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Sixth',
  intervals:  [1, 'b3', 5, 6],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Seventh',
  intervals:  [1, 'b3', 5, 'b7'],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Added Ninth',
  intervals:  [1, 'b3', 5, 9],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Six Add Nine',
  intervals:  [1, 'b3', 5, 6, 9],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Ninth',
  intervals:  [1, 'b3', 5, 'b7', 9],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Eleventh',
  intervals:  [1, 'b3', 5, 'b7', '(9)', 11],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Thirteenth',
  intervals:  [1, 'b3', 5, 'b7', '(9)', '(11)', 13],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Major Seventh',
  intervals:  [1, 'b3', 5, 7],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Major Ninth',
  intervals:  [1, 'b3', 5, 7, 9],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Major Eleventh',
  intervals:  [1, 'b3', 5, 7, '(9)', 11],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Major Thirteenth',
  intervals:  [1, 'b3', 5, 7, '(9)', '(11)', 13],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Minor Seven Flat Fifth',
  intervals:  [1, 'b3', 'b5', 'b7'],
  type: chordOrScaleTypeConstant.MINOR
 },
 {
  name: 'Seventh',
  intervals:  [1, 3, 5, 'b7'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Ninth',
  intervals:  [1, 3, 5, 'b7', 9],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Eleventh',
  intervals:  [1, '(3)', 5, 'b7', '(9)', 11],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Thirteenth',
  intervals:  [1, 3, 5, 'b7', '(9)', '(11)', 13],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Sharp Five',
  intervals:  [1, 3, '#5', 'b7'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Flat Five',
  intervals:  [1, 3, 'b5', 'b7'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Flat Ninth',
  intervals:  [1, 3, 5, 'b7', 'b9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Sharp Ninth',
  intervals:  [1, 3, 5, 'b7', '#9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Nine Sharp Five',
  intervals:  [1, 3, '#5', 'b7', 9],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Nine Flat Five',
  intervals:  [1, 3, 'b5', 'b7', 9],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Sharp Five Sharp Nine',
  intervals:  [1, 3, '#5', 'b7', '#9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Sharp Five Flat Nine',
  intervals:  [1, 3, '#5', 'b7', 'b9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Flat Five Sharp Nine',
  intervals:  [1, 3, 'b5', 'b7', '#9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Flat Five Flat Nine',
  intervals:  [1, 3, 'b5', 'b7', 'b9'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Seven Sharp Eleven',
  intervals:  [1, 3, 5, 'b7', '#11'],
  type: chordOrScaleTypeConstant.DOMINANT
 },
 {
  name: 'Diminished',
  intervals:  [1, 'b3', 'b5'],
  type: chordOrScaleTypeConstant.SYMMETRICAL
 },
 {
  name: 'Diminished Seventh',
  intervals:  [1, 'b3', 'b5', 'bb7'],
  type: chordOrScaleTypeConstant.SYMMETRICAL
 },
 {
  name: 'Half Diminished',
  intervals:  [1, 'b3', 'b5', 'b7'],
  type: chordOrScaleTypeConstant.SYMMETRICAL
 },
 {
  name: 'Augmented',
  intervals:  [1, 3, '#5'],
  type: chordOrScaleTypeConstant.SYMMETRICAL
 },
 {
  name: 'Augmented Seventh',
  intervals:  [1, 3, '#5', 'b7'],
  type: chordOrScaleTypeConstant.SYMMETRICAL
 },
 {
  name: 'Fifth',
  intervals:  [1, 5],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Flat Fifth',
  intervals:  [1, 'b5'],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Suspended Fourth',
  intervals:  [1, 4, 5],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Suspended Second',
  intervals:  [1, 2, 5, '(9)'],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Suspended Seventh',
  intervals:  [1, 4, 5, 'b7'],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Sharp Eleven',
  intervals:  [1, 5, '#11'],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 }
];


module.exports = {
 chordPrimitives,
 compileChordPrimitivesIntoChords,
};