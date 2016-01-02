/**
 * custom events namespace
 */
_chorus.events = _chorus.events || {
        /**
         * triggers custom events
         * @param eventName
         * @param eventDetail
         */
        dispatchEvent : function (eventName, eventDetail){
            var event; // The custom event that will be created
            if (document.createEvent) {
                event = document.createEvent('HTMLEvents');
                event.initEvent(eventName, true, true);
                event.detail = eventDetail;
            } else {
                event = document.createEventObject();
                event.eventType = eventName;
                event.detail = eventDetail;
            }
            event.eventName = eventName;
            if (document.createEvent) {
                document.dispatchEvent(event);
            } else {
                document.fireEvent('on' + event.eventType, event);
            }
        },
        sendMessage: function(message) {
            var messageSystem = _chorus.logic.helpers.getConfigValue('chorusDebug'),
                preface = 'ChorusJS - ';
            switch (messageSystem) {
                case 'console':
                    console.log(preface+message);
                    break;
                case 'alert':
                    alert(preface+message);
                    break;
                case 'none' :
                    break;
                default:
                    console.log(preface+message);
                    break;
            }
        }
    };

/**
 * internal event listeners
 */

/**
 * add a custom event listener
 * @param className
 * @param event
 * @param callback
 */
function addListener(className, event, callback){
    var elements = document.getElementsByClassName(className);
    for(var i=0;i<elements.length;i++){
        elements[i].addEventListener(event, callback, false);
    }
}

/**
 * remove all selected classes on fret right click
 * @param e
 */
function fretRightClickHandler(e){
    e.preventDefault();
    var element = e.target || e.srcElement;
    element.classList.remove(_chorus.data.dictionary.class_selected);
    element.classList.remove(_chorus.data.dictionary.class_root);
}

/**
 * change fret classes on left click
 * @param e
 */
function fretLeftClickHandler(e){
    e.preventDefault();
    var element = e.target || e.srcElement,
        selectedClass = _chorus.data.dictionary.class_selected,
        rootClass = _chorus.data.dictionary.class_root,
        container = element.parentNode,
        existingRoot = container.getElementsByClassName(rootClass);
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

_chorus.events.listeners = _chorus.events.listeners || {
        /**
         * add fret listeners after chorus init
         */
        init: function () {
            document.addEventListener('chorusInitComplete', function(e) {
                addListener('fret', 'click', fretLeftClickHandler);
                addListener('fret', 'contextmenu', fretRightClickHandler);
            });
        }
    };