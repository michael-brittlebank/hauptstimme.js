_chorus.logic.helpers = _chorus.logic.helpers || {
    generateRandomString : function(length){
        var output;
        for(output = ""; output.length < length;) {
            output += Math.random().toString(36).substr(2, 1);
        }
        return output;
    }
};