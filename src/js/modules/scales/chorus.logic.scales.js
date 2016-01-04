(function(){
    //variables
    var dataNotes = _chorus.data.notes,
        dataScales = _chorus.data.scales,
        logicNotes = _chorus.logic.notes,
        helpers = _chorus.logic.helpers,
        dictionary = _chorus.data.dictionary,
        events = _chorus.events,
        defaultConfig = _chorus.defaultConfig;

    //functions
    /**
     * compile logic
     */
    this.compile = function() {
        var root,
            tones,
            tone,
            letters,
            scale,
            scaleKey,
            scaleName,
            scaleArray,
            output = {
                main:{},
                other:{}
            };
        for (var i = 0; i < dataNotes.count.tones; i++) {
            root = logicNotes.getNoteByToneDefault(i);
            for (scale in dataScales){
                if (dataScales.hasOwnProperty(scale) && scale !== 'searchable' && scale !== 'count') {
                    for (scaleKey in dataScales[scale]) {
                        if (dataScales[scale].hasOwnProperty(scaleKey)) {
                            scaleArray = dataScales[scale][scaleKey];
                            tones = [i];
                            for (var j = 0; j < scaleArray.length - 1; j++) {
                                tone = (tones[j] + scaleArray[j]) % 12;
                                tones.push(tone);
                            }
                            letters = this.getNotesInScale(root, tones);
                            if (letters !== false) {
                                scaleName = letters[0] + ' ' + helpers.capitalize(scaleKey.replace(/_/g, ' '));
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
    };

    this.getNotesInScale = function(root, tones){
        var letters = [root],
            letterProgression = logicNotes.getNoteProgression(root);
        for (var k = 1; k < tones.length; k++) {
            if (tones.length == 7) {
                var letter = logicNotes.getNoteByToneForce(tones[k], letterProgression[k]);
                if (letter !== false){
                    letters.push(letter);
                }
                else {
                    if (root.indexOf('#') >= 0){
                        letters = this.getNotesInScale(letterProgression[1]+'b',tones);
                        break;
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                letters.push(logicNotes.getNoteByToneDefault(tones[k]));
            }
        }
        return letters;
    };

    /**
     * main search function for searching scales
     * if container is passed, get selected notes from that DOM element
     * otherwise use the tones passed
     * @type {Function}
     */
    this.searchScales = function(tones, scaleSearchMode, callback, container){
        if (container || !tones){
            //get notes from dom if not passed to function
            this.searchScales(logicNotes.getSelectedNotes(container), scaleSearchMode, callback);
        }
        else {
            var scaleKey,
                scalesToSearch,
                data = {};
            //search for scales if there are selected notes
            if (tones.selectedTones.length > 0 || tones.rootTone.length > 0) {
                //default scales to search
                if (!scaleSearchMode || scaleSearchMode.length < 1) {
                    scalesToSearch = defaultConfig.scaleSearchMode;
                }
                else if (!helpers.isValidScaleSearchMode(scaleSearchMode)) {
                    scalesToSearch = defaultConfig.scaleSearchMode;
                    events.sendMessage(dictionary.error_value + 'invalid scale search mode');
                }
                else {
                    scalesToSearch = scaleSearchMode;
                }
                //search scales
                if (scalesToSearch === 'main' || scalesToSearch === 'all') {
                    for (scaleKey in dataScales.searchable.main) {
                        if (dataScales.searchable.main.hasOwnProperty(scaleKey)) {
                            if (logicNotes.tonesInScaleOrChord(dataScales.searchable.main[scaleKey], tones)) {
                                data[scaleKey] = dataScales.searchable.main[scaleKey];
                            }
                        }
                    }
                }
                if (scalesToSearch === 'other' || scalesToSearch === 'all') {
                    for (scaleKey in dataScales.searchable.other) {
                        if (dataScales.searchable.other.hasOwnProperty(scaleKey)) {
                            if (logicNotes.tonesInScaleOrChord(dataScales.searchable.other[scaleKey], tones)) {
                                data[scaleKey] = dataScales.searchable.other[scaleKey];
                            }
                        }
                    }
                }
            }
            else {
                events.sendMessage(dictionary.error_notFound + 'no selected notes found');
            }
            _chorus.searchResult.scales = data;
            events.dispatchEvent('chorusScaleSearchComplete', 'chorusJS has finished searching scales');
            if (callback && typeof callback !== 'string') {
                callback(data);
            }
        }
    };

}).apply(_chorus.logic.scales);