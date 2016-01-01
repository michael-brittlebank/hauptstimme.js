_chorus.logic.helpers = _chorus.logic.helpers || {
    /**
     * get a random string
     * @param length
     * @returns {*}
     */
    generateRandomString : function(length){
        var output;
        for(output = ""; output.length < length;) {
            output += Math.random().toString(36).substr(2, 1);
        }
        return output;
    },
    /**
     * make a copy of a JS object
     * @param from
     * @param to
     * @returns {*}
     */
    cloneObject : function(from, to) {
        if (from ==+ null || typeof from !== "object") return from;
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
    /**
     * get the config value for the key passed or return the default if none available
     * @param key
     * @returns {*}
     */
    getConfigValue: function(key){
        if (typeof _chorus.config[key] !== typeof _chorus.defaultConfig[key]){
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_type+" "+key);
        }
        return typeof _chorus.config[key] === typeof _chorus.defaultConfig[key]?_chorus.config[key]:_chorus.defaultConfig[key];
    },
    /**
     * get the object key given the value
     * @param object
     * @param value
     * @returns {string}
     */
    getKeyFromValue: function(object, value){
        for(var prop in object) {
            if(object.hasOwnProperty(prop)) {
                if(object[prop] === value) {
                    return prop;
                }
            }
        }
    },
    /**
     * gets the size of a one dimensional object
     * @param object
     * @returns {number}
     */
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
    /**
     * capitalize all of the words in a string
     * @param string
     * @returns {string}
     */
    capitalize: function(string){
        return string.toLowerCase().replace( /\b\w/g, function (m) {
            return m.toUpperCase();
        });
    },
    validator: {
        /**
         * validates the scale search mode
         * @param mode
         * @returns {boolean}
         */
        isValidScaleSearchMode:function(mode){
            return mode === "main" ||
                mode === "other" ||
                mode === "all";
        }
    }
};