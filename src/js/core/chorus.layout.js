(function(){
    //variables
    this.html = {};

    // local variables
    var data = _chorus.data,
        instruments = data.instruments,
        notes = data.notes,
        dictionary = data.dictionary,
        helpers = _chorus.logic.helpers;

    //functions
    /**
     * create an HTML representation of an instrument within the DOM element provided
     * @param element
     */
    this.init = function(element){
        var configInstrument = _chorus.config.layoutInstrument,
            prefix,
            containerId = helpers.getConfigValue('layoutContainerId');
        if (containerId.length > 0){
            prefix = containerId;
        }
        else {
            prefix = this.getRandomId();
        }
        if (typeof configInstrument === 'string') {
            element.innerHTML = this.selectInstrument(configInstrument,prefix);
        }
        else if (Array.isArray(configInstrument)){
            var content = '',
                counter = 1;
            for(var i = 0; i < configInstrument.length; i++){
                var increment = 0;
                switch (configInstrument[i]){
                    case 'all':
                        increment =  instruments.count.all;
                        break;
                    case 'main':
                        increment =  instruments.count.main;
                        break;
                    case 'alternate':
                        increment =  instruments.count.alternateGuitar;
                        break;
                }
                content += this.selectInstrument(configInstrument[i], prefix, counter);
                if (increment > 0){
                    counter += increment;
                }
                else {
                    counter += 1;
                }
            }
            element.innerHTML = content;
        }
        else {
            _chorus.events.sendMessage(dictionary.error_type+'instrument config parameter');
        }
    };

    /**
     * get a random id and check if an element in the DOM already has it
     * @returns {*}
     */
    this.getRandomId = function(){
        var id = this.prefixBuilder(helpers.generateRandomString(5)),
            elementWithSameId = document.getElementById(id);
        if (!elementWithSameId){
            return id;
        }
        else {
            return this.getRandomId();
        }
    };

    /**
     * gets the HTML representation of an instrument if it exists
     * if there are multiple instruments chosen, then adjust the uid prefix accordingly
     * @param instrument
     * @param prefix
     * @param counter
     * @returns {string}
     */
    this.selectInstrument = function(instrument, prefix, counter){
        var content = '',
            key;
        if(!counter){
            counter = 0;
        }
        switch (instrument) {
            case 'piano':
                content += this.html.piano(this.prefixBuilder(prefix,counter));
                counter++;
                break;
            case 'all':
                for (key in instruments.main) {
                    if (instruments.main.hasOwnProperty(key)) {
                        content += this.html.instrument(key,instruments.main[key],this.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                for (key in instruments.other) {
                    if (instruments.other.hasOwnProperty(key)) {
                        content += this.html.instrument(key, instruments.other[key],this.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            case 'main':
                for (key in instruments.main) {
                    if (instruments.main.hasOwnProperty(key)) {
                        content += this.html.instrument(key, instruments.main[key],this.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            case 'alternate':
                for (key in instruments.alternateGuitar) {
                    if (instruments.alternateGuitar.hasOwnProperty(key)) {
                        content += this.html.instrument(key, instruments.alternateGuitar[key],this.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            default :
                if (instruments.main.hasOwnProperty(instrument)) {
                    content = this.html.instrument(instrument, instruments.main[instrument],this.prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (instruments.other.hasOwnProperty(instrument)) {
                    content = this.html.instrument(instrument, instruments.other[instrument],this.prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (instruments.alternateGuitar.hasOwnProperty(instrument)) {
                    content = this.html.instrument(instrument, instruments.alternateGuitar[instrument],this.prefixBuilder(prefix,counter));
                    counter++;
                }
                break;
        }
        return content;
    };

    /**
     * make uid for instrument divs
     * @param prefix
     * @param counter
     * @returns {*}
     */
    this.prefixBuilder = function(prefix, counter){
        if (counter && (counter.length > 0 || counter > 0)){
            return prefix +'-'+counter;
        }
        else {
            return prefix;
        }
    };

    (function() {
        //functions
        /**
         * creates an instrument in HTML
         * @param instrumentName
         * @param instrumentTuning
         * @param prefix
         * @returns {string}
         */
        this.instrument = function (instrumentName, instrumentTuning, prefix) {
            var stringOrder = helpers.getConfigValue('layoutInstrumentStringOrder'),
                stringContent = '',
                containerClass = helpers.getConfigValue('layoutContainerClass');
            if (stringOrder == 'asc') {
                instrumentTuning.reverse();
            }
            for (var i = 0; i < instrumentTuning.length; i++) {
                stringContent = this.string(instrumentTuning[i]) + stringContent;
            }
            if (helpers.getConfigValue('layoutInstrumentTitles') !== true) {
                var htmlElement = helpers.getConfigValue('layoutInstrumentTitleElement');
                stringContent = '<' + htmlElement + '>' + instrumentName.replace(/_/g, ' ') + '</' + htmlElement + '>' + stringContent;
            }
            if (helpers.getConfigValue('searchButton') === true) {
                var title = helpers.getConfigValue('searchText'),
                    callback = helpers.getConfigValue('searchCallback');
                stringContent += '<a class="searchButton" onclick="_chorus.search(\'\',\'' + prefix + dictionary.class_container + '\',' + callback + ')">' + title + '</a>';
            }
            return '<div id="' + prefix + dictionary.class_container + '" class="' + dictionary.class_instrument + ' ' + containerClass + '">' +
                stringContent +
                '</div>';
        };

        /**
         * creates a string in HTML
         * @param root
         * @returns {string}
         */
        this.string = function (root) {
            var note,
                tone,
                numberOfFrets = 12,
                output = '<div class="' + dictionary.class_string + '">';
            for (var i = 0; i <= numberOfFrets; i++) {
                tone = (parseInt(root) + i) % notes.count.tones;
                note = _chorus.logic.notes.getNoteByToneDisplay(tone);
                output +=
                    '<div class="' + dictionary.class_fret + ' ' + dictionary.class_tone + tone + '">' +
                    this.htmlFilter(note) +
                    '</div>';
            }
            return output + '</div>';
        };

        /**
         * replace sharps and flats with appropriate html entities
         * @param note
         * @returns {string}
         */
        this.htmlFilter = function (note) {
            return note.replace(/#/g, '&#9839;').replace(/b/g, '&#9837;');
        };

        this.piano = function(prefix){
            var numberOfPianoKeys = 13,
                containerClass = helpers.getConfigValue('layoutContainerClass'),
                content,
                tone,
                note,
                pianoKeyClass;
            content = '<div id="' + prefix + dictionary.class_container + '" class="' + dictionary.class_instrument + ' ' + containerClass + '">';
            if (helpers.getConfigValue('layoutInstrumentTitles') !== true) {
                var htmlElement = helpers.getConfigValue('layoutInstrumentTitleElement');
                content = '<' + htmlElement + '>Piano</' + htmlElement + '>';
            }
            for(var i = 0; i < numberOfPianoKeys; i++){
                //start at c instead of a
                tone = i+3;
                note = _chorus.logic.notes.getNoteByToneDisplay(tone);
                pianoKeyClass = note.indexOf('#')!== -1?'black':'white';
                content += '<div class="' + dictionary.class_piano_key + ' '+pianoKeyClass+'">'+
                    this.htmlFilter(note) +
                    '</div>';
            }
            if (helpers.getConfigValue('searchButton') === true) {
                var title = helpers.getConfigValue('searchText'),
                    callback = helpers.getConfigValue('searchCallback');
                content += '<a class="searchButton" onclick="_chorus.search(\'\',\'' + prefix + dictionary.class_container + '\',' + callback + ')">' + title + '</a>';
            }
            return content+'</div>';
        };

    }).apply(_chorus.layout.html);

}).apply(_chorus.layout);