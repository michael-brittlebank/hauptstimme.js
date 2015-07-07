_chorus.layout = {
    init : function(element){
        var instrument = _chorus.config.layoutInstrument;
        var prefix;
        var containerId = _chorus.logic.helpers.getConfigValue("layoutContainerId");
        if (containerId.length > 0){
            prefix = containerId;
        }
        else {
            prefix = _chorus.layout.getRandomId();
        }
        if (typeof instrument === "string") {
            element.innerHTML = _chorus.layout.selectInstrument(instrument,prefix);
        }
        else if (Array.isArray(instrument)){
            var content = "";
            var counter = 1;
            for(var i = 0; i < instrument.length; i++){
                var increment = 0;
                switch (instrument[i]){
                    case "all":
                        increment =  _chorus.data.instruments.count.all;
                        break;
                    case "main":
                        increment =  _chorus.data.instruments.count.main;
                        break;
                    case "alternate":
                        increment =  _chorus.data.instruments.count.alternateGuitar;
                        break;
                }
                content += _chorus.layout.selectInstrument(instrument[i], prefix, counter);
                if (increment > 0){
                    counter += increment;
                }
                else {
                    counter += 1;
                }
            }
            element.innerHTML = content;
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_type+"instrument config parameter");
        }
    },
    getRandomId: function(){
        var id = _chorus.layout.prefixBuilder(_chorus.logic.helpers.generateRandomString(5));
        var elementWithSameId = document.getElementById(id);
        if (!elementWithSameId){
            return id;
        }
        else {
            return _chorus.layout.getRandomId();
        }
    },
    selectInstrument: function(instrument, prefix, counter){
        var content = "";
        var key;
        if(!counter){
            counter = 0;
        }
        switch (instrument) {
            case "all":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key,
                            _chorus.data.instruments.main[key],_chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                for (key in _chorus.data.instruments.other) {
                    if (_chorus.data.instruments.other.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.other[key],
                            _chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }

                break;
            case "main":
                for (key in _chorus.data.instruments.main) {
                    if (_chorus.data.instruments.main.hasOwnProperty(key)) {
                        content += _chorus.layout.html.instrument(key, _chorus.data.instruments.main[key],
                            _chorus.layout.prefixBuilder(prefix,counter));
                        counter++;
                    }
                }
                break;
            case "alternate":
                for (key in _chorus.data.instruments.alternateGuitar) {
                    if (_chorus.data.instruments.alternateGuitar.hasOwnProperty(key)) {
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
        if (counter && (counter.length > 0 || counter > 0)){
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