_chorus.layout = _chorus.layout || {
    init : function(element){
        var instrument = _chorus.config.instrument;
        switch(instrument){
            case "all":

                break;
            case "main":
//for loop through main instrument tunings
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