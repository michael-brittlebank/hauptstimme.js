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
        var rootNote,
            tones,
            tone,
            letters,
            scaleGroup,
            scaleKey,
            scaleName,
            scaleArray,
            output = {};
        for (var i = 0; i < dataNotes.count.tones; i++) {
            rootNote = logicNotes.getNoteByToneDefault(i);
            for (scaleGroup in dataScales){
                if (dataScales.hasOwnProperty(scaleGroup) && scaleGroup !== 'searchable' && scaleGroup !== 'count') {
                    for (scaleKey in dataScales[scaleGroup]) {
                        if (dataScales[scaleGroup].hasOwnProperty(scaleKey)) {
                            scaleArray = dataScales[scaleGroup][scaleKey];
                            tones = [i];
                            for (var j = 0; j < scaleArray.length - 1; j++) {
                                tone = (tones[j] + scaleArray[j]) % 12;
                                tones.push(tone);
                            }
                            letters = this.getNotesInScale(rootNote, tones);
                            if (letters !== false) {
                                scaleName = letters[0] + ' ' + helpers.capitalize(scaleKey.replace(/_/g, ' '));
                                if (!output.hasOwnProperty(scaleGroup)){
                                    output[scaleGroup] = {};
                                }
                                output[scaleGroup][scaleName] = {
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

    this.getNotesInScale = function(rootNote, tones){
        var letters = [rootNote],
            letterProgression = logicNotes.getNoteProgression(rootNote);
        for (var k = 1; k < tones.length; k++) {
            if (tones.length == 7) {
                var letter = logicNotes.getNoteByToneForce(tones[k], letterProgression[k]);
                if (letter !== false){
                    letters.push(letter);
                }
                else {
                    if (rootNote.indexOf('#') >= 0){
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
    this.searchScales = function(tones, container, searchedNotesAlready, callback){
        events.dispatchEvent(_chorus.data.customEvents.chorusScaleSearchStarted, 'chorusJS has started searching scales');
        if ((container || !tones) && !searchedNotesAlready){
            //get notes from dom if not passed to function
            this.searchScales(logicNotes.getSelectedNotes(container), container, true, callback);
        }
        else {
            var scaleGroup,
                scaleKey,
                flattenOutput = helpers.getConfigValue('flattenSearchResults', container) === true,
                data = {};
            data.resultsObject = {};
            data.resultsArray = flattenOutput?[]:{};
            //search for scales if there are selected notes
            if ((tones && tones.hasOwnProperty('selectedTones')) && tones.selectedTones.length > 0 || tones.rootTone.length > 0) {
                //search scales
                for (scaleGroup in dataScales.searchable) {
                    if (dataScales.searchable.hasOwnProperty(scaleGroup)) {
                        for (scaleKey in dataScales.searchable[scaleGroup]) {
                            if (dataScales.searchable[scaleGroup].hasOwnProperty(scaleKey)) {
                                if (logicNotes.tonesInScaleOrChord(dataScales.searchable[scaleGroup][scaleKey], tones)) {
                                    if (flattenOutput) {
                                        //flatten output
                                        data.resultsArray.push(helpers.convertResultsObjectToArray(scaleKey,dataScales.searchable[scaleGroup][scaleKey]));
                                        data.resultsObject[scaleKey] = dataScales.searchable[scaleGroup][scaleKey];
                                    } else {
                                        if (!data.resultsObject.hasOwnProperty(scaleGroup)){
                                            data.resultsObject[scaleGroup] = {};
                                        }
                                        if (!data.resultsArray.hasOwnProperty(scaleGroup)){
                                            data.resultsArray[scaleGroup] = [];
                                        }
                                        data.resultsObject[scaleGroup][scaleKey] = dataScales.searchable[scaleGroup][scaleKey];
                                        data.resultsArray[scaleGroup].push(helpers.convertResultsObjectToArray(scaleKey,dataScales.searchable[scaleGroup][scaleKey]));
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                events.sendMessage(dictionary.errorNotFound + 'no selected notes found');
            }
            _chorus.searchResult.scales = data;
            events.dispatchEvent(_chorus.data.customEvents.chorusScaleSearchComplete, 'chorusJS has finished searching scales');
            if (callback && typeof callback !== 'string') {
                callback(data);
            }
        }
    };

}).apply(_chorus.logic.scales);