import { NoteConstant } from '../../';
import { ScaleInterface } from '../../';
import { ChordInterface } from '../../';
import { SearchResponseInterface } from '../../';
export declare class SearchService {
    static getScalesByNotes(notesArray: NoteConstant[]): Promise<ScaleInterface[]>;
    static getChordsByNotes(notesArray: NoteConstant[]): Promise<ChordInterface[]>;
    static getChordsAndScalesByNotes(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
}
