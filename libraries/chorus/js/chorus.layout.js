_chorus.layout = _chorus.layout || {
    init : function(element){
        var instrument = _chorus.config.instrument;
        if (typeof instrument === "string") {
            element.innerHTML = _chorus.layout.selectInstrument(instrument);
        }
        else if (Array.isArray(instrument)){
            var content = "";
            for(var i = 0; i < instrument.length; i++){
                content += _chorus.layout.selectInstrument(instrument[i]);
            }
            element.innerHTML = content;
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.type+"instrument config parameter");
        }
    },
    selectInstrument: function(instrument){
        var content = "";
        var key;
        switch (instrument) {
            case "all":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key]);
                    }
                }
                for (key in _chorus.data.instruments.other) {
                    if (_chorus.data.instruments.other.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.other[key]);
                    }
                }

                break;
            case "main":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key]);
                    }
                }
                break;
            case "alternate":
                for (key in _chorus.data.instruments.alternateGuitar) {
                    if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.alternateGuitar[key]);
                    }
                }
                break;
            default :
                if (_chorus.data.instruments.main.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.main[instrument]);
                }
                else if (_chorus.data.instruments.other.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.other[instrument]);
                }
                else if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(instrument)) {
                    content = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.alternateGuitar[instrument]);
                }
                break;
        }
        return content;
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};