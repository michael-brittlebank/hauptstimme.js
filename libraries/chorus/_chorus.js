var _chorus = _chorus || {};
_chorus.version = _chorus.version || {
    version: 0.2,
    lastUpdated: new Date().toDateString()
};
_chorus.init = _chorus.init || function(ele){
    if (ele === undefined){
        return false;
    }
    else if (document.getElementById(ele) !== null){
        console.log("id");
    }
    else if (document.getElementsByClassName(ele).length > 0){
        console.log("class");
    }
    else {
        return false;
    }
};