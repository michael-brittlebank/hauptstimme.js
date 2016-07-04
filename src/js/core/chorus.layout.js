(function(){
    //variables
    this.html = {};

    // local variables
    var data = _chorus.data,
        instruments = data.instruments,
        notes = data.notes,
        dictionary = data.dictionary,
        helpers = _chorus.logic.helpers,
        events = _chorus.events;

    //functions
    /**
     * create an HTML representation of an instrument within the DOM element provided
     * @param {HTMLElement} element
     */
    this.init = function(element){
        var configInstrument = _chorus.config[_chorus.config.currentConfig].layoutInstrument,
            prefix,
            containerId = helpers.getConfigValue('layoutContainerId');
        if (containerId.length > 0){
            prefix = containerId;
        }
        else {
            prefix = this.getRandomId();
        }
        if (typeof configInstrument === 'string') {
            element.innerHTML = this.selectInstrument(configInstrument,prefix,0);
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
            _chorus.events.sendMessage(dictionary.errorType+'instrument config parameter');
        }
    };

    /**
     * get a random id and check if an element in the DOM already has it
     * @returns {string}
     */
    this.getRandomId = function(){
        var id = this.prefixBuilder(helpers.generateRandomString(5),0),
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
     * @param {string} instrument
     * @param {string} prefix
     * @param {int} counter
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
     * @param {string} prefix
     * @param {int} counter
     * @returns {string}
     */
    this.prefixBuilder = function(prefix, counter){
        if (counter && parseInt(counter) > 0){
            return prefix +'-'+counter;
        }
        else {
            return prefix;
        }
    };

    (function() {
        var layout = _chorus.layout.html,
            domData = _chorus.data.domData;

        //functions
        /**
         * creates an instrument fretboard in HTML
         * @param {string} instrumentName
         * @param {string} instrumentTuning
         * @param {string} prefix
         * @returns {string}
         */
        this.instrument = function (instrumentName, instrumentTuning, prefix) {
            var containerClass = helpers.getConfigValue('layoutContainerClass'),
                containerId = prefix+'-'+dictionary.classContainer,
                containerContentOpen,
                containerContentClose,
                titleContent = '',
                instrumentContentOpen,
                instrumentContentClose,
                instrumentContent = '',
                searchButtonContent = '';
            if (helpers.getConfigValue('layoutInstrumentStringOrder') === 'asc') {
                instrumentTuning.reverse();
            }
            //instrument container
            containerContentOpen = '<div id="' + containerId + '" class="' + dictionary.classInstrument + ' ' + containerClass + '" '+domData.config+'="'+_chorus.config.currentConfig+'">';
            containerContentClose = '</div>';
            //title
            if (helpers.getConfigValue('layoutInstrumentTitles') === true) {
                var htmlElement = helpers.getConfigValue('layoutInstrumentTitleElement');
                titleContent = '<' + htmlElement + ' class="'+dictionary.classInstrumentTitle+'">' + instrumentName.replace(/_/g, ' ') + '</' + htmlElement + '>';
            }
            //string container
            instrumentContentOpen ='<div class="'+dictionary.classStringContainer+'">';
            instrumentContentClose = '</div>';
            //strings
            for (var i = 0; i < instrumentTuning.length; i++) {
                instrumentContent = this.string(instrumentTuning[i]) + instrumentContent;
            }
            instrumentContent = this.fretMarkers() + instrumentContent;
            //search button
            if (helpers.getConfigValue('searchButton') === true) {
                var title = helpers.getConfigValue('searchText'),
                    callback = helpers.getConfigValue('searchCallback')?helpers.getConfigValue('searchCallback'):'\'\'';
                searchButtonContent = '<a class="'+dictionary.classSearchButton+'" onclick="_chorus.search(\'\',\'' + containerId + '\',' + callback + ')">' + title + '</a>';
            }
            return containerContentOpen+ //instrument container
                titleContent + //title
                instrumentContentOpen + //key container
                instrumentContent + //string
                instrumentContentClose +
                searchButtonContent + //search button
                containerContentClose;
        };

        /**
         * makes fret markers in html
         * @returns {string}
         */
        this.fretMarkers = function(){
            var output = '',
                outputStringOpen = '<div class="' + dictionary.classString + ' '+dictionary.classFretMarkers+'">',
                outputStringClose = '</div>',
                outputFretStart = '<div class="' + dictionary.classFret +'">',
                outputFretClose = '</div>';
            for (var i = 0; i < 13; i++) {
                output += outputFretStart;
                if (i === 3 || i === 5 || i ===9){
                    output += '<p>&#9678;</p>';
                } else if (i === 7 || i === 12) {
                    output += '<p>&#9673;&#9673;</p>';
                }
                output += outputFretClose;
            }
            return outputStringOpen +
                output +
                outputStringClose;
        };

        /**
         * html layout helper
         * @param {string} note
         * @returns {string}
         */
        this.noteContainerHelper = function(note){
            return '<p>' +
                '<span>' + this.htmlFilter(note) + '</span>' +
                '</p>';
        };

        /**
         * creates a string in HTML
         * @param {string} root
         * @returns {string}
         */
        this.string = function (root) {
            var note,
                tone,
                numberOfFrets = 12,
                outputStart = '<div class="' + dictionary.classString + '">',
                outputContent = '',
                outputEnd = '</div>',
                multicolor = helpers.getConfigValue('multicolor'),
                multicolorClass;
            for (var i = 0; i <= numberOfFrets; i++) {
                tone = (parseInt(root) + i) % notes.count.tones;
                note = _chorus.logic.notes.getNoteByToneDisplay(tone);
                multicolorClass = '';
                if (multicolor === true){
                    multicolorClass = dictionary.classNoteMulticolor+'-'+tone;
                }
                outputContent +=
                    '<div class="' + dictionary.classFret +' '+dictionary.classNote+' '+multicolorClass+'" '+domData.tone+'="'+tone+'">' +
                    this.noteContainerHelper(note) +
                    '</div>';
            }
            return outputStart +
                outputContent +
                outputEnd;
        };

        /**
         * replace sharps and flats with appropriate html entities
         * @param {string} note
         * @returns {string}
         */
        this.htmlFilter = function (note) {
            return note.replace(/#/g, '&#9839;').replace(/b/g, '&#9837;');
        };

        /**
         * creates a piano keyboard in HTML
         * @param {string} prefix
         * @returns {string}
         */
        this.piano = function(prefix){
            var numberOfPianoKeys = 12,
                containerClass = helpers.getConfigValue('layoutContainerClass'),
                containerContentOpen,
                containerContentClose,
                titleContent = '',
                instrumentContentOpen,
                instrumentContentClose,
                instrumentContent = '',
                searchButtonContent = '',
                multicolor = helpers.getConfigValue('multicolor'),
                multicolorClass,
                tone,
                note,
                pianoKeyClass,
                containerId = prefix+'-'+dictionary.classContainer;
            //instrument container
            containerContentOpen = '<div id="' + containerId + '" class="' + dictionary.classInstrument + ' ' + containerClass + ' piano" '+domData.config+'="'+_chorus.config.currentConfig+'">';
            containerContentClose = '</div>';
            //title
            if (helpers.getConfigValue('layoutInstrumentTitles') === true) {
                var htmlElement = helpers.getConfigValue('layoutInstrumentTitleElement');
                titleContent = '<' + htmlElement + ' class="'+dictionary.classInstrumentTitle+'">piano</' + htmlElement + '>';
            }
            //key container
            instrumentContentOpen ='<div class="'+dictionary.classPianoKeyboard+'">';
            instrumentContentClose ='</div>';
            //keys
            for(var i = 0; i < numberOfPianoKeys; i++){
                //start at c instead of a
                tone = helpers.mod(i+3,12);
                note = _chorus.logic.notes.getNoteByToneDisplay(tone);
                pianoKeyClass = note.indexOf('#')!== -1?dictionary.classPianoKeyBlack:dictionary.classPianoKeyWhite;
                multicolorClass = '';
                if (multicolor === true){
                    multicolorClass = dictionary.classNoteMulticolor+'-'+tone;
                }
                instrumentContent +=
                    '<div class="' + dictionary.classPianoKey+' '+dictionary.classNote+' '+multicolorClass+' '+pianoKeyClass+'" '+domData.tone+'="'+tone+'">' +
                    this.noteContainerHelper(note) +
                    '</div>';
            }
            //search button
            if (helpers.getConfigValue('searchButton') === true) {
                var title = helpers.getConfigValue('searchText'),
                    callback = helpers.getConfigValue('searchCallback')?helpers.getConfigValue('searchCallback'):'\'\'';
                searchButtonContent += '<a class="'+dictionary.classSearchButton+'" onclick="_chorus.search(\'\',\'' + containerId + '\',' + callback + ')">' + title + '</a>';
            }
            return containerContentOpen+ //instrument container
                titleContent + //title
                instrumentContentOpen + //key container
                instrumentContent + //piano keys
                instrumentContentClose +
                searchButtonContent + //search button
                containerContentClose;
        };

        /**
         * apply the selected tones to the instrument container
         * @param {Array} tones
         * @param {string} container
         */
        this.applySelectedNotesToDom = function(tones,container){
            var children = container.querySelectorAll('.'+dictionary.classNote);
            for(var i = 0; i < children.length; i++){
                if (tones.indexOf(parseInt(children[i].getAttribute(domData.tone))) !== -1){
                    children[i].classList.add(dictionary.classResult);
                } else {
                    children[i].classList.remove(dictionary.classResult);
                }
            }
        };

        /**
         *
         * @param {Array} tones
         * @param {string|Array} container
         */
        this.applyResults = function(tones, container){
            if (!tones || !container){
                events.sendMessage(dictionary.errorUndefined + 'no tones or container name passed');
            }
            if (typeof container === 'string') {
                layout.applySelectedNotesToDom(tones, container);
            } else if (typeof container === 'object' && container.length > 0){
                container.forEach(function (element) {
                    layout.applySelectedNotesToDom(tones, element);
                });
            }
        };

        /**
         * makes an HTML list of results to insert into a container
         * @param {string} container
         * @param {string} resultType
         */
        this.populateListsHelper = function(container, resultType){
            var domContainers = helpers.getDomRepresentationFromStringName(container),
                resultGroup,
                resultKey,
                searchResult = _chorus.searchResult,
                listItems = [];
            if (searchResult[resultType].resultsArray.hasOwnProperty('main') || searchResult[resultType].resultsArray.hasOwnProperty('major')){
                for (resultGroup in searchResult[resultType].resultsArray) {
                    if (searchResult[resultType].resultsArray.hasOwnProperty(resultGroup)) {
                        for (resultKey in searchResult[resultType].resultsArray[resultGroup]) {
                            if (searchResult[resultType].resultsArray[resultGroup].hasOwnProperty(resultKey)) {
                                listItems.push(searchResult[resultType].resultsArray[resultGroup][resultKey]);
                            }
                        }
                        listItems.push(searchResult[resultType].resultsArray[resultGroup]);
                    }
                }
            } else {
                for (var i = 0; i < searchResult[resultType].resultsArray.length; i++) {
                    listItems.push(searchResult[resultType].resultsArray[i]);
                }
            }
            domContainers.forEach(function(entry){
                var list = {
                        listItems: listItems,
                        dictionary: dictionary,
                        domData: domData
                    },
                    template = Handlebars.templates.results;
                entry.innerHTML = template(list);
            });
        };

        /**
         * populate lists from search results
         * @param {string} scaleResultContainer
         * @param {string} chordResultContainer
         */
        this.populateLists = function(scaleResultContainer, chordResultContainer){
            if (scaleResultContainer || chordResultContainer){
                if (scaleResultContainer){
                    this.populateListsHelper(scaleResultContainer, 'scales');
                }
                if (chordResultContainer){
                    this.populateListsHelper(chordResultContainer, 'chords');
                }
                events.dispatchEvent(_chorus.data.customEvents.populateListsComplete, 'chorusJS has finished populating results lists');
            } else {
                events.sendMessage(dictionary.errorUndefined + 'no containers passed to populate lists');
            }
        };

        /**
         * clear results from container
         * @param {string} chorusResultContainer
         */
        this.clearResults = function(chorusResultContainer){
            var domContainers = helpers.getDomRepresentationFromStringName(chorusResultContainer),
                selectedNotes,
                selectedResults,
                i;
            if (domContainers && domContainers.length > 0) {
                domContainers.forEach(function(container){
                    selectedNotes = container.querySelectorAll('.'+dictionary.classResult);
                    for(i = 0; i < selectedNotes.length; i++){
                        selectedNotes[i].classList.remove(dictionary.classResult);
                    }
                });
            } else {
                selectedNotes = document.getElementsByClassName(dictionary.classNote);
                for(i = 0; i < selectedNotes.length; i++){
                    selectedNotes[i].classList.remove(dictionary.classResult);
                }
            }
            selectedResults = document.getElementsByClassName(dictionary.classListItemSelected);
            for(i = 0; i < selectedResults.length; i++){
                selectedResults[i].classList.remove(dictionary.classListItemSelected);
            }
        };

    }).apply(_chorus.layout.html);

}).apply(_chorus.layout);