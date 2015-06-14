_chorus.events.listeners = _chorus.events.listeners || {
    init: function () {
        document.addEventListener("chorusInitComplete", function(e) {
            _chorus.events.listeners.addListener("fret", "click",_chorus.events.listeners.fretLeftClickHandler);
            _chorus.events.listeners.addListener("fret", "contextmenu",_chorus.events.listeners.fretRightClickHandler);
        });
    },
    addListener: function(className, event, callback){
        var elements = document.getElementsByClassName(className);
        for(var i=0;i<elements.length;i++){
            elements[i].addEventListener(event, callback, false);
        }
    },
    fretRightClickHandler: function(e){
        e.preventDefault();
        var element = e.target || e.srcElement;
        element.classList.remove('fret-selected');
        element.classList.remove('fret-root');
    },
    fretLeftClickHandler: function(e){
        e.preventDefault();
        var element = e.target || e.srcElement;
        console.log(element);
        if (element.classList.contains('fret-selected')) {
            element.classList.remove('fret-selected');
            element.classList.add('fret-root');
        }
        else if(element.classList.contains('fret-root')){
            element.classList.remove('fret-root');
        }
        else {
            element.classList.add('fret-selected');
        }
    }
};