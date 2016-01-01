/**
 * custom events namespace
 */
_chorus.events = _chorus.events || {
    /**
     * send a custom event when chorus init is complete
     */
    sendChorusLoaded : function(){
        document.dispatchEvent(new CustomEvent("chorusLoaded", {"detail": "ChorusJS: finished initialization" }));
    },
    /**
     * triggers custom events
     * @param eventName
     * @param eventDetail
     */
    dispatchEvent : function (eventName, eventDetail){
        var event; // The custom event that will be created
        if (document.createEvent) {
            event = document.createEvent("HTMLEvents");
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
            document.fireEvent("on" + event.eventType, event);
        }
    }
};