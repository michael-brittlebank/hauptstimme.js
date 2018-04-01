[![Build Status](https://travis-ci.org/mike-stumpf/chorus.js.svg?branch=master)](https://travis-ci.org/mike-stumpf/chorus.js)
[![Coverage Status](https://coveralls.io/repos/github/mike-stumpf/chorus.js/badge.svg?branch=master)](https://coveralls.io/github/mike-stumpf/chorus.js?branch=master)


# Chorus.js

A JavaScript library for visualizing music theory

## Quickstart

Chorus.JS is built in native JavaScript.  It relies on sending and receiving custom events which can be accessed via native JS
```
document.addEventListener('chorusSearchComplete', function(e) {
    console.log('listening');
});
```

or via JavaScript libraries like jQuery

```
$(document).on('chorusSearchComplete',function(){
    console.log('listening');
});
```

### Full Example

```
<html>
<head>
    <title>Chorus.js Quickstart</title>
    <script src="/chorus.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/chorus.min.css">
    <link rel="stylesheet" type="text/css" href="/chorus.min.css.map">
</head>
<div id="my-container-name">
</div>
<h2 class="chorus-standard-font">Results: Scales</h2>
<div id="results-scales" class="results-container">
</div>
<h2 class="chorus-standard-font">Results: Chords</h2>
<div id="results-chords" class="results-container">
</div>
<script>
    document.addEventListener('DOMContentLoaded', function(e) {
        config = {
            layoutInstrument: ['guitar'],
            chorusDebug:'console'
        };
        _chorus.init('my-container-name', config);
    });
    document.addEventListener('chorusSearchComplete', function(e) {
        setTimeout(function(){
            _chorus.populateLists('results-scales','results-chords');
        },100);
    });
</script>
</html>
```

For more examples, look in [/dist/index.html](https://github.com/mike-stumpf/chorus.js/blob/master/dist/index.html)

## Further Information
Please visit the [wiki](https://github.com/mike-stumpf/chorus.js/wiki) to see the documentation and submit any issues you have to this repository's [issue tracker](https://github.com/mike-stumpf/chorus.js/issues).
