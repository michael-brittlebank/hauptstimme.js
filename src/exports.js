const Constants = require('./constants')
const Instruments = require('./data/instruments.data')
const Scales = require('./data/scales.data')
const Chords = require('./data/chords.data')
const Search = require('./services/search.service')
const Util = require('./services/util.service')
const Hauptstimme = require('./hauptstimme')

module.exports = { Constants, Instruments, Scales, Chords, Search, Util, Hauptstimme}