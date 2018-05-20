import { NoteConstant } from '../../constants/note.constant';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';
import { SearchRequestInterface } from '../../interfaces/searchRequest.interface';
import filter = require('lodash/filter')

/**
 * Class for search-related methods
 */
export class SearchService {

    /**
     * @returns list of available instruments
     */
    public static getScalesByNotes(availableScales: ScaleInterface[], notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            const filteredScales: ScaleInterface[] = filter(availableScales, (scale: ScaleInterface) => {
                if (typeof rootNote === 'number' && scale.notes[0] !== rootNote) {
                    return false;
                }
                for (let i: number = 0; i < notesArray.length; i++) {
                    if (scale.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(filteredScales);
        });
    }

    public static getChordsByNotes(availableChords: ChordInterface[], notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            const filteredChords: ChordInterface[] = filter(availableChords, (chord: ChordInterface) => {
                if (typeof rootNote === 'number' && chord.notes[0] !== rootNote) {
                    return false;
                }
                for (let i: number = 0; i < notesArray.length; i++) {
                    if (chord.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(filteredChords);
        });
    }

    public static getChordsAndScalesByNotes(searchRequest: SearchRequestInterface, availableScales: ScaleInterface[], availableChords: ChordInterface[]): Promise<SearchResponseInterface> {
        return new Promise((resolve, reject) => {
            return Promise.all([
                this.getChordsByNotes(availableChords, searchRequest.notes, searchRequest.rootNote),
                this.getScalesByNotes(availableScales, searchRequest.notes, searchRequest.rootNote)
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