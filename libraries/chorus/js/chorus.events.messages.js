_chorus.events.messages = _chorus.events.messages || {
    sendMessage: function(message) {
        var messageSystem = typeof _chorus.config.messages === "string"?_chorus.config.messages:_chorus.defaultConfig.messages;
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