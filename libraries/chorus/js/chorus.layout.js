_chorus.layout = _chorus.layout || {
    init : function(element){
        var instrument = _chorus.config.instrument;
        var content;
        var key;
        switch(instrument){
            case "all":
                content = "";
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)){
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key]);
                    }
                }
                for (key in _chorus.data.instruments.other) {
                    if (_chorus.data.instruments.other.hasOwnProperty(key)){
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.other[key]);
                    }
                }
                element.innerHTML = content;
                break;
            case "main":
                content = "";
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)){
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key]);
                    }
                }
                element.innerHTML = content;
                break;
            case "alternate":
                content = "";
                for (key in _chorus.data.instruments.alternateGuitar) {
                    if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(key)){
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.alternateGuitar[key]);
                    }
                }
                element.innerHTML = content;
                break;
            default :
                if (_chorus.data.instruments.main.hasOwnProperty(instrument)){
                    element.innerHTML = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.main[instrument]);
                }
                else if(_chorus.data.instruments.other.hasOwnProperty(instrument)){
                    element.innerHTML = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.other[instrument]);
                }
                else if(_chorus.data.instruments.alternateGuitar.hasOwnProperty(instrument)){
                    element.innerHTML = _chorus.layout.html.instrument(instrument, _chorus.data.instruments.alternateGuitar[instrument]);
                }
                break;
        }
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};