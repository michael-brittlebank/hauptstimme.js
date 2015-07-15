_chorus.layout.html = _chorus.layout.html || {
    instrument : function(instrumentName, instrumentTuning, prefix){
        var stringOrder = _chorus.logic.helpers.getConfigValue("layoutInstrumentStringOrder"),
            stringContent = "",
            containerClass = _chorus.logic.helpers.getConfigValue("layoutContainerClass");
        if (stringOrder == "asc"){
            instrumentTuning.reverse();
        }
        for(var i = 0;i<instrumentTuning.length;i++){
            stringContent = _chorus.layout.html.string(instrumentTuning[i])+stringContent;
        }
        if (_chorus.logic.helpers.getConfigValue("layoutInstrumentTitles") !== true){
            var htmlElement = _chorus.logic.helpers.getConfigValue("layoutInstrumentTitleElement");
            stringContent ="<"+htmlElement+">"+instrumentName.replace(/_/g," ")+"</"+htmlElement+">"+stringContent;
        }
        if (_chorus.logic.helpers.getConfigValue("scaleSearchButton") === true){
            var title = _chorus.logic.helpers.getConfigValue("scaleSearchText"),
                searchMode = _chorus.logic.helpers.getConfigValue("scaleSearchMode"),
                callback = _chorus.logic.helpers.getConfigValue("scaleSearchCallback");
            stringContent += '<a class="searchButton" onclick="_chorus.searchScales(\'\',\''+searchMode+'\','+callback+',\''+prefix+_chorus.data.dictionary.class_container+'\')">'+title+'</a>';
        }
        return '<div id="'+prefix+_chorus.data.dictionary.class_container+'" class="'+_chorus.data.dictionary.class_instrument+' '+containerClass+'">'+
            stringContent+
            "</div>";
    },
    string : function(root) {
        var fret,tone;
        var numberOfFrets = 12;
        var output = '<div class="'+_chorus.data.dictionary.class_string+'">';
        for(var i = 0; i <= numberOfFrets; i++){
            tone = (parseInt(root)+i)%_chorus.data.notes.count.tones;
            fret = _chorus.logic.notes.getNoteByToneDisplay(tone);
            output +=
                '<div class="'+_chorus.data.dictionary.class_fret+' '+_chorus.data.dictionary.class_tone+tone+'">'+
                _chorus.layout.html.htmlFilter(fret)+
                '</div>';
        }
        return output+'</div>';
    },
    htmlFilter : function(note){
        return note.replace(/#/g,"&#9839;").replace(/b/g,"&#9837;");
    }
};
