_chorus.logic.scales = _chorus.logic.scales || {
    compile: {
        init: function() {
            var root, tones, tone, letters, scale, scaleKey, scaleName, scaleArray;
            var output = {
                main:{},
                other: {}
            };
            for (var i = 0; i < _chorus.data.notes.count.tones; i++) {
                root = _chorus.logic.notes.getNoteByToneDefault(i);
                for (scale in _chorus.data.scales){
                    if (_chorus.data.scales.hasOwnProperty(scale) && scale !== "searchable" && scale !== "count") {
                        for (scaleKey in _chorus.data.scales[scale]) {
                            if (_chorus.data.scales[scale].hasOwnProperty(scaleKey)) {
                                scaleArray = _chorus.data.scales[scale][scaleKey];
                                tones = [i];
                                for (var j = 0; j < scaleArray.length - 1; j++) {
                                    tone = (tones[j] + scaleArray[j]) % 12;
                                    tones.push(tone);
                                }
                                letters = _chorus.logic.scales.compile.getLetters(root, tones);
                                if (letters !== false) {
                                    scaleName = letters[0] + " " + _chorus.logic.helpers.capitalize(scaleKey.replace(/_/g, " "));
                                    output[scale][scaleName] = {
                                        tones: tones,
                                        letters: letters
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return JSON.stringify(output);
        },
        getLetters: function(root, tones){
            var letters = [root];
            var letterProgression = _chorus.logic.notes.getLetterProgression(root);
            for (var k = 1; k < tones.length; k++) {
                if (tones.length == 7) {
                    var letter = _chorus.logic.notes.getNoteByToneForce(tones[k], letterProgression[k]);
                    if (letter !== false){
                        letters.push(letter);
                    }
                    else {
                        if (root.indexOf("#") >= 0){
                            letters = _chorus.logic.scales.compile.getLetters(letterProgression[1]+"b",tones);
                            break;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    letters.push(_chorus.logic.notes.getNoteByToneDefault(tones[k]));
                }
            }
            return letters
        }
    }
};

_chorus.logic.scales.searchScales = _chorus.searchScales = function(container){
    var parameterError = false;
    var noteData = [];
    var notes = {
        rootNote: "",
        selectedTones:[],
        containers: []
    };
    if(container && container.length > 0){
        var containerById = document.getElementById(container);
        var containerByClass = document.getElementsByClassName(container);
        if (containerById){
            noteData.push(_chorus.logic.notes.findSelectedTones(containerById));
        }
        else if (containerByClass){
            for (var i = 0; i < containerByClass.length; i++){
                noteData.push(_chorus.logic.notes.findSelectedTones(containerByClass[i]));
            }
        }
        else {
            parameterError = true;
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound+"no container found with matching id or class");
        }
    }
    else {
        var containerByDefaultClass = document.getElementsByClassName(_chorus.data.dictionary.class_instrument);
        for (var j = 0; j < containerByDefaultClass.length; j++){
            noteData.push(_chorus.logic.notes.findSelectedTones(containerByDefaultClass[j]));
        }
    }
    if (noteData.length > 0){
        for (var k = 0; k < noteData.length; k++){
            notes.containers.push(noteData[k].container);
            if (noteData[k].rootNote.length > 0){
                if (notes.rootNote.length < 1){
                    notes.rootNote = noteData[k].rootNote;
                }
                else {
                    _chorus.events.messages.sendMessage(_chorus.data.dictionary.warning_multipleRootNotes);
                }
            }
            for (var l = 0; l < noteData[k].selectedTones.length; l++){
                if (notes.selectedTones.indexOf(noteData[k].selectedTones[l]) == -1){
                    notes.selectedTones.push(noteData[k].selectedTones[l]);
                }
            }
        }
        _chorus.searchResult.scales = _chorus.logic.scales.scaleDrill(notes);
    }
    else if (!parameterError) {
        _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound + "no selected notes found");
    }
    console.log("scale search result");
    console.log(_chorus.searchResult.scales);
    _chorus.events.dispatchEvent("chorusScaleSearchComplete","chorusJS has finished searching scales");
};

_chorus.logic.scales.scaleDrill = function(notes){
    console.log("scale drill init");
    console.log(notes);
    var data = {
        containers: notes.containers,
        scales: []
    };
    if (notes.hasOwnProperty("rootNote") && notes.rootNote){
        console.log("has root note");
    }
    else {
        console.log("doesn't have root note");
        if (notes.hasOwnProperty("selectedTones") && notes.selectedTones){

        }
    }
    return data;
};

