_chorus.layout = _chorus.layout || {
    init : function(ele){
        console.log(ele);
        var prefix = _chorus.logic.helpers.generateRandomString(5);
        ele.innerHTML = _chorus.layout.html.string(prefix, 1);

        //setTimeout(function(){
        //    _chorus.events.dispatchEvent("chorusLoaded","chorusJS has finished initialization");
        //}, 3000);
    }
};

_chorus.layout.html = _chorus.layout.html || {
    string : function(prefix, root) {
        var id;
        var fret;
        var output = '<div class="string">';
        for(var i = 0; i < 12; i++){
            id = prefix+"_"+root+"_"+i;
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