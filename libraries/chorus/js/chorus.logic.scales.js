_chorus.logic.scales = _chorus.logic.scales || {
    compile:{
        init: function(){

            //first create all scale variations for seven note scales and convert to letter for theoretical testing

            //filter out theoretical scales

            //reconvert to int sequences

            //loop through non seven note scales with the nice filter values
        },
        construct: function (){
        }
    }
};

_chorus.logic.scales.searchScales = _chorus.searchScales = function(containerId){
    var data;
    if(containerId && containerId.length > 0){
        var notes = _chorus.logic.notes.findSelectedNotes(containerId);
        console.log("containerid passed");
        data = _chorus.logic.scales.scaleDrill(notes);
    }
    else {
        var instruments = document.getElementsByClassName(_chorus.data.dictionary.class_instrument);
        var results = [];
        for (var i = 0; i < instruments.length; i++){
            results.push(_chorus.logic.notes.findSelectedNotes(instruments[i].id));
        }
        console.log("searching across page");
        console.log(results);
    }
    _chorus.searchResult.scales = data;
    _chorus.events.dispatchEvent("chorusScaleSearchComplete","chorusJS has finished searching scales");
};

_chorus.logic.scales.scaleDrill = function(notes){
    console.log(notes);
    var data = {
        containerId: notes.containerId,
        scales: []
    };
    if (notes.hasOwnProperty("rootNote") && notes.rootNote){
        console.log("has root note");
    }
    else {
        console.log("doesn't have root note");
        if (notes.hasOwnProperty("selectedNotes") && notes.selectedNotes){

        }
    }
    return data;
};

