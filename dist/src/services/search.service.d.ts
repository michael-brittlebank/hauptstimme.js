/// <reference types="bluebird" />
import { NoteConstant } from '../../constants/note.constant';
import { ScaleInterface } from '../../interfaces/scale.interface';
import { ChordInterface } from '../../interfaces/chord.interface';
import { SearchResponseInterface } from '../../interfaces/searchResponse.interface';
import * as Promise from 'bluebird';
import { SearchRequestInterface } from '../../interfaces/searchRequest.interface';
export declare class SearchService {
    static getScalesByNotes(notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ScaleInterface[]>;
    static getChordsByNotes(notesArray: NoteConstant[], rootNote?: NoteConstant): Promise<ChordInterface[]>;
    static getChordsAndScalesByNotes(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface>;
}
