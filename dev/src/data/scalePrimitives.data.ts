import { ChordOrScalePrimitiveInterface } from '../../interfaces/chordOrScalePrimitiveInterface';
import { ChordOrScaleTypeConstant } from '../../constants/chordOrScaleType.constant';
import { ScaleInterface } from '../../interfaces/scale.interface';
import * as _ from 'lodash';
import { NoteConstant } from '../../constants/note.constant';
import { UtilService } from '../services/util.service';

export class ScalePrimitivesData {

    public static compileScalePrimitivesIntoScales(): ScaleInterface[] {
        const scalePrimitives: ChordOrScalePrimitiveInterface[] = this.getAvailableScalePrimitives();
        const noteLength: number = UtilService.getLengthOfEnum(NoteConstant);
        let scales: ScaleInterface[] = [];
        let scaleNotes: NoteConstant[];
        let assembledScales: ScaleInterface[] = [];
        let rootNote: NoteConstant;
        let noteIndex: number;
        // loop through each possible root note
        for(let i: number = 0; i < noteLength; i++) {
            rootNote = UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[i]);
            // compile each scale for the given root note
            assembledScales = _.map(scalePrimitives, (scalePrimitive: ChordOrScalePrimitiveInterface): ScaleInterface => {
                noteIndex = i;
                scaleNotes = [rootNote];
                // use the steps to determine the correct note sequence
                _.each(scalePrimitive.steps, (step: string) => {
                    noteIndex = (noteIndex + parseInt(step, 10)) % noteLength;
                    scaleNotes.push(UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[noteIndex]));
                });
                // remove last element in array as it is the same as the first (root) note
                scaleNotes.splice(-1,1);
                return {
                    name: [UtilService.getFormattedNoteString(rootNote), scalePrimitive.name].join(' '),
                    notes: scaleNotes,
                    type: scalePrimitive.type
                };
            });
            scales = scales.concat(assembledScales);
        }
        return scales;
    }

    private static getAvailableScalePrimitives(): ChordOrScalePrimitiveInterface[] {
        return [
            {
                name: 'Major Ionian',
                steps: ['2', '2', '1', '2', '2', '2', '1'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Dorian',
                steps: ['2', '1', '2', '2', '2', '1', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Phrygian',
                steps: ['1', '2', '2', '2', '1', '2', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Lydian',
                steps: ['2', '2', '2', '1', '2', '2', '1'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Mixolydian',
                steps: ['2', '2', '1', '2', '2', '1', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Minor Aeolian',
                steps: ['2', '1', '2', '2', '1', '2', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Locrian',
                steps: ['1', '2', '2', '1', '2', '2', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Major Pentatonic',
                steps: ['2', '2', '3', '2', '3'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Minor Pentatonic',
                steps: ['3', '2', '2', '3', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Harmonic Minor',
                steps: ['2', '1', '2', '2', '1', '3', '1'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Melodic Minor',
                steps: ['2', '1', '2', '2', '2', '2', '1'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Blues',
                steps: ['3', '2', '1', '1', '3', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Mixo Blues',
                steps: ['2', '1', '1', '1', '1', '1', '2', '1', '2'],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Diminished Whole Half',
                steps: ['2', '1', '2', '1', '2', '1', '2', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Diminished Half Whole',
                steps: ['1', '2', '1', '2', '1', '2', '1', '2'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Whole Tone',
                steps: ['2', '2', '2', '2', '2', '2'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Hungarian Minor',
                steps: ['2', '1', '3', '1', '1', '3', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Hungarian Gypsy',
                steps: ['2', '1', '3', '1', '1', '2', '2'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Double Harmonic',
                steps: ['1', '3', '1', '2', '1', '3', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Enigmatic',
                steps: ['1', '3', '2', '2', '2', '1', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Altered',
                steps: ['1', '2', '1', '2', '2', '2', '2'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Major Neapolitan',
                steps: ['1', '2', '2', '2', '2', '2', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Minor Neapolitan',
                steps: ['1', '2', '2', '2', '1', '3', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Persian',
                steps: ['1', '3', '1', '1', '2', '3', '1'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Ukranian Dorian',
                steps: ['2', '1', '3', '1', '2', '1', '2'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Yo',
                steps: ['2', '3', '2', '2', '3'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    }
}