_chorus.logic.helpers = _chorus.logic.helpers || {
    generateRandomString : function(length){
        var output;
        for(output = ""; output.length < length;) {
            output += Math.random().toString(36).substr(2, 1);
        }
        return output;
    },
    cloneObject : function(from, to) {
        if (from == null || typeof from != "object") return from;
        if (from.constructor != Object && from.constructor != Array) return from;
        if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
            from.constructor == String || from.constructor == Number || from.constructor == Boolean)
            return new from.constructor(from);
        to = to || new from.constructor();
        for (var name in from) {
            to[name] = typeof to[name] == "undefined" ? _chorus.logic.helpers.cloneObject(from[name], null) : to[name];
        }
        return to;
    },
    getConfigValue: function(key){
        if (typeof _chorus.config[key] !== typeof _chorus.defaultConfig[key]){
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_type+" "+key);
        }
        return typeof _chorus.config[key] === typeof _chorus.defaultConfig[key]?_chorus.config[key]:_chorus.defaultConfig[key];
    },
    getKeyFromValue: function(object, value){
        for(var prop in object) {
            if(object.hasOwnProperty(prop)) {
                if(object[prop] === value) {
                    return prop;
                }
            }
        }
    },
    countObjectLength: function(object){
        var key;
        var i = 0;
        for(key in object){
            if (object.hasOwnProperty(key)){
                i++;
            }
        }
        return i;
    },
    capitalize: function(string){
        return string.toLowerCase().replace( /\b\w/g, function (m) {
            return m.toUpperCase();
        });
    }
};