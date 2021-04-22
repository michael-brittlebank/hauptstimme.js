const {compileScalePrimitivesIntoScales} = require('./data/scales.data')
const {compileChordPrimitivesIntoChords} = require('./data/chords.data')
const {getAvailableInstruments} = require('./data/instruments.data')
const {getChordsAndScalesByNotes} = require('./services/search.service')

const getAvailableData = () => {
 return new Promise((resolve, reject) => {
  const scales = compileScalePrimitivesIntoScales();
  const chords = compileChordPrimitivesIntoChords({scales});
  const instruments = getAvailableInstruments();
  resolve({
   chords,
   instruments,
   scales,
  });
 });
};

/**
 * @param searchRequest selected notes and optional root note to search for
 * @param scales list of scales to search in
 * @param chords list of chords to search in
 * @returns list of scales and chords that match the search request parameters
 */
const search = ({searchRequest, scales, chords}) => {
 return getChordsAndScalesByNotes({searchRequest, scales, chords});
}

module.exports = { getAvailableData, search}