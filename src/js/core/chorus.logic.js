_chorus.logic.helpers = _chorus.logic.helpers || {
        /**
         * get a random string
         * @param length
         * @returns {*}
         */
        generateRandomString : function(length){
            var output;
            for(output = ''; output.length < length;) {
                output += Math.random().toString(36).substr(2, 1);
            }
            return output;
        },
        /**
         * make a copy of a JS object
         * @param from
         * @param to
         * @returns {*}
         */
        cloneObject : function(from, to) {
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
                to[name] = typeof to[name] == 'undefined' ? _chorus.logic.helpers.cloneObject(from[name], null) : to[name];
            }
            return to;
        },
        /**
         * get the config value for the key passed or return the default if none available
         * @param key
         * @returns {*}
         */
        getConfigValue: function(key){
            if (typeof _chorus.config[key] !== typeof _chorus.defaultConfig[key]){
                _chorus.events.sendMessage(_chorus.data.dictionary.error_type+' '+key);
            }
            return typeof _chorus.config[key] === typeof _chorus.defaultConfig[key]?_chorus.config[key]:_chorus.defaultConfig[key];
        },
        /**
         * get the object key given the value
         * @param object
         * @param value
         * @returns {string}
         */
        getKeyFromValue: function(object, value){
            for(var prop in object) {
                if(object.hasOwnProperty(prop)) {
                    if(object[prop] === value) {
                        return prop;
                    }
                }
            }
        },
        /**
         * gets the size of a one dimensional object
         * @param object
         * @returns {number}
         */
        countObjectLength: function(object){
            var key,
                i = 0;
            for(key in object){
                if (object.hasOwnProperty(key)){
                    i++;
                }
            }
            return i;
        },
        /**
         * capitalize all of the words in a string
         * @param string
         * @returns {string}
         */
        capitalize: function(string){
            return string.toLowerCase().replace( /\b\w/g, function (m) {
                return m.toUpperCase();
            });
        },
        validator: {
            /**
             * validates the scale search mode
             * @param mode
             * @returns {boolean}
             */
            isValidScaleSearchMode:function(mode){
                return mode === 'main' ||
                    mode === 'other' ||
                    mode === 'all';
            }
        }
    };



_chorus.logic.notes = _chorus.logic.notes || {
        /**
         * get the tone (int) given the note (char)
         * @param note
         * @returns {number}
         */
        getToneByNote: function (note){
            var tone = _chorus.data.notes.letter[note.substring(0,1)],
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
        },
        /**
         * get the flat note from the int
         * @param tone
         * @returns {string}
         */
        getFlatNoteByTone: function(tone){
            return _chorus.data.notes.tone[(tone + 1)%12] + 'b';
        },
        /**
         * get the sharp note from the int
         * @param tone
         * @returns {string}
         */
        getSharpNoteByTone: function(tone){
            return _chorus.data.notes.tone[(tone - 1)%12] + '#';
        },
        /**
         * return a note representation of the tone with both sharp and flat values (for the UI grid)
         * @param tone
         * @returns {*}
         */
        getNoteByToneDisplay: function(tone){
            var letter;
            if (_chorus.data.notes.tone.hasOwnProperty(tone)) {
                letter = _chorus.data.notes.tone[tone];
            }
            else {
                letter = _chorus.logic.notes.getFlatNoteByTone(tone)+' / '+_chorus.logic.notes.getSharpNoteByTone(tone);
            }
            return letter;
        },
        /**
         * get the note (char) from the tone (int)
         * @param tone
         * @returns {*}
         */
        getNoteByToneDefault: function(tone){
            var letter;
            if (_chorus.data.notes.tone.hasOwnProperty(tone)) {
                letter = _chorus.data.notes.tone[tone];
            }
            else {
                letter = _chorus.logic.notes.getSharpNoteByTone(tone);
            }
            return letter;
        },
        /**
         * get the note (char) from the tone (int) and either make it sharp or flat by specifying the note
         * @param tone
         * @param letter
         * @returns {*}
         */
        getNoteByToneForce: function(tone,letter) {
            var difference = tone - _chorus.logic.notes.getToneByNote(letter);
            if (difference > _chorus.data.notes.count.tones/2) {
                difference -= _chorus.data.notes.count.tones;
            }
            if (difference < _chorus.data.notes.count.tones/2*-1) {
                difference += _chorus.data.notes.count.tones;
            }
            if (difference !== 0) {
                if (_chorus.data.notes.tone.hasOwnProperty(tone)){
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
        },
        /**
         * get the order of the possible letters, starting at the letter passed in
         * and looping around from 'G' to 'A' until reaching the initial letter
         * @param letter
         * @returns {Array.<*>}
         */
        getLetterProgression: function(letter){
            var pieces = 'ABCDEFG'.split(letter.replace(/b/g,'').replace(/#/g,'').toUpperCase());
            return [letter].concat(pieces[1].split(''),pieces[0].split(''));
        },
        /**
         * extract the tone (int) from a DOM classname string using the default class
         * @param className
         * @returns {string}
         */
        getToneByClass: function(className){
            return className.substring(_chorus.data.dictionary.class_tone.length);
        }
    };

/**
 * get any tones that selected
 * @param container
 */
_chorus.logic.notes.getSelectedNotes = function(container){
    _chorus.searchResult.scaleContainers = [];
    var events = _chorus.events,
        noteData = [],
        notes = {
            rootTone: '',
            selectedTones:[]
        };
    //search for selected notes by container id or class
    if(container && container.length > 0){
        var containerById = document.getElementById(container),
            containerByClass = document.getElementsByClassName(container);
        if (containerById){
            noteData.push(_chorus.logic.notes.getTonesFromDOM(containerById));
        }
        else if (containerByClass){
            for (var i = 0; i < containerByClass.length; i++){
                noteData.push(_chorus.logic.notes.getTonesFromDOM(containerByClass[i]));
            }
        }
        else {
            events.sendMessage(_chorus.data.dictionary.error_notFound+'no container found with matching id or class');
        }
    }
    //get selected notes if no container parameter was passed
    else {
        var containerByDefaultClass = document.getElementsByClassName(_chorus.data.dictionary.class_instrument);
        for (var j = 0; j < containerByDefaultClass.length; j++){
            noteData.push(_chorus.logic.notes.getTonesFromDOM(containerByDefaultClass[j]));
        }
    }
    //remove duplicates
    for (var k = 0; k < noteData.length; k++){
        if (noteData[k].rootTone.length > 0 || noteData[k].selectedTones.length > 0){
            _chorus.searchResult.scaleContainers.push(noteData[k].container);
        }
        if (noteData[k].rootTone.length > 0){
            if (notes.rootTone.length < 1){
                notes.rootTone = noteData[k].rootTone;
            }
            else {
                events.sendMessage(_chorus.data.dictionary.warning_multipleRootNotes);
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
_chorus.logic.notes.getTonesFromDOM = function(element){
    var classList,
        selectedTones = [],
        rootTone = '';
    if (element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].classList.contains(_chorus.data.dictionary.class_string)) {
                if (element.childNodes[i]) {
                    for (var j = 0; j < element.childNodes[i].childNodes.length; j++) {
                        classList = element.childNodes[i].childNodes[j].classList;
                        if (classList.contains(_chorus.data.dictionary.class_selected) || classList.contains(_chorus.data.dictionary.class_root)) {
                            for (var k = 0; k < classList.length; k++){
                                if (classList[k].indexOf(_chorus.data.dictionary.class_tone) !== -1){
                                    if (classList.contains(_chorus.data.dictionary.class_selected)){
                                        selectedTones.push(_chorus.logic.notes.getToneByClass(classList[k]));
                                    }
                                    else if (classList.contains(_chorus.data.dictionary.class_root)){
                                        rootTone = _chorus.logic.notes.getToneByClass(classList[k]);
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
        _chorus.events.sendMessage(_chorus.data.dictionary.error_notFound+'no element found to search');
    }
    return {
        container: element,
        selectedTones: selectedTones,
        rootTone: rootTone
    };
};