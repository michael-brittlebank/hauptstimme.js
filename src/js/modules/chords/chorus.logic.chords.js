(function(){
    //variables
    var dataNotes = _chorus.data.notes,
        dataScales = _chorus.data.scales,
        dataChords = _chorus.data.chords,
        logicNotes = _chorus.logic.notes,
        helpers = _chorus.logic.helpers,
        events = _chorus.events,
        dictionary = _chorus.data.dictionary;

    //functions
    /**
     * compile logic for searchable chords
     */
    this.compile = function() {
        var rootName,
            rootScale,
            tones,
            letters,
            chordKey,
            chordName,
            chordGroup,
            majorScale,
            chordFormula,
            rawChordStep,
            cleanChordStep,
            adjustedTone,
            scaleTone,
            optionalNotes,
            output = {};
        for (var i = 0; i < dataNotes.count.tones; i++) {
            rootName = logicNotes.getNoteByToneDefault(i);
            rootScale = rootName+' Major Ionian';
            if (dataScales.searchable.main.hasOwnProperty(rootScale)) {
                majorScale = dataScales.searchable.main[rootScale];
            } else {
                //flatten the current tone to try and find the major scale
                var noteProgression = logicNotes.getNoteProgression(rootName);
                rootName = logicNotes.getNoteByToneForce(i,noteProgression[1]);
                rootScale = rootName+' Major Ionian';
                if (dataScales.searchable.main.hasOwnProperty(rootScale)) {
                    majorScale = dataScales.searchable.main[rootScale];
                }
            }
            if(majorScale && majorScale.hasOwnProperty('tones')){
                for (chordGroup in dataChords){
                    if (dataChords.hasOwnProperty(chordGroup) && chordGroup !== 'searchable' && chordGroup !== 'count') {
                        for (chordKey in dataChords[chordGroup]) {
                            if (dataChords[chordGroup].hasOwnProperty(chordKey)) {
                                chordFormula = dataChords[chordGroup][chordKey];
                                tones = [];
                                optionalNotes = [];
                                for (var j = 0; j < chordFormula.length; j++) {
                                    rawChordStep = chordFormula[j];
                                    if (typeof rawChordStep === 'string') {
                                        //special interval value
                                        if (rawChordStep.indexOf('b') !== -1) {
                                            if (rawChordStep.indexOf('bb') !== -1){
                                                //double flat notes
                                                cleanChordStep = parseInt(rawChordStep.substr(2, rawChordStep.length));
                                                scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                                adjustedTone = logicNotes.flattenTone(logicNotes.flattenTone(scaleTone));
                                            } else {
                                                //flat notes
                                                cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                                scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                                adjustedTone = logicNotes.flattenTone(scaleTone);
                                            }
                                        } else if (rawChordStep.indexOf('#') !== -1) {
                                            //sharp notes
                                            cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                            scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                            adjustedTone = logicNotes.sharpenTone(scaleTone);
                                        } else if (rawChordStep.indexOf('(') !== -1) {
                                            //optional notes
                                            cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length - 1));
                                            scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                            adjustedTone = scaleTone;
                                            optionalNotes.push(j);
                                        }
                                    } else {
                                        //raw int, no need to parse value
                                        scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(rawChordStep)];
                                        adjustedTone = scaleTone;
                                    }
                                    tones.push(adjustedTone);
                                }
                                chordName = rootName + ' ' + helpers.capitalize(chordKey.replace(/_/g, ' '));
                                letters = this.getNotesInChord(rootName, tones);
                                for(var k = 0;k < optionalNotes.length;k++){
                                    var entry = optionalNotes[k];
                                    letters[entry] = '('+letters[entry]+')';
                                }
                                if (!output.hasOwnProperty(chordGroup)){
                                    output[chordGroup] = {};
                                }
                                output[chordGroup][chordName] = {
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

    /**
     * convert from results arrays to the musical scale degree
     * @param {int} romanNumeral
     * @returns {number}
     */
    this.convertFromScaleDegreeToArrayIndex = function(romanNumeral){
        //arrays are zero indexed by scale degrees are 1 indexed
        return helpers.mod(romanNumeral-1,7);
    };

    /**
     * get the notes within a specific chord formula
     * @param {string} root
     * @param {Array} tones
     * @returns {Array}
     */
    this.getNotesInChord = function(root, tones){
        var letters = [root];
        for (var k = 1; k < tones.length; k++) {
            letters.push(logicNotes.getNoteByToneDefault(tones[k]));
        }
        return letters;
    };

    /**
     * main search function for searching chords
     * if container is passed, get selected notes from that DOM element
     * otherwise use the tones passed
     * @param {Array} [tones]
     * @param {string} [container]
     * @param {boolean} [searchedNotesAlready]
     * @param {function} [callback]
     */
    this.searchChords = function(tones, container, searchedNotesAlready, callback){
        events.dispatchEvent(_chorus.data.customEvents.chorusChordSearchStarted, 'chorusJS has started searching chords');
        if ((container || !tones) && !searchedNotesAlready){
            //get notes from dom if not passed to function
            this.searchChords(logicNotes.getSelectedNotes(container), container, true, callback);
        }
        else {
            var chordGroup,
                chordKey,
                flattenOutput = helpers.getConfigValue('flattenSearchResults', container) === true,
                data = {};
            data.resultsObject = {};
            data.resultsArray = flattenOutput?[]:{};
            //search for scales if there are selected notes
            if ((tones && tones.hasOwnProperty('selectedTones')) && tones.selectedTones.length > 0 || tones.rootTone.length > 0) {
                //search scales
                for (chordGroup in dataChords.searchable) {
                    if (dataChords.searchable.hasOwnProperty(chordGroup)) {
                        for (chordKey in dataChords.searchable[chordGroup]) {
                            if (dataChords.searchable[chordGroup].hasOwnProperty(chordKey)) {
                                if (logicNotes.tonesInScaleOrChord(dataChords.searchable[chordGroup][chordKey], tones)) {
                                    if (flattenOutput) {
                                        //flatten output
                                        data.resultsArray.push(helpers.convertResultsObjectToArray(chordKey,dataChords.searchable[chordGroup][chordKey]));
                                        data.resultsObject[chordKey] = dataChords.searchable[chordGroup][chordKey];
                                    } else {
                                        if (!data.resultsObject.hasOwnProperty(chordGroup)){
                                            data.resultsObject[chordGroup] = {};
                                        }
                                        if (!data.resultsArray.hasOwnProperty(chordGroup)){
                                            data.resultsArray[chordGroup] = [];
                                        }
                                        data.resultsObject[chordGroup][chordKey] = dataChords.searchable[chordGroup][chordKey];
                                        data.resultsArray[chordGroup].push(helpers.convertResultsObjectToArray(chordKey,dataChords.searchable[chordGroup][chordKey]));
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
            _chorus.searchResult.chords = data;
            events.dispatchEvent(_chorus.data.customEvents.chorusChordSearchComplete, 'chorusJS has finished searching chords');
            if (callback && typeof callback !== 'string') {
                callback(data);
            }
        }
    };

}).apply(_chorus.logic.chords);