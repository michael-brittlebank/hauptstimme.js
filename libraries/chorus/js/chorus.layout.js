_chorus.layout = _chorus.layout || {
    init : function(ele){
        console.log(ele);
        ele.innerHTML = _chorus.layout.html.string();

        //setTimeout(function(){
        //    _chorus.events.dispatchEvent("chorusLoaded","chorusJS has finished initialization");
        //}, 3000);
    }
};

_chorus.layout.html = _chorus.layout.html || {
    string : function() {
        return '<div class="string">string</div>';
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};