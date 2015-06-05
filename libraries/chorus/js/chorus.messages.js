_chorus.messages = _chorus.messages || {};

_chorus.messages.sendMessage = _chorus.messages.sendMessage || function(message){
    switch(_chorus.config.messages){
        case "console":
            console.log(message);
            break;
        case "alert":
            alert(message);
            break;
        case "none" :
        default:
    }
};