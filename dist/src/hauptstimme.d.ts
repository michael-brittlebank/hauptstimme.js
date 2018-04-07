/// <reference types="bluebird" />
import { ChordInterface, InstrumentInterface, NoteConstant, ScaleInterface, SearchResponseInterface } from '..';
import * as Promise from 'bluebird';
export declare class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    static getAvailableInstruments(): Promise<InstrumentInterface[]>;
    static getAvailableScales(): Promise<ScaleInterface[]>;
    static getAvailableChords(): Promise<ChordInterface[]>;
    static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
}
