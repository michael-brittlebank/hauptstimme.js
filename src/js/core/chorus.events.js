/**
 * Event Core
 */
(function() {
    //variables
    this.listeners = {};
    this.handlers = {};

    //functions
    /**
     * triggers custom events
     * @param eventName
     * @param eventDetail
     */
    this.dispatchEvent = function (eventName, eventDetail){
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
    };

    this.sendMessage = function(message) {
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
    };
}).apply(_chorus.events);

/**
 * Event Handlers
 */
(function() {
    //variables
    var dictionary = _chorus.data.dictionary;

    //functions
    /**
     * remove all selected classes on fret right click
     * @param e
     */
    this.fretRightClickHandler = function(e){
        e.preventDefault();
        var element = e.target || e.srcElement;
        element.classList.remove(dictionary.class_selected);
        element.classList.remove(dictionary.class_root);
    };
    /**
     * change fret classes on left click
     * @param e
     */
    this.fretLeftClickHandler = function(e){
        e.preventDefault();
        var element = e.target || e.srcElement,
            selectedClass = dictionary.class_selected,
            rootClass = dictionary.class_root,
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
    };
}).apply(_chorus.events.handlers);

/**
 * Event Listeners
 */
(function() {
    //variables
    var events = _chorus.events,
        handlers = events.handlers,
        listeners = events.listeners,
        dictionary = _chorus.data.dictionary;

    //functions
    /** add a custom event listener
     * @param className
     * @param event
     * @param callback
     */
    this.addListener = function(className, event, callback){
        var elements = document.getElementsByClassName(className);
        for(var i=0;i<elements.length;i++){
            elements[i].addEventListener(event, callback, false);
        }
    };

    /**
     * add fret listeners after chorus init
     */
    this.init = function () {
        document.addEventListener('chorusInitComplete', function(e) {
            listeners.addListener(dictionary.class_fret, 'click', handlers.fretLeftClickHandler);
            listeners.addListener(dictionary.class_fret, 'contextmenu', handlers.fretRightClickHandler);
        });
    };

}).apply(_chorus.events.listeners);