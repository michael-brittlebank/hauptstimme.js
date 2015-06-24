_chorus.layout.html = _chorus.layout.html || {
    instrument : function(instrumentName, instrumentTuning, prefix){
        var strings = instrumentTuning.split(",");
        if (typeof _chorus.config.stringOrder == "string"){
            if (_chorus.config.stringOrder == "asc"){
                strings.reverse();
            }
        }
        else {
            _chorus.events.messages.sendMessage(_chorus.data.dictionaries.messages.errors.type+"string order config parameter");
        }
        var stringContent = "";
        for(var i = 0;i<strings.length;i++){
            stringContent = _chorus.layout.html.string(prefix, strings[i], i+1)+stringContent;
        }
        if (Boolean(_chorus.config.hideHeadings) !== true){
            var htmlElement = typeof _chorus.config.headingElement === "string"?_chorus.config.headingElement:_chorus.defaultConfig.headingElement;
            stringContent ="<"+htmlElement+">"+instrumentName.replace(/_/g," ")+"</"+htmlElement+">"+stringContent;
        }
        if (Boolean(_chorus.config.scaleSearchButton) === true){
            var title;
            if (typeof _chorus.config.scaleSearchText === "string"){
                title = _chorus.config.scaleSearchText;
            }
            else {
                title = _chorus.defaultConfig.scaleSearchText;
            }
            stringContent += '<a class="searchButton" onclick="_chorus.searchScales(\''+prefix+_chorus.data.dictionaries.fretClasses.container+'\')">'+title+'</a>';
        }
        return '<div id="'+prefix+_chorus.data.dictionaries.fretClasses.container+'" class="'+_chorus.data.dictionaries.fretClasses.instrument+'">'+
            stringContent+
            "</div>";
    },
    string : function(prefix, root, stringNumber) {
        var id,fret,note;
        var output = '<div class="'+_chorus.data.dictionaries.fretClasses.string+'">';
        for(var i = 0; i <= 12; i++){
            note = (parseInt(root)+i)%12;
            id = prefix+"_"+stringNumber+"_"+note;
            fret = _chorus.logic.notes.filterNoteValue(_chorus.logic.notes.getNoteById(note));
            output +=
                '<div id="'+id+'" class="'+_chorus.data.dictionaries.fretClasses.fret+'">'+
                _chorus.layout.html.htmlFilter(fret)+
                '</div>';
        }
        return output+'</div>';
    },
    htmlFilter : function(note){
        return note.replace(/#/g,"&#9839;").replace(/b/g,"&#9837;");
    }
};
