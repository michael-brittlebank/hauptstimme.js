const { noteConstant, letterConstant } = require('../constants');

/**
 * @param enumConstant any given enum
 * @returns length of given enum
 */
const getLengthOfEnum = (enumConstant) => {
 return Object.keys(enumConstant).length
}

/**
 * @param note the note to stringify
 * @param noteArray optional param to help determine whether to sharpen or flatten intermediate notes
 * @returns string representation of note constant
 */
const getFormattedNoteString = (note, noteArray = []) => {
 const sharpEntity = '♯';
 const flatEntity = '♭';
 let formattedNote = noteConstant[note];
 switch (note) {
  case noteConstant.AB:
   if (noteArray.indexOf(noteConstant.B) !== -1) {
    // a sharp
    formattedNote = [letterConstant.A, sharpEntity].join('');
   } else {
    // b flat
    formattedNote = [letterConstant.B, flatEntity].join('');
   }
   break;
  case noteConstant.CD:
   if (noteArray.indexOf(noteConstant.C) !== -1) {
    // d flat
    formattedNote = [letterConstant.D, flatEntity].join('');
   } else {
    // c sharp
    formattedNote = [letterConstant.C, sharpEntity].join('');
   }
   break;
  case noteConstant.DE:
   if (noteArray.indexOf(noteConstant.E) !== -1) {
    // d sharp
    formattedNote = [letterConstant.D, sharpEntity].join('');
   } else {
    // e flat
    formattedNote = [letterConstant.E, flatEntity].join('');
   }
   break;
  case noteConstant.FG:
   if (noteArray.indexOf(noteConstant.F) !== -1) {
    // a sharp
    formattedNote = [letterConstant.G, flatEntity].join('');
   } else {
    // f sharp
    formattedNote = [letterConstant.F, sharpEntity].join('');
   }
   break;
  case noteConstant.GA:
   if (noteArray.indexOf(noteConstant.A) !== -1) {
    // a sharp
    formattedNote = [letterConstant.G, sharpEntity].join('');
   } else {
    // a flat
    formattedNote = [letterConstant.A, flatEntity].join('');
   }
   break;
 }
 return formattedNote;
}

/**
 * @param enumConstant enum containing key
 * @param valueToMatch stringified enum value
 * @returns enum value from string key
 */
const getEnumFromIntegerValue = (enumConstant, valueToMatch) => {
 let enumKey = null;
 for (const [key, value] of Object.entries(enumConstant)) {
  if (value === valueToMatch) {
   enumKey = key;
   break;
  }
 }
 return enumKey;
}

/**
 * @param integer number to modulate
 * @param modulus number to modulate over
 * @returns modulo number consistent with other programming languages
 */
const modulo = (integer, modulus) => {
 return ((integer % modulus) + modulus) % modulus;
};

/**
 * @param note note to modulate
 * @param halfSteps number of half steps to add to note
 * @returns noteConstant after adding half steps
 */
const addHalfStepsToNote = (note, halfSteps) => {
 return adjustNoteByHalfSteps(note + halfSteps);
}

/**
 * @param note note to modulate
 * @param halfSteps number of half steps to remove from note
 * @returns noteConstant after subtracting half steps
 */
const subtractHalfStepsFromNote = (note, halfSteps) => {
 return adjustNoteByHalfSteps(note - halfSteps);
}

const adjustNoteByHalfSteps = (adjustedIndex) => {
 const noteLength = getLengthOfEnum(noteConstant);
 return getEnumFromIntegerValue(noteConstant, modulo(adjustedIndex, noteLength))
}

module.exports = {
 getLengthOfEnum,
 getFormattedNoteString,
 getEnumFromStringKey: getEnumFromIntegerValue,
 modulo,
 addHalfStepsToNote,
 subtractHalfStepsFromNote,
};