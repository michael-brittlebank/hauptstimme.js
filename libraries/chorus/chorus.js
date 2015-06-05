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
                console.log(_chorus.config[key]);
                _chorus.config[key] = config[key];
                console.log(_chorus.config[key]);
            }
        }
    }
    if (ele !== undefined) {
        if (document.getElementById(ele) !== null) {
            console.log("id");
        }
        else if (document.getElementsByClassName(ele).length > 0) {
            console.log("class");
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