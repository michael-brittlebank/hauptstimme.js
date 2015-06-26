_chorus.logic.scales = _chorus.logic.scales || {
    compile:{
        init: function(){
            var root,tones,tone,letters,scaleKey,scaleName,scaleArray,letterProgression;
            var output = {};
            for(var i = 0; i < _chorus.data.notes.count.tones-1; i++){
                root = _chorus.logic.notes.getNoteByToneDefault(i);
                for (scaleKey in _chorus.data.scales.main) {
                    if (_chorus.data.scales.main.hasOwnProperty(scaleKey)) {
                        scaleName = root + " " + scaleKey.replace(/_/g," ").capitalize();
                        scaleArray = _chorus.data.scales.main[scaleKey];
                        tones = [i];
                        letters = [root];
                        for (var j = 0; j < scaleArray.length-1; j++) {
                            tone = (tones[j] + scaleArray[j]) % 12;
                            tones.push(tone);
                        }
                        for (var k = 1; k < scaleArray.length; k++) {
                            if (scaleArray.length == 7) {
                                letterProgression = _chorus.logic.notes.getLetterProgression(root);
                                letters.push(_chorus.logic.notes.getNoteByToneForce(tones[k], letterProgression[k]));
                            }
                            else {
                                letters.push(_chorus.logic.notes.getNoteByToneDefault(tones[k]));
                            }
                        }
                        output[scaleName] = {
                            tones: tones,
                            letters: letters
                        };
                    }
                }
            }
            console.log(output);
            return output;
//            tartTone = getNoteByTone(root)
//
//            tones = [startTone]
//            tone = startTone
//
//            for each step in list (of ints that represent scale type):
//            #the list should not include the last step to get to starting point
//            tone = (tone + step) % 12
//            tones.append(tone)
//
//
//            creates a list of the letters of the scale starting with the natural letter (first char) of root note
//            input a : output abcdefg
//            input d : output defgabc
//
//
//            letters = []
//
//#you can have an if here that makes this only trigger if the length of the scale is 7
//            for range(7):
//
//            getNoteByToneForce(tone[i],letters[i])
//
//
//
//            letter.append[root]
//            tones.append[startTone]

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

