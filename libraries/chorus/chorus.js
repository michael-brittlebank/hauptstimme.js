var _chorus = _chorus || {};
_chorus.version = _chorus.version || {
    version: 0.3,
    lastUpdated: new Date().toDateString()
};
_chorus.config = _chorus.config || {
    messages:"console"
};
_chorus.init = _chorus.init || function(ele, config){
    if (config !== undefined) {
        for (var key in config) {
            if (config.hasOwnProperty(key) && _chorus.config.hasOwnProperty(key)) {
                _chorus.config[key] = config[key];
            }
        }
    }
    if (ele !== undefined) {
        if (document.getElementById(ele) !== null) {
            _chorus.layout.init(document.getElementById(ele));
        }
        else if (document.getElementsByClassName(ele).length > 0) {
            [].forEach.call(document.getElementsByClassName(ele), function (el) {
                _chorus.layout.init(el);
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