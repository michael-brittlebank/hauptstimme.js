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
            scaleGroup,
            scaleKey,
            scaleName,
            scaleArray,
            output = {};
        for (var i = 0; i < dataNotes.count.tones; i++) {
            root = logicNotes.getNoteByToneDefault(i);
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
                            letters = this.getNotesInScale(root, tones);
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
    this.searchScales = function(tones, container, callback){
        if (container || !tones){
            //get notes from dom if not passed to function
            this.searchScales(logicNotes.getSelectedNotes(container), container, callback);
        }
        else {
            var scaleGroup,
                scaleKey,
                flattenOutput = helpers.getConfigValue('flattenSearchResults') === true,
                data = {};
            //search for scales if there are selected notes
            if (tones.selectedTones.length > 0 || tones.rootTone.length > 0) {
                //search scales
                for (scaleGroup in dataScales.searchable) {
                    if (dataScales.searchable.hasOwnProperty(scaleGroup)) {
                        for (scaleKey in dataScales.searchable[scaleGroup]) {
                            if (dataScales.searchable[scaleGroup].hasOwnProperty(scaleKey)) {
                                if (logicNotes.tonesInScaleOrChord(dataScales.searchable[scaleGroup][scaleKey], tones)) {
                                    if (flattenOutput) {
                                        //flatten output
                                        data[scaleKey] = dataScales.searchable[scaleGroup][scaleKey];
                                    } else {
                                        if (!data.hasOwnProperty(scaleGroup)){
                                            data[scaleGroup] = {};
                                        }
                                        data[scaleGroup][scaleKey] = dataScales.searchable[scaleGroup][scaleKey];
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                events.sendMessage(dictionary.error_notFound + 'no selected notes found');
            }
            _chorus.searchResult.scales = data;
            events.dispatchEvent(_chorus.data.customEvents.chorusScaleSearchComplete, 'chorusJS has finished searching scales');
            if (callback && typeof callback !== 'string') {
                callback(data);
            }
        }
    };

}).apply(_chorus.logic.scales);