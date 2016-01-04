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
        var root,
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
            output = {
                major:{},
                minor:{},
                dominant:{},
                symmetrical:{},
                miscellaneous:{}
            };
        for (var i = 0; i < dataNotes.count.tones; i++) {
            root = logicNotes.getNoteByToneDefault(i);
            majorScale = dataScales.searchable.main[root+' Major Ionian'];
            for (chordGroup in dataChords){
                if (dataChords.hasOwnProperty(chordGroup) && chordGroup !== 'searchable' && chordGroup !== 'count') {
                    for (chordKey in dataChords[chordGroup]) {
                        if (dataChords[chordGroup].hasOwnProperty(chordKey)) {
                            tones = [];
                            if (dataChords[chordGroup].hasOwnProperty(chordKey)) {
                                chordFormula = dataChords[chordGroup][chordKey];
                            } else {
                                console.log('try sharpening');
                                chordKeySharp = logicNotes.getNoteByToneForce(logicNotes.getToneByNote(chordKey)+1,chordKey);
                                chordFormula = dataChords[chordGroup][chordKeySharp];
                            }
                            console.log('root '+root);
                            for (var j = 0; j < chordFormula.length; j++) {
                                console.log('------start-------');
                                rawChordStep = chordFormula[j];
                                if (typeof rawChordStep === 'string') {
                                    if (rawChordStep.indexOf('b') !== -1) {
                                        if (rawChordStep.indexOf('bb') !== -1){
                                            cleanChordStep = parseInt(rawChordStep.substr(2, rawChordStep.length));
                                            scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                            adjustedTone = logicNotes.flattenTone(logicNotes.flattenTone(scaleTone));
                                            console.log('double flat');
                                            console.log('cleanChordStep');
                                            console.log(cleanChordStep);
                                        } else {
                                            cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                            scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                            adjustedTone = logicNotes.flattenTone(scaleTone);
                                            console.log('flat');
                                            console.log('cleanChordStep');
                                            console.log(cleanChordStep);
                                        }
                                    } else if (rawChordStep.indexOf('#') !== -1) {
                                        cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                        scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                        adjustedTone = logicNotes.sharpenTone(scaleTone);
                                        console.log('sharp');
                                        console.log('cleanChordStep');
                                        console.log(cleanChordStep);
                                    } else if (rawChordStep.indexOf('(') !== -1) {
                                        cleanChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length - 1));
                                        scaleTone = majorScale.tones[this.convertFromScaleDegreeToArrayIndex(cleanChordStep)];
                                        adjustedTone = scaleTone;//todo
                                        console.log('parentheses');
                                        console.log('cleanChordStep');
                                        console.log(cleanChordStep);
                                    }
                                    tones.push(adjustedTone);
                                    console.log('------complete-------');
                                    console.log('scaleTone');
                                    console.log(scaleTone);
                                    console.log('adjustedTone');
                                    console.log(adjustedTone);
                                } else {
                                    console.log("int");
                                    console.log(rawChordStep);
                                    console.log('------complete-------');
                                    tones.push(majorScale.tones[this.convertFromScaleDegreeToArrayIndex(rawChordStep)]);
                                }
                            }
                            console.log(root+' '+helpers.capitalize(chordKey.replace(/_/g, ' ')));
                            chordName = root + ' ' + helpers.capitalize(chordKey.replace(/_/g, ' '));
                            letters = this.getNotesInChord(root, tones);
                            //console.log(output);
                            console.log({
                                tones: tones,
                                letters: letters
                            });
                            throw new Error('first chodrd');
                            //output[chordGroup][chordName] = {
                            //    tones: tones,
                            //    letters: letters
                            //};
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