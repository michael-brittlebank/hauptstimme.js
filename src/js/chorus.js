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
    this.scaleContainers = [];
    this.chords = {};
    this.chordContainers = [];
}).apply(_chorus.searchResult);

/**
 * default config
 */
(function(){
    //logic
    this.scaleSearchCallback = '';
    this.scaleSearchMode = 'all';
    //layout
    this.layoutInstrument ='main';
    this.layoutInstrumentTitles = false;
    this.layoutInstrumentTitleElement ='h2';
    this.layoutInstrumentStringOrder ='desc';
    this.layoutContainerId = '';
    this.layoutContainerClass = '';
    this.scaleSearchButton = true;
    this.scaleSearchText = 'Search Scales';
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
        dictionary = _chorus.data.dictionary;
    events.listeners.init();
    _chorus.config = _chorus.logic.helpers.cloneObject(_chorus.defaultConfig);
    if (config !== undefined) {
        for (var key in config) {
            if (config.hasOwnProperty(key) && _chorus.config.hasOwnProperty(key)) {
                _chorus.config[key] = config[key];
            }
        }
    }
    if (element !== undefined) {
        if (document.getElementById(element) !== null) {
            layout.init(document.getElementById(element));
            events.dispatchEvent('chorusInitComplete', 'chorusJS has finished initialization');
        }
        else if (document.getElementsByClassName(element).length > 0) {
            [].forEach.call(document.getElementsByClassName(element), function (ele) {
                layout.init(ele);
            });
            events.dispatchEvent('chorusInitComplete', 'chorusJS has finished initialization');
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
 * top level methods exposing
 */
_chorus.searchScales = function(tones, scaleSearchMode, callback, container){
    _chorus.logic.scales.searchScales(tones, scaleSearchMode, callback, container);
};