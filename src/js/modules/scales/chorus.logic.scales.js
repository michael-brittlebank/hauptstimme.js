_chorus.logic.scales = _chorus.logic.scales || {
    /**
     *
     */
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
            return letters;
        }
    }
};

/**
 * main search function for searching scales
 * if container is passed, get selected notes from that DOM element
 * otherwise use the tones passed
 * @type {Function}
 */
_chorus.logic.scales.searchScales = _chorus.searchScales = function(tones, scaleSearchMode, callback, container){
    if (container || !tones){
        _chorus.searchScales(_chorus.logic.notes.getSelectedNotes (container), scaleSearchMode, callback);
    }
    else {
        var scaleKey,
            scalesToSearch,
            data = {};
        //search for scales if there are selected notes
        if (tones.selectedTones.length > 0 || tones.rootTone.length > 0) {
            //default scales to search
            if (!scaleSearchMode || scaleSearchMode.length < 1) {
                scalesToSearch = _chorus.defaultConfig.scaleSearchMode;
            }
            else if (!_chorus.logic.helpers.validator.isValidScaleSearchMode(scaleSearchMode)) {
                scalesToSearch = _chorus.defaultConfig.scaleSearchMode;
                _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_value + "invalid scale search mode");
            }
            else {
                scalesToSearch = scaleSearchMode;
            }
            //search scales
            if (scalesToSearch === "main" || scalesToSearch === "all") {
                for (scaleKey in _chorus.data.scales.searchable.main) {
                    if (_chorus.data.scales.searchable.main.hasOwnProperty(scaleKey)) {
                        if (_chorus.logic.scales.scaleContains(_chorus.data.scales.searchable.main[scaleKey], tones)) {
                            data[scaleKey] = _chorus.data.scales.searchable.main[scaleKey];
                        }
                    }
                }
            }
            if (scalesToSearch === "other" || scalesToSearch === "all") {
                for (scaleKey in _chorus.data.scales.searchable.other) {
                    if (_chorus.data.scales.searchable.other.hasOwnProperty(scaleKey)) {
                        if (_chorus.logic.scales.scaleContains(_chorus.data.scales.searchable.other[scaleKey], tones)) {
                            data[scaleKey] = _chorus.data.scales.searchable.other[scaleKey];
                        }
                    }
                }
            }
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_notFound + "no selected notes found");
        }
        _chorus.searchResult.scales = data;
        _chorus.events.dispatchEvent("chorusScaleSearchComplete", "chorusJS has finished searching scales");
        if (callback && typeof callback !== "string") {
            callback(data);
        }
    }
};

/**
 * return if the scale contains the selected tones or not
 * @param scale
 * @param notes
 * @returns {boolean}
 */
_chorus.logic.scales.scaleContains = function(scale, notes){
    if (notes.rootTone.length > 0){
        if (scale.tones[0] == notes.rootTone){
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

/**
 * return if the all of the selected tones exist in the scale
 * @param scaleNotes
 * @param selectedNotes
 * @returns {boolean}
 */
_chorus.logic.scales.tonesInScale = function(scaleNotes,selectedNotes){
    for(var i = 0; i < selectedNotes.length; i++){
        if (scaleNotes.indexOf(parseInt(selectedNotes[i])) === -1){
            return false;
        }
    }
    return true;
};

