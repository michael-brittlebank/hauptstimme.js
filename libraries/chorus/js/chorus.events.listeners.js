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
        element.classList.remove(_chorus.data.dictionaries.fretClasses.selected);
        element.classList.remove(_chorus.data.dictionaries.fretClasses.root);
    },
    fretLeftClickHandler: function(e){
        e.preventDefault();
        var element = e.target || e.srcElement;
        var selected = _chorus.data.dictionaries.fretClasses.selected;
        var root = _chorus.data.dictionaries.fretClasses.root;
        if (element.classList.contains(selected)) {
            element.classList.remove(selected);
            element.classList.add(root);
        }
        else if(element.classList.contains(root)){
            element.classList.remove(root);
        }
        else {
            element.classList.add(selected);
        }
    }
};