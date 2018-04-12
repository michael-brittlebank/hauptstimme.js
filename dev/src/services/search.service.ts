import { ScalesData } from '../data/scales.data';
import { NoteConstant } from '../../constants/note.constant';
import { ScaleInterface } from '../../interfaces/scale.interface';
import * as _ from 'lodash';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';
import * as Promise from 'bluebird';
import { ChordsData } from '../data/chords.data';
import { SearchRequestInterface } from '../../interfaces/searchRequest.interface';

export class SearchService {

    public static getScalesByNotes(notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            const availableScales: ScaleInterface[] = _.filter(ScalesData.getAvailableScales(), (scale: ScaleInterface) => {
                if (typeof rootNote === "number" && scale.notes[0] !== rootNote) {
                    return false;
                }
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

    public static getChordsByNotes(notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            const availableChords: ChordInterface[] = _.filter(ChordsData.getAvailableChords(), (chord: ChordInterface) => {
                if (typeof rootNote === "number" && chord.notes[0] !== rootNote) {
                    return false;
                }
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

    public static getChordsAndScalesByNotes(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface> {
        return new Promise((resolve, reject) => {
            return Promise.all([
                this.getChordsByNotes(searchRequest.notes, searchRequest.rootNote),
                this.getScalesByNotes(searchRequest.notes, searchRequest.rootNote)
            ])
                .then((response: any[]) => {
                    const searchResults: SearchResponseInterface = {
                        chords: response[0],
                        scales: response[1]
                    };
                    resolve(searchResults);
                })
                .catch((error: any) => {
                    console.warn(error);
                });
        });
    }
}