const { noteConstant, letterConstant, sharpEntity, flatEntity, noteLength } = require('../constants');

/**
 * @param note the note to stringify
 * @param noteArray optional param to help determine whether to sharpen or flatten intermediate notes
 * @returns string representation of note constant
 */
const getFormattedLetterFromNote = (note, noteArray = []) => {
 let formattedLetter = getLetterFromNote(note);
 switch (note) {
  case noteConstant.AB:
   if (noteArray.indexOf(noteConstant.B) !== -1) {
    // a sharp
    formattedLetter = [letterConstant.A, sharpEntity].join('');
   } else {
    // b flat
    formattedLetter = [letterConstant.B, flatEntity].join('');
   }
   break;
  case noteConstant.CD:
   if (noteArray.indexOf(noteConstant.C) !== -1) {
    // d flat
    formattedLetter = [letterConstant.D, flatEntity].join('');
   } else {
    // c sharp
    formattedLetter = [letterConstant.C, sharpEntity].join('');
   }
   break;
  case noteConstant.DE:
   if (noteArray.indexOf(noteConstant.E) !== -1) {
    // d sharp
    formattedLetter = [letterConstant.D, sharpEntity].join('');
   } else {
    // e flat
    formattedLetter = [letterConstant.E, flatEntity].join('');
   }
   break;
  case noteConstant.FG:
   if (noteArray.indexOf(noteConstant.F) !== -1) {
    // g flat
    formattedLetter = [letterConstant.G, flatEntity].join('');
   } else {
    // f sharp
    formattedLetter = [letterConstant.F, sharpEntity].join('');
   }
   break;
  case noteConstant.GA:
   if (noteArray.indexOf(noteConstant.A) !== -1) {
    // g sharp
    formattedLetter = [letterConstant.G, sharpEntity].join('');
   } else {
    // a flat
    formattedLetter = [letterConstant.A, flatEntity].join('');
   }
   break;
 }
 return formattedLetter;
}

/**
 * @param int note value
 * @returns string letter key
 */
const getLetterFromNote = (note) => {
 let letter = null;
 for (const [key, value] of Object.entries(noteConstant)) {
  if (value === note) {
   letter = key;
   break;
  }
 }
 return letter;
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
 return getLetterFromNote(modulo(adjustedIndex, noteLength))
}

module.exports = {
 getFormattedLetterFromNote,
 getLetterFromNote,
 modulo,
 addHalfStepsToNote,
 subtractHalfStepsFromNote,
};