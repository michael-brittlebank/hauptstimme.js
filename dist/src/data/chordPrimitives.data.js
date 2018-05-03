"use strict";
exports.__esModule = true;
var chordOrScaleType_constant_1 = require("../../constants/chordOrScaleType.constant");
var util_service_1 = require("../services/util.service");
var note_constant_1 = require("../../constants/note.constant");
var _ = require("lodash");
var scales_data_1 = require("./scales.data");
var ChordPrimitivesData = (function () {
    function ChordPrimitivesData() {
    }
    ChordPrimitivesData.getScaleNoteIndex = function (step, rootScaleLength) {
        return util_service_1.UtilService.modulo(parseInt(step, 10) - 1, rootScaleLength);
    };
    ChordPrimitivesData.compileChordPrimitivesIntoChords = function () {
        var _this = this;
        var chordPrimitives = this.getAvailableChordPrimitives();
        var noteLength = util_service_1.UtilService.getLengthOfEnum(note_constant_1.NoteConstant);
        var scales = scales_data_1.ScalesData.getAvailableScales();
        var chords = [];
        var chordNotes;
        var assembledChords = [];
        var rootNote;
        var scaleNoteIndex;
        var noteToAdd;
        var rootScale;
        var rootScaleLength;
        var chordDescription;
        var defaultScale = {
            name: 'Empty Scale',
            notes: [],
            type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS,
            description: ''
        };
        for (var i = 0; i < noteLength; i++) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[i]);
            assembledChords = _.map(chordPrimitives, function (chordPrimitive) {
                chordNotes = [];
                chordDescription = [];
                if (chordPrimitive.type === chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR) {
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('aeolian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                }
                else {
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('ionian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                }
                if (!!rootScale) {
                    rootScaleLength = rootScale.notes.length;
                    _.each(chordPrimitive.steps, function (step) {
                        if (step.indexOf('b') !== -1) {
                            if (step.indexOf('bb') !== -1) {
                                scaleNoteIndex = _this.getScaleNoteIndex(step.substr(2, step.length), rootScaleLength);
                                noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] - 2, noteLength);
                            }
                            else {
                                scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                                noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] - 1, noteLength);
                            }
                        }
                        else if (step.indexOf('#') !== -1) {
                            scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] + 1, noteLength);
                        }
                        else if (step.indexOf('(') !== -1) {
                            scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        }
                        else {
                            scaleNoteIndex = _this.getScaleNoteIndex(step, rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        }
                        var noteDescription = util_service_1.UtilService.getFormattedNoteString(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[noteToAdd]), chordNotes);
                        if (step.indexOf('(') !== -1) {
                            noteDescription = ['(', noteDescription, ')'].join('');
                        }
                        chordDescription.push(noteDescription);
                        chordNotes.push(noteToAdd);
                    });
                    var chordDescriptionArray_1 = _.sortBy(_.uniq(chordDescription), function (noteDescription) {
                        if (noteDescription.indexOf('(') !== -1) {
                            return noteDescription.substr(1, noteDescription.length);
                        }
                        else {
                            return noteDescription;
                        }
                    });
                    chordDescriptionArray_1 = _.filter(chordDescriptionArray_1, function (noteDescription) {
                        if (noteDescription.indexOf('(') === -1) {
                            return chordDescriptionArray_1.indexOf(['(', noteDescription, ')'].join('')) === -1;
                        }
                        else {
                            return true;
                        }
                    });
                    var firstPortionOfChordDescription = chordDescriptionArray_1.splice(chordDescriptionArray_1.indexOf(util_service_1.UtilService.getFormattedNoteString(rootNote)));
                    var chordNoteArray = _.uniq(chordNotes);
                    var firstPortionOfNotes = chordNoteArray.splice(chordNoteArray.indexOf(rootNote));
                    return {
                        name: [util_service_1.UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: firstPortionOfNotes.concat(chordNoteArray),
                        type: chordPrimitive.type,
                        description: firstPortionOfChordDescription.concat(chordDescriptionArray_1).join(', ')
                    };
                }
                else {
                    return {
                        name: [util_service_1.UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: [],
                        type: chordPrimitive.type,
                        description: _.sortBy(_.uniq(chordDescription)).join(', ')
                    };
                }
            });
            chords = chords.concat(assembledChords);
        }
        return chords;
    };
    ChordPrimitivesData.getAvailableChordPrimitives = function () {
        return [
            {
                name: 'Major',
                steps: ['1', '3', '5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Sixth',
                steps: ['1', '3', '5', '6'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Six Nine',
                steps: ['1', '3', '5', '6', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Added Ninth',
                steps: ['1', '3', '5', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh',
                steps: ['1', '3', '5', '7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Flat Five',
                steps: ['1', '3', 'b5', '7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Sharp Five',
                steps: ['1', '3', '#5', '7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Ninth',
                steps: ['1', '3', '5', '7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Eleventh',
                steps: ['1', '3', '5', '7', '(9)', '11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Thirteenth',
                steps: ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps: ['1', '3', '5', '7', '#11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Flat Five',
                steps: ['1', '3', 'b5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Minor',
                steps: ['1', 'b3', '5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Sixth',
                steps: ['1', 'b3', '5', '6'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seventh',
                steps: ['1', 'b3', '5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Added Ninth',
                steps: ['1', 'b3', '5', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Six Add Nine',
                steps: ['1', 'b3', '5', '6', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Ninth',
                steps: ['1', 'b3', '5', 'b7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Eleventh',
                steps: ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Thirteenth',
                steps: ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Seventh',
                steps: ['1', 'b3', '5', '7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Ninth',
                steps: ['1', 'b3', '5', '7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Eleventh',
                steps: ['1', 'b3', '5', '7', '(9)', '11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Thirteenth',
                steps: ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Seventh',
                steps: ['1', '3', '5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Ninth',
                steps: ['1', '3', '5', 'b7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Eleventh',
                steps: ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Thirteenth',
                steps: ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five',
                steps: ['1', '3', '#5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five',
                steps: ['1', '3', 'b5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Ninth',
                steps: ['1', '3', '5', 'b7', 'b9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Ninth',
                steps: ['1', '3', '5', 'b7', '#9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Sharp Five',
                steps: ['1', '3', '#5', 'b7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Flat Five',
                steps: ['1', '3', 'b5', 'b7', '9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps: ['1', '3', '#5', 'b7', '#9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps: ['1', '3', '#5', 'b7', 'b9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps: ['1', '3', 'b5', 'b7', '#9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps: ['1', '3', 'b5', 'b7', 'b9'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Eleven',
                steps: ['1', '3', '5', 'b7', '#11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Diminished',
                steps: ['1', 'b3', 'b5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Diminished Seventh',
                steps: ['1', 'b3', 'b5', 'bb7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Half Diminished',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented',
                steps: ['1', '3', '#5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented Seventh',
                steps: ['1', '3', '#5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Fifth',
                steps: ['1', '5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Flat Fifth',
                steps: ['1', 'b5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Fourth',
                steps: ['1', '4', '5'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Second',
                steps: ['1', '2', '5', '(9)'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Seventh',
                steps: ['1', '4', '5', 'b7'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Sharp Eleven',
                steps: ['1', '5', '#11'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    };
    return ChordPrimitivesData;
}());
exports.ChordPrimitivesData = ChordPrimitivesData;
//# sourceMappingURL=chordPrimitives.data.js.map