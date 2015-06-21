_chorus.layout = _chorus.layout || {
    init : function(element){
        var instrument = _chorus.config.instrument;
        var prefix;
        console.log(typeof instrument);
        if (typeof _chorus.config.containerId === "string" && _chorus.config.containerId.length > 0){
            prefix = _chorus.config.containerId;
        }
        else {
            prefix = _chorus.logic.helpers.generateRandomString(5);
        }
        if (typeof instrument === "string") {
            element.innerHTML = _chorus.layout.selectInstrument(instrument,prefix);
        }
        else if (Array.isArray(instrument)){
            var content = "";
            var counter = 0;
            for(var i = 0; i < instrument.length; i++){
                var increment = 0;
                switch (instrument){
                    case "all":
                        increment =  _chorus.data.instruments.all.length;
                        break;
                    case "main":
                        increment =  _chorus.data.instruments.main.length;
                        break;
                    case "alternate":
                        increment =  _chorus.data.instruments.alternateGuitar.length;
                        break;
                }
                content += _chorus.layout.selectInstrument(instrument[i], prefix, counter);
                counter += 1 + increment;
            }
            element.innerHTML = content;
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.type+"instrument config parameter");
        }
    },
    selectInstrument: function(instrument, prefix, counter){
        var content = "";
        var key;
        if(!counter){
            counter = "";
        }
        switch (instrument) {
            case "all":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key) && key!=="length") {
                        content += _chorus.layout.html.instrument(key,
                            _chorus.data.instruments.main[key],_chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                for (key in _chorus.data.instruments.other) {
                    if (_chorus.data.instruments.other.hasOwnProperty(key) && key!=="length") {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.other[key],
                            _chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }

                break;
            case "main":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key) && key!=="length") {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key],
                            _chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            case "alternate":
                for (key in _chorus.data.instruments.alternateGuitar) {
                    if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(key) && key!=="length") {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.alternateGuitar[key],_chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            default :
                if (_chorus.data.instruments.main.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.main[instrument],_chorus.layout.prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (_chorus.data.instruments.other.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.other[instrument],_chorus.layout.prefixBuilder(prefix,counter));
                    counter++;
                }
                else if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.alternateGuitar[instrument],_chorus.layout.prefixBuilder(prefix,counter));
                    counter++;
                }
                break;
        }
        return content;
    },
    prefixBuilder: function(prefix, counter){
        if (counter.length > 0){
            return prefix +"-"+counter;
        }
        else {
            return prefix;
        }
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};