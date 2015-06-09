_chorus.logic.notes = _chorus.logic.notes || {
    getNoteById : function(noteId){
        if (0 <= noteId && noteId < 12){
            return String(_chorus.data.notes[noteId]);
        }
        else {
            return false;
        }
    },
    getNoteByName : function(noteName){
        for(var key in _chorus.data.notes) {
            if(_chorus.data.notes.hasOwnProperty(key)) {
                if(_chorus.data.notes[key].toLowerCase() === noteName.toLowerCase()) {
                    return key;
                }
            }
        }
        return false;
    }
};