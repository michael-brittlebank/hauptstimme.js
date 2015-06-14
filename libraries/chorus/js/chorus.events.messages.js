_chorus.events.messages = _chorus.events.messages || {
    sendMessage: function(message) {
        var messageSystem = typeof _chorus.config.messages === "string"?_chorus.config.messages:_chorus.defaultConfig.messages;
        switch (messageSystem) {
            case "console":
                console.log(message);
                break;
            case "alert":
                alert(message);
                break;
            case "none" :
                break;
            default:
                console.log(message);
                break;
        }
    }
};