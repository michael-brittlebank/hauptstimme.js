/**
 * messaging system to alert user
 */
_chorus.events.messages = _chorus.events.messages || {
    sendMessage: function(message) {
        var messageSystem = _chorus.logic.helpers.getConfigValue("chorusDebug"),
            preface = "ChorusJS - ";
        switch (messageSystem) {
            case "console":
                console.log(preface+message);
                break;
            case "alert":
                alert(preface+message);
                break;
            case "none" :
                break;
            default:
                console.log(preface+message);
                break;
        }
    }
};