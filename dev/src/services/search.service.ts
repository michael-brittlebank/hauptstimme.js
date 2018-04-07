import { ChordsData, NoteConstant, ScalesData } from '../../';
import { ScaleInterface } from '../../interfaces/scale.interface';
import * as _ from 'lodash';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';

export class SearchService {

    public static getScalesByNotes(notesArray: NoteConstant[]): ScaleInterface[] {
        const availableScales: ScaleInterface[] = ScalesData.getAvailableScales();
        return _.filter(availableScales, (scale: ScaleInterface) => {
            for (let i: number = 0; i < notesArray.length; i++) {
                if (scale.notes.indexOf(notesArray[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

    public static getChordsByNotes(notesArray: NoteConstant[]): ChordInterface[] {
        const availableChords: ChordInterface[] = ChordsData.getAvailableChords();
        return _.filter(availableChords, (chord: ChordInterface) => {
            for (let i: number = 0; i < notesArray.length; i++) {
                if (chord.notes.indexOf(notesArray[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

    public static getChordsAndScalesByNotes(notesArray: NoteConstant[]): SearchResponseInterface {
        const availableChords: ChordInterface[] = this.getChordsByNotes(notesArray);
        const availableScales: ScaleInterface[] = this.getScalesByNotes(notesArray);
        return {
            chords: availableChords,
            scales: availableScales
        }
    }
}