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

_chorus.logic.scales.searchScales = _chorus.searchScales = function(containerId){
    var data;
    if(containerId && containerId.length > 0){
        var notes = _chorus.logic.notes.findSelectedNotes(containerId);
        console.log("containerid passed");
        data = _chorus.logic.scales.scaleDrill(notes);
    }
    else {
        var instruments = document.getElementsByClassName(_chorus.data.dictionary.class_instrument);
        var results = [];
        for (var i = 0; i < instruments.length; i++){
            results.push(_chorus.logic.notes.findSelectedNotes(instruments[i].id));
        }
        console.log("searching across page");
        console.log(results);
    }
    _chorus.searchResult.scales = data;
    _chorus.events.dispatchEvent("chorusScaleSearchComplete","chorusJS has finished searching scales");
};

_chorus.logic.scales.scaleDrill = function(notes){
    console.log(notes);
    var data = {
        containerId: notes.containerId,
        scales: []
    };
    if (notes.hasOwnProperty("rootNote") && notes.rootNote){
        console.log("has root note");
    }
    else {
        console.log("doesn't have root note");
        if (notes.hasOwnProperty("selectedNotes") && notes.selectedNotes){

        }
    }
    return data;
};

