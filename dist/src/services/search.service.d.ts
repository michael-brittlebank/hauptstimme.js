/// <reference types="bluebird" />
import { NoteConstant } from '../../constants/note.constant';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';
import * as Promise from 'bluebird';
export declare class SearchService {
    static getScalesByNotes(notesArray: NoteConstant[]): Promise<ScaleInterface[]>;
    static getChordsByNotes(notesArray: NoteConstant[]): Promise<ChordInterface[]>;
    static getChordsAndScalesByNotes(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
}
