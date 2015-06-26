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
        element.classList.remove(_chorus.data.dictionary.class_selected);
        element.classList.remove(_chorus.data.dictionary.class_root);
    },
    fretLeftClickHandler: function(e){
        e.preventDefault();
        var element = e.target || e.srcElement;
        var selectedClass = _chorus.data.dictionary.class_selected;
        var rootClass = _chorus.data.dictionary.class_root;
        var container = document.getElementById(element.id.substr(0,element.id.indexOf("_"))+_chorus.data.dictionary.class_container);
        var existingRoot = container.getElementsByClassName(rootClass);
        if (element.classList.contains(selectedClass)) {
            element.classList.remove(selectedClass);
            if (existingRoot.length > 0){
                existingRoot[0].classList.add(selectedClass);
                existingRoot[0].classList.remove(rootClass);
            }
            element.classList.add(rootClass);
        }
        else if(element.classList.contains(rootClass)){
            element.classList.remove(rootClass);
        }
        else {
            element.classList.add(selectedClass);
        }
    }
};