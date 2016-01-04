(function(){
    //variables
    var dataNotes = _chorus.data.notes,
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
            tone,
            letters,
            chord,
            chordKey,
            chordName,
            chordArray,
            output = {
                main:{},
                minor:{},
                dominant:{},
                symmetrical:{},
                miscellaneous:{}
            };
        for (var i = 0; i < dataNotes.count.tones; i++) {
            root = logicNotes.getNoteByToneDefault(i);
            for (chord in dataChords){
                if (dataChords.hasOwnProperty(chord) && chord !== 'searchable' && chord !== 'count') {
                    for (chordKey in dataChords[chord]) {
                        if (dataChords[chord].hasOwnProperty(chordKey)) {
                            chordArray = dataChords[chord][chordKey];
                            tones = [i];
                            for (var j = 0; j < chordArray.length - 1; j++) {
                                tone = (tones[j] + chordArray[j]) % 12;
                                tones.push(tone);
                            }
                            letters = this.getNotesInChord(root, tones);
                            if (letters !== false) {
                                chordName = letters[0] + ' ' + helpers.capitalize(chordKey.replace(/_/g, ' '));
                                output[chord][chordName] = {
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

    this.getNotesInChord = function(root, tones){
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
                        letters = this.getNotesInChord(letterProgression[1]+'b',tones);
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