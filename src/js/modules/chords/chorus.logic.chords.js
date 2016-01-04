(function(){
    //variables
    var dataNotes = _chorus.data.notes,
        dataScales = _chorus.data.scales,
        dataChords = _chorus.data.chords,
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
        var rootName,
            rootScale,
            tones,
            letters,
            chordKeySharp,
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
            output = {
                major:{},
                minor:{},
                dominant:{},
                symmetrical:{},
                miscellaneous:{}
            };
        for (var i = 0; i < dataNotes.count.tones; i++) {
            rootName = logicNotes.getNoteByToneDefault(i);
            rootScale = rootName+' Major Ionian';
            if (dataScales.searchable.main.hasOwnProperty(rootScale)) {
                majorScale = dataScales.searchable.main[rootScale];
            } else {
                //sharpen the current tone to try and find the major scale
                rootName = logicNotes.getNoteByToneDefault(logicNotes.sharpenTone(i));
                rootScale = rootName+' Major Ionian';
                majorScale = dataScales.searchable.main[rootScale];
            }
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
                            output[chordGroup][chordName] = {
                                tones: tones,
                                letters: letters
                            };
                        }
                    }
                }
            }
        }
        return JSON.stringify(output);
    };

    this.convertFromScaleDegreeToArrayIndex = function(romanNumeral){
        //arrays are zero indexed by scale degrees are 1 indexed
        return (romanNumeral-1)%7;
    };

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
     * @type {Function}
     */
    this.searchChords = function(tones, chordSearchMode, callback, container){
        if (container || !tones){
            //get notes from dom if not passed to function
            this.searchChords(logicNotes.getSelectedNotes(container), chordSearchMode, callback);
        }
        else {
            console.log('search chords');
            //todo
        }
    };

}).apply(_chorus.logic.chords);