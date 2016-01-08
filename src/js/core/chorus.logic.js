/**
 * helpers
 */
(function(){
    //variables
    var dictionary = _chorus.data.dictionary,
        domData = _chorus.data.domData,
        defaultConfig = _chorus.defaultConfig;

    //functions
    /**
     * get a random string
     * @param length
     * @returns {*}
     */
    this.generateRandomString = function(length){
        var output;
        for(output = ''; output.length < length;) {
            output += Math.random().toString(36).substr(2, 1);
        }
        return output;
    };

    /**
     * make a copy of a JS object
     * @param from
     * @param to
     * @returns {*}
     */
    this.cloneObject = function(from, to) {
        if (from ==+ null || typeof from !== 'object'){
            return from;
        }
        if (from.constructor != Object && from.constructor != Array){
            return from;
        }
        if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function || from.constructor == String || from.constructor == Number || from.constructor == Boolean){
            return new from.constructor(from);
        }
        to = to || new from.constructor();
        for (var name in from) {
            to[name] = typeof to[name] == 'undefined' ? this.cloneObject(from[name], null) : to[name];
        }
        return to;
    };

    /**
     * get the config value for the key passed or return the default if none available
     * @param key
     * @param container
     * @returns {*}
     */
    this.getConfigValue = function(key, container){
        var configId = _chorus.config.currentConfig;
        if(container){
            configId = document.getElementById(container).getAttribute(domData.config);
            if (configId) {
                if (typeof _chorus.config[configId][key] !== typeof _chorus.defaultConfig[key]) {
                    _chorus.events.sendMessage(dictionary.error_type + ' ' + key);
                }
                return typeof _chorus.config[configId][key] === typeof defaultConfig[key] ? _chorus.config[configId][key] : defaultConfig[key];
            } else {
                return false;
            }
        } else if (configId && configId.length > 0) {
            if (typeof _chorus.config[configId][key] !== typeof _chorus.defaultConfig[key]){
                _chorus.events.sendMessage(dictionary.error_type+' '+key);
            }
            return typeof _chorus.config[configId][key] === typeof defaultConfig[key]?_chorus.config[configId][key]:defaultConfig[key];
        } else {
            return false;
        }
    };

    /**
     * get the object key given the value
     * @param object
     * @param value
     * @returns {string}
     */
    this.getKeyFromValue = function(object, value){
        for(var prop in object) {
            if(object.hasOwnProperty(prop)) {
                if(object[prop] === value) {
                    return prop;
                }
            }
        }
        return false;
    };

    /**
     * gets the size of a one dimensional object
     * @param object
     * @returns {number}
     */
    this.countObjectLength = function(object){
        var key,
            i = 0;
        for(key in object){
            if (object.hasOwnProperty(key)){
                i++;
            }
        }
        return i;
    };

    /**
     * capitalize all of the words in a string
     * @param string
     * @returns {string}
     */
    this.capitalize = function(string){
        return string.toLowerCase().replace( /\b\w/g, function (m) {
            return m.toUpperCase();
        });
    };

    this.mod = function(number,modulus) {
        return ((number%modulus)+modulus)%modulus;
    };

    this.searchComplete = function(callback){
        var configCallback = this.getConfigValue('searchCallback');
        if (callback && typeof callback !== 'string') {
            callback(_chorus.searchResult);
        } else if (configCallback && typeof configCallback === 'string') {
            window[configCallback](_chorus.searchResult);
        }
        _chorus.events.dispatchEvent(_chorus.data.customEvents.chorusSearchComplete, 'chorusJS has finished searching scales and chords');
    };

    this.convertResultsObjectToArray = function(name, resultsObject){
        return {
            name: name,
            tones: resultsObject.tones,
            letters: resultsObject.letters
        };
    };

    this.getDomRepresentationFromStringName = function(container){
        var containerById = document.getElementById(container),
            containerByClass = document.getElementsByClassName(container),
            result = [];
        if (containerById){
            result.push(containerById);
        } else if (containerByClass){
            for(var i = 0; i < containerByClass.length; i++){
                result.push(containerByClass[i]);
            }
        }
        return result;
    };

}).apply(_chorus.logic.helpers);


/**
 * notes
 */
(function(){
    //variables
    var dictionary = _chorus.data.dictionary,
        domData = _chorus.data.domData,
        notes = _chorus.data.notes,
        events = _chorus.events,
        helpers = _chorus.logic.helpers,
        logicNotes = _chorus.logic.notes;

    //functions
    /**
     * get the tone (int) given the note (char)
     * @param note
     * @returns {number}
     */
    this.getToneByNote = function (note){
        var tone = notes.letter[note.substring(0,1)],
            start = 0;
        while (note.indexOf('#',start)!==-1){
            start = note.indexOf('#',start)+1;
            tone++;
        }
        start = 0;
        while (note.indexOf('b',start)!==-1){
            start = note.indexOf('b',start)+1;
            tone--;
        }
        return helpers.mod(tone,12);
    };

    this.sharpenTone = function(tone){
        return helpers.mod(tone + 1,12);
    };

    this.flattenTone = function(tone){
        return helpers.mod(tone - 1,12);
    };

    /**
     * get the flat note from the int
     * @param tone
     * @returns {string}
     */
    this.getFlatNoteByTone = function(tone){
        return notes.tone[this.sharpenTone(tone)] + 'b';
    };

    /**
     * get the sharp note from the int
     * @param tone
     * @returns {string}
     */
    this.getSharpNoteByTone = function(tone){
        return notes.tone[this.flattenTone(tone)] + '#';
    };

    /**
     * return a note representation of the tone with both sharp and flat values (for the UI grid)
     * @param tone
     * @returns {*}
     */
    this.getNoteByToneDisplay = function(tone){
        var letter;
        tone = helpers.mod(tone,12);
        if (notes.tone.hasOwnProperty(tone)) {
            letter = notes.tone[tone];
        }
        else {
            letter = this.getFlatNoteByTone(tone)+' / '+this.getSharpNoteByTone(tone);
        }
        return letter;
    };

    /**
     * get the note (char) from the tone (int)
     * @param tone
     * @returns {*}
     */
    this.getNoteByToneDefault = function(tone){
        var letter;
        if (notes.tone.hasOwnProperty(tone)) {
            letter = notes.tone[tone];
        }
        else {
            letter = this.getSharpNoteByTone(tone);
        }
        return letter;
    };

    /**
     * get the note (char) from the tone (int) and either make it sharp or flat by specifying the note
     * @param tone
     * @param letter
     * @returns {*}
     */
    this.getNoteByToneForce = function(tone,letter) {
        var difference = tone - this.getToneByNote(letter);
        if (difference > notes.count.tones/2) {
            difference -= notes.count.tones;
        }
        if (difference < notes.count.tones/2*-1) {
            difference += notes.count.tones;
        }
        if (difference !== 0) {
            if (Math.abs(difference) > 1 && notes.tone.hasOwnProperty(tone)){
                return false;
            } else if (difference > 0) {
                for (var i = 0; i < difference; i++) {
                    letter += '#';
                }
            }
            else if (difference < 0) {
                for (var j = 0; j > difference; j--) {
                    letter += 'b';
                }
            }
        }
        return letter;
    };

    /**
     * get the order of the possible letters, starting at the letter passed in
     * and looping around from 'G' to 'A' until reaching the initial letter
     * @param letter
     * @returns {Array.<*>}
     */
    this.getNoteProgression = function(letter){
        var pieces = 'ABCDEFG'.split(letter.replace(/b/g,'').replace(/#/g,'').toUpperCase());
        return [letter].concat(pieces[1].split(''),pieces[0].split(''));
    };

    this.getPianoFromContainer = function(element){
        var result;
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].classList.contains(dictionary.class_piano_keyboard)){
                    result = element.childNodes[i];
                }
            }
        }
        return result;
    };

    this.getFretboardFromContainer = function(element){
        var result;
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].classList.contains(dictionary.class_string_container)){
                    result = element.childNodes[i];
                }
            }
        }
        return result;
    };

    /**
     * get any tones that are selected in the dom
     * @param container
     */
    this.getSelectedNotes = function(container){
        _chorus.searchResult.containers = [];
        var noteData = [],
            notes = {
                rootTone: '',
                selectedTones:[]
            },
            pianoKeyboard,
            stringFretboard,
            domContainers;
        //search for selected notes by container id or class
        if(container && container.length > 0){
            domContainers = helpers.getDomRepresentationFromStringName(container);
            if (domContainers && domContainers.length > 0){
                domContainers.forEach(function(entry){
                    if (entry.classList.contains('piano')){
                        pianoKeyboard = logicNotes.getPianoFromContainer(entry);
                        if (pianoKeyboard){
                            noteData.push(logicNotes.getTonesFromDOM(pianoKeyboard));
                        }
                    } else {
                        stringFretboard = logicNotes.getFretboardFromContainer(entry);
                        if (stringFretboard){
                            noteData.push(logicNotes.getTonesFromDOM(stringFretboard));
                        }
                    }
                });
            }
            else {
                events.sendMessage(dictionary.error_notFound+'no container found with matching id or class');
            }
        }
        //get selected notes if no container parameter was passed
        else {
            domContainers = helpers.getDomRepresentationFromStringName(dictionary.class_instrument);
            if (domContainers && domContainers.length > 0) {
                for (var j = 0; j < domContainers.length; j++) {
                    if (j === 0) {
                        //get a default config from the first element in the dom
                        _chorus.config.currentConfig = domContainers[j].getAttribute(domData.config);
                    }
                    if (domContainers[j].classList.contains('piano')) {
                        pianoKeyboard = this.getPianoFromContainer(domContainers[j]);
                        if (pianoKeyboard) {
                            noteData.push(this.getTonesFromDOM(pianoKeyboard));
                        }
                    } else {
                        noteData.push(this.getTonesFromDOM(domContainers[j]));
                    }
                }
            }
        }
        //remove duplicates
        for (var k = 0; k < noteData.length; k++){
            if (noteData[k].rootTone.length > 0 || noteData[k].selectedTones.length > 0){
                _chorus.searchResult.containers.push(noteData[k].container);
            }
            if (noteData[k].rootTone.length > 0){
                if (notes.rootTone.length < 1){
                    notes.rootTone = noteData[k].rootTone;
                }
                else {
                    events.sendMessage(dictionary.warning_multipleRootNotes);
                }
            }
            for (var l = 0; l < noteData[k].selectedTones.length; l++){
                if (notes.selectedTones.indexOf(noteData[k].selectedTones[l]) == -1){
                    notes.selectedTones.push(noteData[k].selectedTones[l]);
                }
            }
        }
        return notes;
    };

    /**
     * find any selected frets or root note frets within a given DOM element
     * @type {Function}
     */
    this.getTonesFromDOM = function(element){
        var parentClassList,
            childClassList,
            selectedTones = [],
            rootTone = '';
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i]) {
                    parentClassList = element.childNodes[i].classList;
                    if (parentClassList.contains(dictionary.class_string)) {
                        for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                            childClassList = element.childNodes[i].childNodes[j].classList;
                            if (childClassList.contains(dictionary.class_selected)) {
                                selectedTones.push(element.childNodes[i].childNodes[j].getAttribute(domData.tone));
                            }
                            else if (childClassList.contains(dictionary.class_root)) {
                                rootTone = element.childNodes[i].childNodes[j].getAttribute(domData.tone);
                            }
                        }
                    } else if (parentClassList.contains(dictionary.class_piano_key)) {
                        if (parentClassList.contains(dictionary.class_selected)) {
                            selectedTones.push(element.childNodes[i].getAttribute(domData.tone));
                        }
                        else if (parentClassList.contains(dictionary.class_root)) {
                            rootTone = element.childNodes[i].getAttribute(domData.tone);
                        }
                    }
                }
            }
        } else {
            events.sendMessage(dictionary.error_notFound+'no element found to search');
        }
        return {
            container: element,
            selectedTones: selectedTones,
            rootTone: rootTone
        };
    };

    /**
     * return if the all of the selected tones exist in the scale or chord
     * @param dataNotes
     * @param selectedNotes
     * @returns {boolean}
     */
    this.tonesInScaleOrChordHelper = function(dataNotes, selectedNotes){
        for(var i = 0; i < selectedNotes.length; i++){
            if (dataNotes.indexOf(parseInt(selectedNotes[i])) === -1){
                return false;
            }
        }
        return true;
    };

    /**
     * return if the scale contains the selected tones or not
     * @param formula
     * @param notes
     * @returns {boolean}
     */
    this.tonesInScaleOrChord = function(formula, notes){
        if (notes.rootTone.length > 0){
            if (formula.tones[0] == notes.rootTone){
                return this.tonesInScaleOrChordHelper(formula.tones,notes.selectedTones);
            }
            else {
                return false;
            }
        }
        else {
            return this.tonesInScaleOrChordHelper(formula.tones,notes.selectedTones);
        }
    };

}).apply(_chorus.logic.notes);