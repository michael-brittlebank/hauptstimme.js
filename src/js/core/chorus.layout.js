/**
 * make uid for instrument divs
 * @param prefix
 * @param counter
 * @returns {*}
 */
function prefixBuilder(prefix, counter){
    if (counter && (counter.length > 0 || counter > 0)){
        return prefix +'-'+counter;
    }
    else {
        return prefix;
    }
}

_chorus.layout = {
    /**
     * create an HTML representation of an instrument within the DOM element provided
     * @param element
     */
    init : function(element){
        var instrument = _chorus.config.layoutInstrument,
            prefix,
            containerId = _chorus.logic.helpers.getConfigValue('layoutContainerId');
        if (containerId.length > 0){
            prefix = containerId;
        }
        else {
            prefix = _chorus.layout.getRandomId();
        }
        if (typeof instrument === 'string') {
            element.innerHTML = _chorus.layout.selectInstrument(instrument,prefix);
        }
        else if (Array.isArray(instrument)){
            var content = '',
                counter = 1;
            for(var i = 0; i < instrument.length; i++){
                var increment = 0;
                switch (instrument[i]){
                    case 'all':
                        increment =  _chorus.data.instruments.count.all;
                        break;
                    case 'main':
                        increment =  _chorus.data.instruments.count.main;
                        break;
                    case 'alternate':
                        increment =  _chorus.data.instruments.count.alternateGuitar;
                        break;
                }
                content += _chorus.layout.selectInstrument(instrument[i], prefix, counter);
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
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_type+'instrument config parameter');
        }
    },
    /**
     * get a random id and check if an element in the DOM already has it
     * @returns {*}
     */
    getRandomId: function(){
        var id = prefixBuilder(_chorus.logic.helpers.generateRandomString(5)),
            elementWithSameId = document.getElementById(id);
        if (!elementWithSameId){
            return id;
        }
        else {
            return _chorus.layout.getRandomId();
        }
    },
    /**
     * gets the HTML representation of an instrument if it exists
     * if there are multiple instruments chosen, then adjust the uid prefix accordingly
     * @param instrument
     * @param prefix
     * @param counter
     * @returns {string}
     */
    selectInstrument: function(instrument, prefix, counter){
        var content = '',
            key;
        if(!counter){
            counter = 0;
        }
        switch (instrument) {
            case 'all':
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key,_chorus.data.instruments.main[key],prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                for (key in _chorus.data.instruments.other) {
                    if (_chorus.data.instruments.other.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.other[key],prefixBuilder(prefix,counter));
                        counter++;
                    }
                }

                break;
            case 'main':
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key],prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            case 'alternate':
                for (key in _chorus.data.instruments.alternateGuitar) {
                    if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.alternateGuitar[key],prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            default :
                if (_chorus.data.instruments.main.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.main[instrument],prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (_chorus.data.instruments.other.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.other[instrument],prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.alternateGuitar[instrument],prefixBuilder(prefix,counter));
                    counter++;
                }
                break;
        }
        return content;
    }
};

_chorus.layout.html = _chorus.layout.html || {
        /**
         * creates an instrument in HTML
         * @param instrumentName
         * @param instrumentTuning
         * @param prefix
         * @returns {string}
         */
        instrument : function(instrumentName, instrumentTuning, prefix){
            var stringOrder = _chorus.logic.helpers.getConfigValue('layoutInstrumentStringOrder'),
                stringContent = '',
                containerClass = _chorus.logic.helpers.getConfigValue('layoutContainerClass');
            if (stringOrder == 'asc'){
                instrumentTuning.reverse();
            }
            for(var i = 0;i<instrumentTuning.length;i++){
                stringContent = _chorus.layout.html.string(instrumentTuning[i])+stringContent;
            }
            if (_chorus.logic.helpers.getConfigValue('layoutInstrumentTitles') !== true){
                var htmlElement = _chorus.logic.helpers.getConfigValue('layoutInstrumentTitleElement');
                stringContent ='<'+htmlElement+'>'+instrumentName.replace(/_/g,' ')+'</'+htmlElement+'>'+stringContent;
            }
            if (_chorus.logic.helpers.getConfigValue('scaleSearchButton') === true){
                var title = _chorus.logic.helpers.getConfigValue('scaleSearchText'),
                    searchMode = _chorus.logic.helpers.getConfigValue('scaleSearchMode'),
                    callback = _chorus.logic.helpers.getConfigValue('scaleSearchCallback');
                stringContent += '<a class="searchButton" onclick="_chorus.searchScales(\'\',\''+searchMode+'\','+callback+',\''+prefix+_chorus.data.dictionary.class_container+'\')">'+title+'</a>';
            }
            return '<div id="'+prefix+_chorus.data.dictionary.class_container+'" class="'+_chorus.data.dictionary.class_instrument+' '+containerClass+'">'+
                stringContent+
                '</div>';
        },
        /**
         * creates a string in HTML
         * @param root
         * @returns {string}
         */
        string : function(root) {
            var fret,tone,
                numberOfFrets = 12,
                output = '<div class="'+_chorus.data.dictionary.class_string+'">';
            for(var i = 0; i <= numberOfFrets; i++){
                tone = (parseInt(root)+i)%_chorus.data.notes.count.tones;
                fret = _chorus.logic.notes.getNoteByToneDisplay(tone);
                output +=
                    '<div class="'+_chorus.data.dictionary.class_fret+' '+_chorus.data.dictionary.class_tone+tone+'">'+
                    _chorus.layout.html.htmlFilter(fret)+
                    '</div>';
            }
            return output+'</div>';
        },
        /**
         * replace sharps and flats with appropriate html entities
         * @param note
         * @returns {string}
         */
        htmlFilter : function(note){
            return note.replace(/#/g,'&#9839;').replace(/b/g,'&#9837;');
        }
    };
