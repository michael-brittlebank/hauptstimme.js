_chorus.logic.notes = _chorus.logic.notes || {
    getToneByNote: function (note){
        var tone = _chorus.data.notes.letter[note.substring(0,1)];
        var start = 0;
        while (note.indexOf("#",start)!==-1){
            start = note.indexOf("#",start)+1;
            tone++;
        }
        start = 0;
        while (note.indexOf("b",start)!==-1){
            start = note.indexOf("b",start)+1;
            tone--;
        }
        return (tone % 12);
    },
    getFlatNoteByTone: function(tone){
        return _chorus.data.notes.tone[(tone + 1)%12] + "b";
    },
    getSharpNoteByTone: function(tone){
        return _chorus.data.notes.tone[(tone - 1)%12] + "#";
    },
    getNoteByToneDisplay: function(tone){
        var letter;
        if (_chorus.data.notes.tone.hasOwnProperty(tone)) {
            letter = _chorus.data.notes.tone[tone];
        }
        else {
            letter = _chorus.logic.notes.getFlatNoteByTone(tone)+" / "+_chorus.logic.notes.getSharpNoteByTone(tone);
        }
        return letter;
    },
    getNoteByToneDefault: function(tone){
        var letter;
        if (_chorus.data.notes.tone.hasOwnProperty(tone)) {
            letter = _chorus.data.notes.tone[tone];
        }
        else {
            letter = _chorus.logic.notes.getSharpNoteByTone(tone);
        }
        return letter;
    },
    getNoteByToneForce: function(tone,letter) {
        var difference = tone - _chorus.logic.notes.getToneByNote(letter);
        if (difference > _chorus.data.notes.count.tones/2) {
            difference -= _chorus.data.notes.count.tones;
        }
        if (difference < _chorus.data.notes.count.tones/2*-1) {
            difference += _chorus.data.notes.count.tones;
        }
        if (difference != 0) {
            if (_chorus.data.notes.tone.hasOwnProperty(tone)){
                return false
            }
            if (difference > 0) {
                for (var i = 0; i < difference; i++) {
                    letter += "#";
                }
            }
            else if (difference < 0) {
                for (var j = 0; j > difference; j--) {
                    letter += "b";
                }
            }
        }
        return letter;
    },
    getLetterProgression: function(letter){
        var pieces = 'ABCDEFG'.split(letter.replace(/b/g,"").replace(/#/g,"").toUpperCase());
        return [letter].concat(pieces[1].split(""),pieces[0].split(""));
    },
    getToneByClass: function(s_class){
        return s_class.substring(s_class.lastIndexOf(_chorus.data.dictionary.class_tone)+1);
    }
};
_chorus.logic.notes.findSelectedTones = _chorus.findSelectedTones = function(containerId){
    var classlist;
    var element = document.getElementById(containerId);
    var selectedTones = [];
    var rootNote = null;
    if (element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].classList.contains(_chorus.data.dictionary.class_string)) {
                if (element.childNodes[i]) {
                    for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                        classlist = element.childNodes[i].childNodes[j].classList;
                        if (classlist.contains(_chorus.data.dictionary.class_selected) || classlist.contains(_chorus.data.dictionary.class_root)) {
                            for (var k = 0; k < classlist.length; k++){
                                if (classlist[k].indexOf(_chorus.dictionary.class_tone) !== -1){
                                    if (classlist.contains(_chorus.data.dictionary.class_selected)){
                                        selectedTones.push(_chorus.logic.notes.getToneByClass(classlist[k]));
                                    }
                                    else if (classlist.contains(_chorus.data.dictionary.class_root)){
                                        rootNote = _chorus.logic.notes.getToneByClass(classlist[k]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound+"no element found to search");
    }
    return {
        containerId: containerId,
        selectedTones: selectedTones,
        rootNote: rootNote
    }
}