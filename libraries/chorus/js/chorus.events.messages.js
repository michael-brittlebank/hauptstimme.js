_chorus.events.messages = _chorus.events.messages || {
    sendMessage: function(message) {
        var messageSystem = _chorus.logic.helpers.getConfigValue("debug");
        switch (messageSystem) {
            case "console":
                console.log("ChorusJS: "+message);
                break;
            case "alert":
                alert("ChorusJS: "+message);
                break;
            case "none" :
                break;
            default:
                console.log("ChorusJS: "+message);
                break;
        }
    }
};