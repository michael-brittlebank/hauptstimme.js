_chorus.layout = _chorus.layout || {};

_chorus.layout.html = _chorus.layout.html || {
    timeout : function(){
        setTimeout(function(){
            _chorus.events.dispatchEvent("chorusLoaded","chorusJS has finished initialization");
        }, 3000);
    }
};

_chorus.layout.css = _chorus.layout.css || {
    toBlock : function(){
        return "hello" ;
    }
};