_chorus.layout.html = _chorus.layout.html || {
    instrument : function(instrumentName, instrumentTuning, prefix){
        if (typeof _chorus.config.stringOrder == "string"){
            if (_chorus.config.stringOrder == "asc"){
                instrumentTuning.reverse();
            }
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionary.error_type+"string order config parameter");
        }
        var stringContent = "";
        for(var i = 0;i<instrumentTuning.length;i++){
            stringContent = _chorus.layout.html.string(prefix, instrumentTuning[i], i+1)+stringContent;
        }
        if (Boolean(_chorus.config.hideHeadings) !== true){
            var htmlElement = _chorus.logic.getConfigValue("headingElement");
            stringContent ="<"+htmlElement+">"+instrumentName.replace(/_/g," ")+"</"+htmlElement+">"+stringContent;
        }
        if (Boolean(_chorus.config.scaleSearchButton) === true){
            var title = _chorus.logic.getConfigValue("scaleSearchText");
            stringContent += '<a class="searchButton" onclick="_chorus.searchScales(\''+prefix+_chorus.data.dictionary.class_container+'\')">'+title+'</a>';
        }
        return '<div id="'+prefix+_chorus.data.dictionary.class_container+'" class="'+_chorus.data.dictionary.class_instrument+'">'+
            stringContent+
            "</div>";
    },
    string : function(prefix, root, stringNumber) {
        var id,fret,note;
        var numberOfTones = 12;
        var numberOfFrets = 12;
        var output = '<div class="'+_chorus.data.dictionary.class_string+'">';
        for(var i = 0; i <= numberOfFrets; i++){
            note = (parseInt(root)+i)%numberOfTones;
            id = prefix+"_"+stringNumber+"_"+note;
            fret = _chorus.logic.notes.getNoteByToneDefault(note);
            output +=
                '<div id="'+id+'" class="'+_chorus.data.dictionary.class_fret+'">'+
                _chorus.layout.html.htmlFilter(fret)+
                '</div>';
        }
        return output+'</div>';
    },
    htmlFilter : function(note){
        return note.replace(/#/g,"&#9839;").replace(/b/g,"&#9837;");
    }
};
