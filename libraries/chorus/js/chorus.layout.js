_chorus.layout = _chorus.layout || {
    init : function(element){
        var instrument = _chorus.config.instrument;
        switch(instrument){
            case "all":

                break;
            case "main":

                break;
            default :
                if (_chorus.data.instruments.main.hasOwnProperty(instrument)){
                    _chorus.layout.html.instrument(element, instrument, _chorus.data.instruments.main[instrument]);
                }
                else if(_chorus.data.instruments.other.hasOwnProperty(instrument)){
                    _chorus.layout.html.instrument(element, instrument, _chorus.data.instruments.other[instrument]);
                }
                break;
        }
        _chorus.events.dispatchEvent("chorusInitComplete","chorusJS has finished initialization");
    }
};

_chorus.layout.html = _chorus.layout.html || {
    instrument : function(element, instrumentName, instrumentTuning){
        console.log(instrumentName);
        console.log(instrumentTuning);
        var prefix = _chorus.logic.helpers.generateRandomString(5);
        //element.innerHTML = _chorus.layout.html.string(prefix, 1);
    },
    string : function(prefix, root, stringNumber) {
        var id,fret;
        var output = '<div class="string">';
        for(var i = 0; i < 12; i++){
            id = prefix+"_"+stringNumber+"_"+root+"_"+i;
            fret = _chorus.logic.notes.getNoteById((root+i));
            output += '<div id="'+id+'" class="fret">'+fret+'</div>';
        }
        return output+'</div>';
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};