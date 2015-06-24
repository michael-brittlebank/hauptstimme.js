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
    },
    findSelectedNotes: function(containerId){
        var element = document.getElementById(containerId);
        var selectedNotes = [];
        var rootNote = null;
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].classList.contains(_chorus.data.dictionaries.fretClasses.string)) {
                    if (element.childNodes[i]) {
                        for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                            if (element.childNodes[i].childNodes[j].classList.contains(_chorus.data.dictionaries.fretClasses.selected)) {
                                selectedNotes.push(element.childNodes[i].childNodes[j]);
                            }
                            if (element.childNodes[i].childNodes[j].classList.contains(_chorus.data.dictionaries.fretClasses.root)) {
                                rootNote = element.childNodes[i].childNodes[j];
                            }
                        }
                    }
                }
            }
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.notFound+"no element found to search");
        }
        return {
            containerId: containerId,
            selectedNotes: selectedNotes,
            rootNote: rootNote
        }
    },
    filterNoteValue: function(note){
        var data = note;
        switch (note){
            case "G#/Ab":
                data = "Ab";
                break;
            case "A#/Bb":
                data = "Bb";
                break;
            case "C#/Db":
                data = "C#";
                break;
            case "D#/Eb":
                data = "Eb";
                break;
            case "F#/Gb":
                data = "Gb";
                break;
        }
        return data;
    }
};