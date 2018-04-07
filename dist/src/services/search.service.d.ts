import { NoteConstant } from '../../';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';
export declare class SearchService {
    static getScalesByNotes(notesArray: NoteConstant[]): ScaleInterface[];
    static getChordsByNotes(notesArray: NoteConstant[]): ChordInterface[];
    static getChordsAndScalesByNotes(notesArray: NoteConstant[]): SearchResponseInterface;
}
