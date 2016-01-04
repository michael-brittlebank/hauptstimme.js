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
            filteredChordStep,
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
                            console.log(root+' Major Ionian');
                            for (var j = 0; j < chordFormula.length; j++) {
                                rawChordStep = chordFormula[j];
                                if (typeof rawChordStep === 'string') {
                                    if (rawChordStep.indexOf('b') !== -1) {
                                        if (rawChordStep.indexOf('bb') !== -1){
                                            console.log('double flat');
                                            filteredChordStep = parseInt(rawChordStep.substr(2, rawChordStep.length));
                                            tones.push(majorScale.tones[logicNotes.flattenTone(logicNotes.flattenTone(filteredChordStep-1))]);
                                        } else {
                                            console.log('flat');
                                            filteredChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                            tones.push(majorScale.tones[logicNotes.flattenTone(filteredChordStep-1)]);
                                        }
                                    } else if (rawChordStep.indexOf('#') !== -1) {
                                        console.log('sharp');
                                        filteredChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length));
                                        tones.push(majorScale.tones[logicNotes.sharpenTone(filteredChordStep-1)]);
                                    } else if (rawChordStep.indexOf('(') !== -1) {
                                        console.log('parentheses');
                                        filteredChordStep = parseInt(rawChordStep.substr(1, rawChordStep.length - 1));
                                        tones.push(majorScale.tones[filteredChordStep-1]);//todo
                                    }
                                    console.log('filteredChordStep');
                                    console.log(filteredChordStep);
                                } else {
                                    console.log("int");
                                    console.log(rawChordStep);
                                    tones.push(majorScale.tones[rawChordStep-1]);
                                }
                            }
                            chordName = root + ' ' + helpers.capitalize(chordKey.replace(/_/g, ' '));
                            letters = this.getNotesInChord(root, tones);
                            console.log(output);
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