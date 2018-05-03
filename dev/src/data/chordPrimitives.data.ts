import { ChordOrScalePrimitiveInterface } from '../../interfaces/chordOrScalePrimitiveInterface';
import { ChordOrScaleTypeConstant } from '../../constants/chordOrScaleType.constant';
import { ChordInterface } from '../../interfaces/chord.interface';
import { UtilService } from '../services/util.service';
import { NoteConstant } from '../../constants/note.constant';
import * as _ from 'lodash';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ScalesData } from './scales.data';

/**
 * Class for holding and compiling chord primitives
 */
export class ChordPrimitivesData {

    /**
     * @param step 1-indexed step representation
     * @param rootScaleLength length of scale to modulate over
     * @returns a 0-indexed scale note index given a 1-indexed step and the root scale length
     */
    private static getScaleNoteIndex(step: string, rootScaleLength: number): number {
        // subtract one to match step with 0-indexed scale note array
        return UtilService.modulo(parseInt(step, 10) - 1, rootScaleLength);
    }

    /**
     * @returns list of compiled chords
     */
    public static compileChordPrimitivesIntoChords(): ChordInterface[] {
        const chordPrimitives: ChordOrScalePrimitiveInterface[] = this.getAvailableChordPrimitives();
        const noteLength: number = UtilService.getLengthOfEnum(NoteConstant);
        const scales: ScaleInterface[] = ScalesData.getAvailableScales();
        let chords: ChordInterface[] = [];
        let chordNotes: NoteConstant[];
        let assembledChords: ChordInterface[] = [];
        let rootNote: NoteConstant;
        let scaleNoteIndex: number;
        let noteToAdd: NoteConstant;
        let rootScale: ScaleInterface;
        let rootScaleLength: number;
        let chordDescription: string[];
        const defaultScale: ScaleInterface = {
            name: 'Empty Scale',
            notes: [],
            type: ChordOrScaleTypeConstant.MISCELLANEOUS,
            description: ''
        };
        // loop through each possible root note
        for(let i: number = 0; i < noteLength; i++) {
            rootNote = UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[i]);
            // compile each scale for the given root note
            assembledChords = _.map(chordPrimitives, (chordPrimitive: ChordOrScalePrimitiveInterface): ChordInterface => {
                chordNotes = [];
                chordDescription = [];
                if (chordPrimitive.type === ChordOrScaleTypeConstant.MINOR) {
                    // use minor scale as basis for selecting notes
                    rootScale = _.find(scales, (scale: ScaleInterface) => {
                        return scale.name.toLowerCase().indexOf('aeolian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                } else {
                    // use major scale as basis for selecting notes
                    rootScale = _.find(scales, (scale: ScaleInterface) => {
                        return scale.name.toLowerCase().indexOf('ionian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                }
                if (!!rootScale) {
                    rootScaleLength = rootScale.notes.length;
                    // use the steps to determine the correct note sequence
                    _.each(chordPrimitive.steps, (step: string) => {
                        if (step.indexOf('b') !== -1) {
                            if (step.indexOf('bb') !== -1) {
                                scaleNoteIndex = this.getScaleNoteIndex(step.substr(2, step.length), rootScaleLength);
                                noteToAdd = UtilService.modulo(rootScale.notes[scaleNoteIndex] - 2, noteLength);
                            } else {
                                scaleNoteIndex = this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                                noteToAdd = UtilService.modulo(rootScale.notes[scaleNoteIndex] - 1, noteLength);
                            }
                        } else if (step.indexOf('#') !== -1) {
                            scaleNoteIndex = this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = UtilService.modulo(rootScale.notes[scaleNoteIndex] + 1, noteLength);
                        } else if (step.indexOf('(') !== -1) {
                            scaleNoteIndex = this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        } else {
                            scaleNoteIndex = this.getScaleNoteIndex(step, rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        }
                        let noteDescription: string = UtilService.getFormattedNoteString(UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[noteToAdd]), chordNotes);
                        if (step.indexOf('(') !== -1) {
                            noteDescription = ['(', noteDescription, ')'].join('');
                        }
                        chordDescription.push(noteDescription);
                        chordNotes.push(noteToAdd);
                    });
                    let chordDescriptionArray: string[] = _.sortBy(_.uniq(chordDescription), (noteDescription: string) => {
                        // sort by note and do not include optional parentheses
                        if (noteDescription.indexOf('(') !== -1) {
                            return noteDescription.substr(1, noteDescription.length);
                        } else {
                            return noteDescription;
                        }
                    });
                    chordDescriptionArray = _.filter(chordDescriptionArray, (noteDescription: string) => {
                        if (noteDescription.indexOf('(') === -1) {
                            // check to see if note is optional elsewhere in array
                            return chordDescriptionArray.indexOf(['(', noteDescription, ')'].join('')) === -1;
                        } else {
                            return true;
                        }
                    });
                    // order description and notes array starting from the root note
                    const firstPortionOfChordDescription = chordDescriptionArray.splice(chordDescriptionArray.indexOf(UtilService.getFormattedNoteString(rootNote)));
                    const chordNoteArray: NoteConstant[] = _.uniq(chordNotes);
                    const firstPortionOfNotes: NoteConstant[] = chordNoteArray.splice(chordNoteArray.indexOf(rootNote));
                    return {
                        name: [UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: firstPortionOfNotes.concat(chordNoteArray),
                        type: chordPrimitive.type,
                        description: firstPortionOfChordDescription.concat(chordDescriptionArray).join(', ')
                    };
                } else {
                    return {
                        name: [UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: [], // error finding root scale
                        type: chordPrimitive.type,
                        description: _.sortBy(_.uniq(chordDescription)).join(', ')
                    };
                }
            });
            chords = chords.concat(assembledChords);
        }
        return chords;
    }

    /**
     * @returns list of chord primitives
     */
    private static getAvailableChordPrimitives(): ChordOrScalePrimitiveInterface[] {
        return [
            {
                name: 'Major',
                steps:  ['1', '3', '5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Sixth',
                steps:  ['1', '3', '5', '6'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Six Nine',
                steps:  ['1', '3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Added Ninth',
                steps:  ['1', '3', '5', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh',
                steps:  ['1', '3', '5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Flat Five',
                steps:  ['1', '3', 'b5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Sharp Five',
                steps:  ['1', '3', '#5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Ninth',
                steps:  ['1', '3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Eleventh',
                steps:  ['1', '3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Thirteenth',
                steps:  ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps:  ['1', '3', '5', '7', '#11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Flat Five',
                steps:  ['1', '3', 'b5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Minor',
                steps:  ['1', 'b3', '5'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Sixth',
                steps:  ['1', 'b3', '5', '6'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seventh',
                steps:  ['1', 'b3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Added Ninth',
                steps:  ['1', 'b3', '5', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Six Add Nine',
                steps:  ['1', 'b3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Ninth',
                steps:  ['1', 'b3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Eleventh',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Thirteenth',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Seventh',
                steps:  ['1', 'b3', '5', '7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Ninth',
                steps:  ['1', 'b3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Eleventh',
                steps:  ['1', 'b3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Thirteenth',
                steps:  ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Seventh',
                steps:  ['1', '3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Ninth',
                steps:  ['1', '3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Eleventh',
                steps:  ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Thirteenth',
                steps:  ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five',
                steps:  ['1', '3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Ninth',
                steps:  ['1', '3', '5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Ninth',
                steps:  ['1', '3', '5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Sharp Five',
                steps:  ['1', '3', '#5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Flat Five',
                steps:  ['1', '3', 'b5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps:  ['1', '3', '#5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps:  ['1', '3', '#5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps:  ['1', '3', 'b5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps:  ['1', '3', 'b5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Eleven',
                steps:  ['1', '3', '5', 'b7', '#11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Diminished',
                steps:  ['1', 'b3', 'b5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Diminished Seventh',
                steps:  ['1', 'b3', 'b5', 'bb7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Half Diminished',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented',
                steps:  ['1', '3', '#5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented Seventh',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Fifth',
                steps:  ['1', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Flat Fifth',
                steps:  ['1', 'b5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Fourth',
                steps:  ['1', '4', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Second',
                steps:  ['1', '2', '5', '(9)'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Seventh',
                steps:  ['1', '4', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Sharp Eleven',
                steps:  ['1', '5', '#11'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    }
}