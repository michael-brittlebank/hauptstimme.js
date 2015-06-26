_chorus.logic.notes = _chorus.logic.notes || {
    getToneByNote: function (note){
        var tone = _chorus.data.notes.letter[note.substring(0,1)];
        var start = 0;
        console.log(tone);
        while (note.indexOf("#",start)!==-1){
            start = note.indexOf("#",start);
            tone++;
        }
        start = 0;
        while (note.indexOf("b",start)!==-1){
            start = note.indexOf("b",start);
            tone--;
        }
        console.log(tone);
        return (tone % 12);
    },
    getNoteByToneDefault: function(tone){
        var letter;
        if (_chorus.data.notes.tone.hasOwnProperty(tone)) {
            letter = _chorus.data.notes.tone[tone];
        }
        else {
            if (tone !== 4) {
                letter = _chorus.data.notes.tone[(tone + 1)%12] + "b";
            }
            else {
                letter = _chorus.data.notes.tone[(tone - 1)%12] + "#";
            }
        }
        return letter;
    },
    getNoteByToneForce: function(tone,note) {
        var letter = note;
        var difference = tone - _chorus.logic.notes.getToneByNote(note);
        if (difference > 0){
            for (var i = 0; i < difference; i++){
                letter += "#";
            }
        }
        else if (difference < 0){
            for (var j = 0; j < difference; j++){
                letter += "b";
            }
        }
        return letter;
    },
    getLetterProgression: function(letter){
        var pieces = 'ABCDEFG'.split(letter.replace(/b/g,"").replace(/#/g,"").toUpperCase());
        return [letter].concat(pieces[1].split(""),pieces[0].split(""));
    },
    findSelectedNotes: function(containerId){
        var element = document.getElementById(containerId);
        var selectedNotes = [];
        var rootNote = null;
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].classList.contains(_chorus.data.dictionary.class_string)) {
                    if (element.childNodes[i]) {
                        for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                            if (element.childNodes[i].childNodes[j].classList.contains(_chorus.data.dictionary.class_selected)) {
                                selectedNotes.push(element.childNodes[i].childNodes[j]);
                            }
                            if (element.childNodes[i].childNodes[j].classList.contains(_chorus.data.dictionary.class_root)) {
                                rootNote = element.childNodes[i].childNodes[j];
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
            selectedNotes: selectedNotes,
            rootNote: rootNote
        }
    }
};