var _chorus = _chorus || {};
_chorus.version = _chorus.version || {
    version: 0.3,
    lastUpdated: new Date().toDateString()
};
_chorus.config = _chorus.config || {
    //main
    instrument:"main",
    //settings
    messages:"console"
};
_chorus.init = _chorus.init || function(element, config){
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
        }
        else if (document.getElementsByClassName(element).length > 0) {
            [].forEach.call(document.getElementsByClassName(element), function (ele) {
                _chorus.layout.init(ele);
            });
        }
        else {
            _chorus.messages.sendMessage("no elements found on page for init");
            return false;
        }
    }
    else {
        _chorus.messages.sendMessage("no element defined in init");
        return false;
    }
};
_chorus.data = _chorus.data || {

};
_chorus.logic = _chorus.logic || {

};