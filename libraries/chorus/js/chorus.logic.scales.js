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

_chorus.logic.scales.searchScales = _chorus.searchScales = function(container, scaleSearchMode, callback){
    var scaleKey,
        scalesToSearch,
        parameterError = false,
        noteData = [],
        notes = {
            rootNote: "",
            selectedTones:[]
        },
        data = {
            containers: [],
            scales: {}
        };
    //default scales to search
    if (!scaleSearchMode || scaleSearchMode.length < 1){
        scalesToSearch = _chorus.defaultConfig.scaleSearchMode;
    }
    else if (!_chorus.logic.helpers.validator.isValidScaleSearchMode(scaleSearchMode)){
        scalesToSearch = _chorus.defaultConfig.scaleSearchMode;
        _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_value+"invalid scale search mode");
    }
    //search for selected notes by container id or class
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
    //get selected notes if no container parameter was passed
    else {
        var containerByDefaultClass = document.getElementsByClassName(_chorus.data.dictionary.class_instrument);
        for (var j = 0; j < containerByDefaultClass.length; j++){
            noteData.push(_chorus.logic.notes.findSelectedTones(containerByDefaultClass[j]));
        }
    }
    //search for scales if there are selected notes
    if (noteData.length > 0){
        //remove duplicates
        for (var k = 0; k < noteData.length; k++){
            data.containers.push(noteData[k].container);
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
        if (notes.selectedTones.length > 0 || notes.rootNote.length > 0) {
            //search scales
            if (scalesToSearch === "main" || scalesToSearch === "all") {
                for (scaleKey in _chorus.data.scales.searchable.main) {
                    if (_chorus.data.scales.searchable.main.hasOwnProperty(scaleKey)) {
                        if (_chorus.logic.scales.scaleContains(_chorus.data.scales.searchable.main[scaleKey], notes)) {
                            data.scales[scaleKey] = _chorus.data.scales.searchable.main[scaleKey];
                        }
                    }
                }
            }
            if (scalesToSearch === "other" || scalesToSearch === "all") {
                for (scaleKey in _chorus.data.scales.searchable.other) {
                    if (_chorus.data.scales.searchable.other.hasOwnProperty(scaleKey)) {
                        if (_chorus.logic.scales.scaleContains(_chorus.data.scales.searchable.other[scaleKey], notes)) {
                            data.scales[scaleKey] = _chorus.data.scales.searchable.other[scaleKey];
                        }
                    }
                }
            }
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound + "no selected notes found");
        }
    }
    else if (!parameterError) {
        _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound + "no containers found");
    }
    _chorus.searchResult.scales = data;
    _chorus.events.dispatchEvent("chorusScaleSearchComplete","chorusJS has finished searching scales");
    if(callback && typeof callback !== "string"){
         callback(data);
    }
};

_chorus.logic.scales.scaleContains = function(scale, notes){
    if (notes.rootNote.length > 0){
        if (scale.tones[0] == notes.rootNote){
            return _chorus.logic.scales.tonesInScale(scale.tones,notes.selectedTones);
        }
        else {
            return false;
        }
    }
    else {
        return _chorus.logic.scales.tonesInScale(scale.tones,notes.selectedTones);
    }
};

_chorus.logic.scales.tonesInScale = function(scaleNotes,selectedNotes){
    for(var i = 0; i < selectedNotes; i++){
        if (scaleNotes.indexOf(selectedNotes[i]) === -1){
            return false;
        }
    }
    return true;
};

