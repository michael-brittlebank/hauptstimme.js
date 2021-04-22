const { chordOrScaleTypeConstant, noteLength } = require('../constants');
const { getFormattedLetterFromNote } = require('../services/util.service');

const compileScalePrimitivesIntoScales = () => {
 let scales = [];
 let scaleNotes;
 let rootNote;
 let noteIndex;
 let scaleDescription = [];
 let scalesForRootNote = []
 // loop through each possible root note
 for(let i = 0; i < noteLength; i+=1) {
  // compile each scale for the given root note
  scalesForRootNote = scalePrimitives.map((scalePrimitive) => {
   rootNote = i;
   noteIndex = i;
   scaleNotes = [rootNote];
   scaleDescription = [getFormattedLetterFromNote({note: rootNote})];
   // use the steps to determine the correct note sequence
   scalePrimitive.steps.forEach((step) => {
    noteIndex = (noteIndex + step) % noteLength;
    scaleNotes.push(noteIndex);
    scaleDescription.push(getFormattedLetterFromNote({note:noteIndex, noteArray:scaleNotes}));
   });
   // remove last element in array as it is the same as the first (root) note
   scaleNotes.splice(-1,1);
   scaleDescription.splice(-1,1);
   return {
    name: `${getFormattedLetterFromNote({note:rootNote})} ${scalePrimitive.name}`,
    notes: scaleNotes,
    type: scalePrimitive.type,
    description: scaleDescription.join(', ')
   };
  });
  scales = [...scales, ...scalesForRootNote]
 }
 return scales;
}

const scalePrimitives = [
 {
  name: 'Major Ionian',
  steps: [2, 2, 1, 2, 2, 2, 1],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Dorian',
  steps: [2, 1, 2, 2, 2, 1, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Phrygian',
  steps: [1, 2, 2, 2, 1, 2, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Lydian',
  steps: [2, 2, 2, 1, 2, 2, 1],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Mixolydian',
  steps: [2, 2, 1, 2, 2, 1, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Minor Aeolian',
  steps: [2, 1, 2, 2, 1, 2, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Locrian',
  steps: [1, 2, 2, 1, 2, 2, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Major Pentatonic',
  steps: [2, 2, 3, 2, 3],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Minor Pentatonic',
  steps: [3, 2, 2, 3, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Harmonic Minor',
  steps: [2, 1, 2, 2, 1, 3, 1],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Melodic Minor',
  steps: [2, 1, 2, 2, 2, 2, 1],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Blues',
  steps: [3, 2, 1, 1, 3, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Mixo Blues',
  steps: [2, 1, 1, 1, 1, 1, 2, 1, 2],
  type: chordOrScaleTypeConstant.MAIN
 },
 {
  name: 'Diminished Whole Half',
  steps: [2, 1, 2, 1, 2, 1, 2, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Diminished Half Whole',
  steps: [1, 2, 1, 2, 1, 2, 1, 2],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Whole Tone',
  steps: [2, 2, 2, 2, 2, 2],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Hungarian Minor',
  steps: [2, 1, 3, 1, 1, 3, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Hungarian Gypsy',
  steps: [2, 1, 3, 1, 1, 2, 2],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Double Harmonic',
  steps: [1, 3, 1, 2, 1, 3, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Enigmatic',
  steps: [1, 3, 2, 2, 2, 1, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Altered',
  steps: [1, 2, 1, 2, 2, 2, 2],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Major Neapolitan',
  steps: [1, 2, 2, 2, 2, 2, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Minor Neapolitan',
  steps: [1, 2, 2, 2, 1, 3, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Persian',
  steps: [1, 3, 1, 1, 2, 3, 1],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Ukranian Dorian',
  steps: [2, 1, 3, 1, 2, 1, 2],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 },
 {
  name: 'Yo',
  steps: [2, 3, 2, 2, 3],
  type: chordOrScaleTypeConstant.MISCELLANEOUS
 }
];

module.exports = {
 compileScalePrimitivesIntoScales,
 scalePrimitives,
};