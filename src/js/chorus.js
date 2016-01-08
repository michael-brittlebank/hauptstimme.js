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
    config: {}
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

(function(){
    //variables
    this.currentConfig = '';

    //functions
    this.resetCurrentConfig = function(){
        this.currentConfig = '';
    };

}).apply(_chorus.config);

/**
 * sets config values and creates instrument grid
 * @type {Function|*}
 */
_chorus.init = function(element, userConfig) {
    var events = _chorus.events,
        layout = _chorus.layout,
        dictionary = _chorus.data.dictionary,
        customEvents = _chorus.data.customEvents,
        configId = layout.getRandomId(),
        config = _chorus.config;
    events.listeners.init();
    config.currentConfig = configId;
    config[configId] = _chorus.logic.helpers.cloneObject(_chorus.defaultConfig);
    if (userConfig !== undefined) {
        for (var key in userConfig) {
            if (userConfig.hasOwnProperty(key) && config[configId].hasOwnProperty(key)) {
                config[configId][key] = userConfig[key];
            }
        }
    }
    if (element !== undefined) {
        if (document.getElementById(element) !== null) {
            layout.init(document.getElementById(element));
            config.resetCurrentConfig();
            events.dispatchEvent(customEvents.chorusInitComplete, 'chorusJS has finished initialization');
        }
        else if (document.getElementsByClassName(element).length > 0) {
            [].forEach.call(document.getElementsByClassName(element), function (ele) {
                layout.init(ele);
            });
            config.resetCurrentConfig();
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
_chorus.applyResults = function(tones, container){
    _chorus.layout.html.applyResults(tones, container);
};
_chorus.populateLists = function(scaleResultContainer,chordResultContainer){
    _chorus.layout.html.populateLists(scaleResultContainer, chordResultContainer);
};