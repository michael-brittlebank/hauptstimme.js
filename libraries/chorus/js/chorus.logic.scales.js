_chorus.logic.scales = _chorus.logic.scales || {

};

_chorus.logic.scales.searchScales = _chorus.searchScales = function(containerId){
    if(containerId && containerId.length > 0){
        var notes = _chorus.logic.notes.findSelectedNotes(containerId);
        console.log(notes);
    }
    else {
        var instruments = document.getElementsByClassName(_chorus.data.dictionaries.fretClasses.instrument);
        var results = [];
        for (var i = 0; i < instruments.length; i++){
            results.push(_chorus.logic.notes.findSelectedNotes(instruments[i].id));
        }
        console.log(results);
    }
    _chorus.events.dispatchEvent("chorusScaleSearchComplete","chorusJS has finished searching scales");
};

