/**
 * helpers
 */
(function(){
    //variables
    var dictionary = _chorus.data.dictionary,
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
     * @returns {*}
     */
    this.getConfigValue = function(key){
        if (typeof _chorus.config[key] !== typeof _chorus.defaultConfig[key]){
            _chorus.events.sendMessage(dictionary.error_type+' '+key);
        }
        return typeof _chorus.config[key] === typeof defaultConfig[key]?_chorus.config[key]:defaultConfig[key];
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

    /**
     * validates the scale search mode
     * @param mode
     * @returns {boolean}
     */
    this.isValidScaleSearchMode = function(mode){
        return mode === 'main' ||
            mode === 'other' ||
            mode === 'all';
    };

}).apply(_chorus.logic.helpers);


/**
 * notes
 */
(function(){
    //variables
    var dictionary = _chorus.data.dictionary,
        notes = _chorus.data.notes,
        events = _chorus.events;

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
        return (tone % 12);
    };

    /**
     * get the flat note from the int
     * @param tone
     * @returns {string}
     */
    this.getFlatNoteByTone = function(tone){
        return notes.tone[(tone + 1)%12] + 'b';
    };

    /**
     * get the sharp note from the int
     * @param tone
     * @returns {string}
     */
    this.getSharpNoteByTone = function(tone){
        return notes.tone[(tone - 1)%12] + '#';
    };

    /**
     * return a note representation of the tone with both sharp and flat values (for the UI grid)
     * @param tone
     * @returns {*}
     */
    this.getNoteByToneDisplay = function(tone){
        var letter;
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
            if (notes.tone.hasOwnProperty(tone)){
                return false;
            }
            if (difference > 0) {
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

    /**
     * extract the tone (int) from a DOM classname string using the default class
     * @param className
     * @returns {string}
     */
    this.getToneByClass = function(className){
        return className.substring(dictionary.class_tone.length);
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
            };
        //search for selected notes by container id or class
        if(container && container.length > 0){
            var containerById = document.getElementById(container),
                containerByClass = document.getElementsByClassName(container);
            if (containerById){
                noteData.push(this.getTonesFromDOM(containerById));
            }
            else if (containerByClass){
                for (var i = 0; i < containerByClass.length; i++){
                    noteData.push(this.getTonesFromDOM(containerByClass[i]));
                }
            }
            else {
                events.sendMessage(dictionary.error_notFound+'no container found with matching id or class');
            }
        }
        //get selected notes if no container parameter was passed
        else {
            var containerByDefaultClass = document.getElementsByClassName(dictionary.class_instrument);
            for (var j = 0; j < containerByDefaultClass.length; j++){
                noteData.push(this.getTonesFromDOM(containerByDefaultClass[j]));
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
        var classList,
            selectedTones = [],
            rootTone = '';
        if (element) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].classList.contains(dictionary.class_string)) {
                    if (element.childNodes[i]) {
                        for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                            classList = element.childNodes[i].childNodes[j].classList;
                            if (classList.contains(dictionary.class_selected) || classList.contains(dictionary.class_root)) {
                                for (var k = 0; k < classList.length; k++){
                                    if (classList[k].indexOf(dictionary.class_tone) !== -1){
                                        if (classList.contains(dictionary.class_selected)){
                                            selectedTones.push(this.getToneByClass(classList[k]));
                                        }
                                        else if (classList.contains(dictionary.class_root)){
                                            rootTone = this.getToneByClass(classList[k]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
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
     * @param scale
     * @param notes
     * @returns {boolean}
     */
    this.tonesInScaleOrChord = function(scale, notes){
        if (notes.rootTone.length > 0){
            if (scale.tones[0] == notes.rootTone){
                return this.tonesInScaleOrChordHelper(scale.tones,notes.selectedTones);
            }
            else {
                return false;
            }
        }
        else {
            return this.tonesInScaleOrChordHelper(scale.tones,notes.selectedTones);
        }
    };

}).apply(_chorus.logic.notes);