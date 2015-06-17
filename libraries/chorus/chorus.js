var _chorus = window.chorus = _chorus || window.chorus || {};
_chorus.version = _chorus.version || {
    version: "0.4",
    lastUpdated: new Date().toDateString()
};
_chorus.defaultConfig = {
    //settings
    instrument:"main",
    hideHeadings: false,
    headingElement:"h2",
    stringOrder:"desc",
    scaleSearchButton: true,
    scaleSearchText: "Search Scales",
    scaleSearchCallback: "",
    //developer
    debug:"none"
};

_chorus.config = {};

_chorus.init = _chorus.init || function(element, config){
    _chorus.events.listeners.init();
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
            _chorus.layout.init(document.getElementById(element));
            _chorus.events.dispatchEvent("chorusInitComplete","chorusJS has finished initialization");
        }
        else if (document.getElementsByClassName(element).length > 0) {
            [].forEach.call(document.getElementsByClassName(element), function (ele) {
                _chorus.layout.init(ele);
            });
            _chorus.events.dispatchEvent("chorusInitComplete","chorusJS has finished initialization");
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.notFound+"no elements found using init value");
            return false;
        }
    }
    else {
        _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.undefined+"no element defined in init");
        return false;
    }
};
_chorus.data = _chorus.data || {

};
_chorus.logic = _chorus.logic || {

};