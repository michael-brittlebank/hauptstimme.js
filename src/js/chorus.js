/**
 * declaration
 */
var _chorus = window.chorus = {
    /**
     * core
     * (in order of include via grunt compile)
     */
    init: function(){return undefined;},
    data: {},
    events: {},
    logic: {
        //core
        helpers:{},
        notes:{},
        //modules,
        scales:{},
        chords:{}
    },
    layout: {},
    /**
     * config
     */
    //default search result holder
    searchResult: {},
    //default config object
    defaultConfig: {},
    //any user set config options will be saved here with defaults for any unset options
    config: {
        currentConfig: ''
    }
};

/**
 * search result
 */
(function(){
    this.scales = {};
    this.chords = {};
    this.containers = [];
}).apply(_chorus.searchResult);

/**
 * default config
 */
(function(){
    //logic
    this.searchCallback = '';
    this.flattenSearchResults = false;
    //layout
    this.layoutInstrument ='main';
    this.layoutInstrumentTitles = false;
    this.layoutInstrumentTitleElement ='h2';
    this.layoutInstrumentStringOrder ='desc';
    this.layoutContainerId = '';
    this.layoutContainerClass = '';
    this.searchButton = true;
    this.searchText = 'Search Chorus';
    //developer
    this.chorusDebug ='none';
}).apply(_chorus.defaultConfig);

/**
 * sets config values and creates instrument grid
 * @type {Function|*}
 */
_chorus.init = function(element, config) {
    var events = _chorus.events,
        layout = _chorus.layout,
        dictionary = _chorus.data.dictionary,
        customEvents = _chorus.data.customEvents,
        currentConfig = layout.getRandomId();
    events.listeners.init();
    _chorus.config.currentConfig = currentConfig;
    _chorus.config[currentConfig] = _chorus.logic.helpers.cloneObject(_chorus.defaultConfig);
    if (config !== undefined) {
        for (var key in config) {
            if (config.hasOwnProperty(key) && _chorus.config[currentConfig].hasOwnProperty(key)) {
                _chorus.config[currentConfig][key] = config[key];
            }
        }
    }
    if (element !== undefined) {
        if (document.getElementById(element) !== null) {
            layout.init(document.getElementById(element));
            _chorus.config.currentConfig = '';
            events.dispatchEvent(customEvents.chorusInitComplete, 'chorusJS has finished initialization');
        }
        else if (document.getElementsByClassName(element).length > 0) {
            [].forEach.call(document.getElementsByClassName(element), function (ele) {
                layout.init(ele);
            });
            _chorus.config.currentConfig = '';
            events.dispatchEvent(customEvents.chorusInitComplete, 'chorusJS has finished initialization');
        }
        else {
            events.sendMessage(dictionary.error_notFound + 'no elements found using init value');
            return false;
        }
    } else {
        events.sendMessage(dictionary.error_undefined + 'no element defined in init');
        return false;
    }
};

/**
 * top level methods exposing lower level functions
 */
_chorus.search = function(tones, container, callback){
    _chorus.logic.scales.searchScales(tones,  container, false,
        _chorus.logic.chords.searchChords(tones, container, false,
            _chorus.logic.helpers.searchComplete(callback)
        ));
};
_chorus.searchScales = function(tones, container, callback){
    _chorus.logic.scales.searchScales(tones, container, false, callback);
};
_chorus.searchChords = function(tones, container, callback){
    _chorus.logic.chords.searchChords(tones, container, false, callback);
};
//todo, add methods for note/tone calculation