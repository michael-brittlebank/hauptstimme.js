const searchListByNotes = ({listToSearch, notesArray = [], rootNote}) => {
 return new Promise((resolve, reject) => {
  const filteredList = listToSearch.filter((listItem) => {
   if (typeof rootNote === 'number' && listItem.notes[0] !== rootNote) {
    // fail fast on root note queries
    return false;
   }
   for (let i = 0; i < notesArray.length; i++) {
    if (listItem.notes.indexOf(notesArray[i]) === -1) {
     return false;
    }
   }
   return true;
  });
  resolve(filteredList);
 });
}

const getChordsAndScalesByNotes = ({searchRequest, scales, chords}) => {
 return new Promise((resolve, reject) => {
  return Promise.all([
   searchListByNotes({listToSearch: chords, notesArray: searchRequest.notes, rootNote: searchRequest.rootNote}),
   searchListByNotes({listToSearch: scales, notesArray: searchRequest.notes, rootNote: searchRequest.rootNote})
  ])
    .then((response) => {
     const searchResults = {
      chords: response[0],
      scales: response[1]
     };
     resolve(searchResults);
    })
    .catch((error) => {
     console.warn(error);
    });
 });
}

module.exports = {
 searchListByNotes,
 getChordsAndScalesByNotes,
};