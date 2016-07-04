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
    handlebars: {},
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
    this.multicolor = false;
    //developer
    this.chorusDebug ='none';
}).apply(_chorus.defaultConfig);

(function(){
    //variables
    this.currentConfig = '';

    //functions
    /**
     * reset current config object (used in search functions)
     */
    this.resetCurrentConfig = function(){
        this.currentConfig = '';
    };

}).apply(_chorus.config);

/**
 * sets config values and creates instrument grid
 * @param {string} element id or classname for html dom element to initialize chorus in
 * @param {Object} userConfig object with key:value pairs to replace default config
 */
_chorus.init = function(element, userConfig) {
    var events = _chorus.events,
        layout = _chorus.layout,
        dictionary = _chorus.data.dictionary,
        customEvents = _chorus.data.customEvents,
        configId = layout.getRandomId(),
        config = _chorus.config,
        helpers = _chorus.logic.helpers,
        domContainers;
    _chorus.handlebars.applyHelpers();
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
        domContainers = helpers.getDomRepresentationFromStringName(element);
        if (domContainers && domContainers.length > 0) {
            domContainers.forEach(function(entry){
                layout.init(entry);
            });
            config.resetCurrentConfig();
            events.dispatchEvent(customEvents.chorusInitComplete, 'chorusJS has finished initialization');
        } else {
            events.sendMessage(dictionary.errorNotFound + 'no elements found using init value');
        }
    } else {
        events.sendMessage(dictionary.errorUndefined + 'no element defined in init');
    }
};

/**
 * top level methods exposing lower level functions
 */

/**
 * search all modules based on provided tones or tones found in the container
 * @param {Array} [tones] array of tone ints
 * @param {string} [container] id or classname for html dom element to search in
 * @param {function} [callback] function to call after search is complete
 */
_chorus.search = function(tones, container, callback){
    _chorus.logic.helpers.searchScalesAndChords(tones,container,callback);
};

/**
 * search the scales module based on provided tones or tones found in the container
 * @param {Array} [tones] array of tone ints
 * @param {string} [container] id or classname for html dom element to search in
 * @param {function} [callback] function to call after search is complete
 */
_chorus.searchScales = function(tones, container, callback){
    _chorus.logic.scales.searchScales(tones, container, false, callback);
};

/**
 * search the chords module based on provided tones or tones found in the container
 * @param {Array} [tones] array of tone ints
 * @param {string} [container] id or classname for html dom element to search in
 * @param {function} [callback] function to call after search is complete
 */
_chorus.searchChords = function(tones, container, callback){
    _chorus.logic.chords.searchChords(tones, container, false, callback);
};

/**
 * apply tone results to selected instrument container
 * @param {Array} [tones] array of tone ints
 * @param {string} container id or classname for html dom element to apply tones to
 */
_chorus.applyResults = function(tones, container){
    _chorus.layout.html.applyResults(tones, container);
};

/**
 * insert results into containers
 * @param {string} [scaleResultContainer] container id or classname for html dom element to insert results in
 * @param {string} [chordResultContainer] container id or classname for html dom element to insert results in
 */
_chorus.populateLists = function(scaleResultContainer,chordResultContainer){
    _chorus.layout.html.populateLists(scaleResultContainer, chordResultContainer);
};

/**
 * clear search results from container
 * @param {string} [chorusResultContainer] container id or classname for html dom element to clear results from
 */
_chorus.clear = function(chorusResultContainer){
    _chorus.layout.html.clearResults(chorusResultContainer);
};