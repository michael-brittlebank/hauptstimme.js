import { ChordsData, NoteConstant, ScalesData } from '../../';
import { ScaleInterface } from '../../';
import * as _ from 'lodash';
import { ChordInterface } from '../../';
import { SearchResponseInterface } from '../../';

export class SearchService {

    public static getScalesByNotes(notesArray: NoteConstant[]): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            const availableScales: ScaleInterface[] = _.filter(ScalesData.getAvailableScales(), (scale: ScaleInterface) => {
                for (let i: number = 0; i < notesArray.length; i++) {
                    if (scale.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableScales);
        });
    }

    public static getChordsByNotes(notesArray: NoteConstant[]): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            const availableChords: ChordInterface[] = _.filter(ChordsData.getAvailableChords(), (chord: ChordInterface) => {
                for (let i: number = 0; i < notesArray.length; i++) {
                    if (chord.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableChords);
        });
    }

    public static getChordsAndScalesByNotes(notesArray: NoteConstant[]): Promise<SearchResponseInterface> {
        return new Promise((resolve, reject) => {
            return Promise.all([
                this.getChordsByNotes(notesArray),
                this.getScalesByNotes(notesArray)
            ])
                .then((response: any[]) => {
                    const searchResults: SearchResponseInterface = {
                        chords: response[0],
                        scales: response[1]
                    };
                    resolve(searchResults);
                });
        });
    }
}