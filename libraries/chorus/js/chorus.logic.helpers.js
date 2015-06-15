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
    }
};